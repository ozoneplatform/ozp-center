'use strict';

var React = require('react');
var PropTypes = React.PropTypes;

var Reflux = require('reflux');

var humps = require('humps');

var _ = require('../../../utils/_');
var ProfileSearchStore = require('../../../stores/ProfileSearchStore');
var Toggle = require('./Toggle.jsx');
var TextInput = require('./TextInput.jsx');
var TextAreaInput = require('./TextAreaInput.jsx');
var ImageInput = require('./ImageInput.jsx');
var InputMixin = require('./InputMixin.jsx');
var Select2Input = require('./Select2Input.jsx');
var ValidatedFormMixin = require('./ValidatedFormMixin');


/**
 * @property {object} state
 * @property {CustomField[]} state.customFieldDefs
 * @property {CustomFieldValue[]} state.customFields
 */
var CustomFieldInput = React.createClass({

    mixins: [
        Reflux.listenTo(ProfileSearchStore, 'onStoreChange'),
        ValidatedFormMixin,
        _.omit(InputMixin, 'shouldComponentUpdate', 'render', 'getInitialState')
    ],

    propTypes: {
        currentUser: PropTypes.object,
        customFieldDefs: PropTypes.array,
        customFieldsAll: PropTypes.array,
        customFieldsObject: PropTypes.array,
        errors: PropTypes.any,
        forceError: PropTypes.bool,
        listing: PropTypes.object,
        listingTypes: PropTypes.array,
        listing_type: PropTypes.string,
        messages: PropTypes.object,
        requestChange: PropTypes.func,
        setter: PropTypes.func,
        system: PropTypes.object,
        types: PropTypes.array,
        user: PropTypes.object,
        value: PropTypes.any,
        warnings: PropTypes.any
    },

    getInitialState: function () {
        return {
            customFieldDefs: [],
            customFieldsAllTypes: this.props.customFieldsAll,
            customFields: this.props.value,
        };
    },

    componentDidMount: function () {
        this.updateCustomFields();
    },

    shouldComponentUpdate: function (newProps, newState) {
        //Update when TYPE changes or custom fields change
        if (newProps.listing_type !== this.props.listing_type) {
            return true;
        }

        if (!_.isEqual(newState.customFieldDefs, this.state.customFieldDefs))
            return true;

        if (!_.isEqual(newState.customFields, this.state.customFields)) {
            return true;
        }

        return !_.isEqual(newProps, this.props);
    },

    componentDidUpdate: function (prevProps, prevState) {
        if (prevProps.listing_type !== this.props.listing_type) {
            this.updateCustomFields();
        }
    },

    /**
     * De-duplicate CustomFields for the Listing Type also marked as 'All Listing Types'
     *
     * @returns {{fields: CustomField[], values: CustomFieldValue[]}}
     */
    getCustomFields: function () {
        var listing = this.props.listing;

        var listingTypeTitle = this.props.listing_type;
        if (!listingTypeTitle) return {
            fields: [],
            values: []
        };

        var allTypesFields = this.props.customFieldsAll || [];

        var listingTypeIdx = this.props.listingTypes.findIndex(lt => lt.title === listingTypeTitle);
        var listingFields = listingTypeIdx > -1 ? this.props.listingTypes[listingTypeIdx].customFields : [];

        var fields = union(listingFields, allTypesFields).filter((obj, key, arr) => {
            return arr.map(obj2 => obj2['id']).indexOf(obj['id']) === key;
        });

        /** @type {CustomField[]} */
        var prevValues = listing.customFields || [];

        var values = [];
        for (var i = 0, n = prevValues.length; i < n; i++) {
            var value = prevValues[i];
            if (fields.filter(field => value.customField === field.id).length > 0) {
                values.push(value);
            }
        }

        return {
            fields: fields,
            values: values
        };
    },

    updateCustomFields: function () {
        var result = this.getCustomFields();

        this.setState({
            customFieldDefs: result.fields,
            customFields: result.values
        });

        this.props.setter(result.values);
    },

    /**
     *
     * @param {CustomFieldValue} fieldValue
     */
    updateCustomFieldState: function (fieldValue) {
        //Clone Array
        var customFields = _.cloneDeep(this.state.customFields);
        var fieldId = parseInt(fieldValue.customField);
        var updated = false;

        for (var i = 0; i < customFields.length; i++) {
            if (customFields[i].customField === fieldId) {
                customFields[i].value = fieldValue.value;
                updated = true;
                break;
            }
        }

        if (!updated) {
            fieldValue.customField = fieldId;
            customFields.push(fieldValue);
        }
        this.setState({ customFields: customFields });
        this.props.setter(customFields);
    },

    toggleCheckbox: function (evt) {
        var id = getEventCustomFieldId(evt);
        var val = String(evt.target.checked || false);

        this.updateCustomFieldState({ value: val, customField: id });
    },

    onChangeText: function (evt) {
        evt.preventDefault();

        var id = getEventCustomFieldId(evt);
        var value = evt.target.value;

        this.updateCustomFieldState({ value: value, customField: id });
    },

    onChangeImage: function (evt) {
        evt.preventDefault();

        var id = getEventCustomFieldId(evt);
        var value = typeof evt.target.files !== 'undefined' ? evt.target.files[0] : evt.target;

        var errorText = "The image you tried to upload does not meet the requirements. Please upload an image less than 1MB.";
        if (value.type === 'image/gif' || value.type === 'image/png' || value.type === 'image/jpeg') {
            errorText = "The image you tried to upload does not meet the requirements. Please upload a JPG, PNG, or GIF.";
            if (value.size <= 1024000) {
                // this.props.setter(value);
                this.updateCustomFieldState({ value: value, customField: id });
                return;
                // this.setState({changedSinceUpdate: true});
            }
        }

        sweetAlert({
            title: "Could not upload!",
            text: errorText,
            type: "error",
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Ok",
            closeOnConfirm: true,
            html: false
        });
        this.updateCustomFieldState({ value: "", customField: id });
    },

    isOwner: function () {
        var currentUser = this.props.user;
        if (currentUser.username === "Masked Username") {
            return false;
        }

        var owners = this.props.listing.owners;
        var ownerUsernames = owners.map((owner) => owner.username);

        return _.contains(ownerUsernames, currentUser.username);
    },

    isSteward: function () {
        var currentUser = this.props.user;
        var listingAgency = this.props.listing.agencyShort;

        return _.contains(currentUser.stewardedOrganizations, listingAgency);
    },

    isAdmin: function () {
        var currentUser = this.props.user;
        return currentUser.isAdmin();
    },

    render: function () {
        var isAdminUser = this.isAdmin() || this.isSteward() || this.isOwner();

        var fields = this.state.customFieldDefs || [];
        if (fields.length > 0) {
            var prefix = 'create-edit-custom-field-';
            var cfo = this.state.customFields;
            return (
                <div id="create-edit-custom-fields" className="form-group">
                    <h2>Custom Fields</h2>
                    {fields instanceof Array &&
                    fields.map(field => {
                        field = humps.camelizeKeys(field);
                        if (!field.adminOnly || (isAdminUser && field.adminOnly)) {
                            var opts = field.properties === "" ? null : this.tryParseJSON(field.properties);
                            var props = _.omit(this.getInputProps(), 'value', 'setter');
                            props.id = prefix + field.id;
                            props.label = field.label;
                            props.description = field.description;
                            props.help = field.tooltip;
                            props.optional = !field.isRequired;
                            props.error = (this.props.errors || {})[`customFields.${field.id}`];
                            props.warning = (this.props.warnings || {})[`customFields.${field.id}`];
                            props.forceError = this.props.forceError;

                            var obj = cfo.filter(cfv => cfv.customField === field.id);
                            if (obj.length > 0) {
                                props.value = obj[0].value;
                                obj[0]['required'] = field.isRequired;
                            } else {
                                var value = field.type.name === 'Checkbox' ? 'false' : "";
                                cfo.push({ customField: field.id, value: value, required: field.isRequired });
                            }

                            switch (field.type.name) {
                                case 'text':
                                    return this.renderInput(props);
                                case 'textarea':
                                    return this.renderTextArea(props);
                                case 'checkbox':
                                    return this.renderCheckbox(props, opts);
                                case 'dropdown':
                                    return this.renderDropdown(props, opts);
                                case 'image':
                                    return this.renderImage(props);
                                default:
                                    console.warning("Unknown Custom Field Type '" + field.type.name + "'");
                            }
                        }
                    })
                    }

                </div>
            );
        }
        return null;
    },

    tryParseJSON: function (json) {
        try {
            var jsonObj = JSON.parse(json);
            if (jsonObj && typeof jsonObj === "object" && jsonObj !== null)
                return jsonObj;
            else {
                return null;
            }
        } catch (e) {
            return null;
        }
    },

    removeCustomFieldImage: function (evt) {
        evt.preventDefault();

        var id = getEventCustomFieldId(evt);
        var customFields = JSON.parse(JSON.stringify(this.state.customFields));

        for (var i = 0; i < customFields.length; i++) {
            if (customFields[i].customField === id) {
                customFields.splice(i, 1);
                this.props.setter(customFields);
                this.setState({ customFields: customFields });
                return;
            }
        }
    },

    renderImage: function (props) {
        props.removeImage = this.removeCustomFieldImage;
        props.onChange = this.onChangeImage;

        return <ImageInput id={props.id} {...props}
                           imageUri={props.value}/>
    },

    renderDropdown: function (props, opts) {
        if (opts && opts.choices) props.options = opts.choices;

        props.onChange = this.onChangeText;

        return <Select2Input id={props.id} {...props} />;
    },

    renderCheckbox: function (props, opts) {
        if (opts && opts.enabled) props.enabledText = opts.enabled;
        if (opts && opts.disabled) props.disabledText = opts.disabled;

        props.value = props.value ? (props.value === 'true') : false;
        props.setCb = this.toggleCheckbox;

        return <Toggle id={props.id}
                       toggleId={props.label}
                       explanation={[
                           props.disabledText,
                           props.enabledText
                       ]}
                       {...props} />
    },

    renderInput: function (props) {
        props.onChange = this.onChangeText;

        return <TextInput id={props.id}
                          value={props.value}
                          {...props} />;
    },

    renderTextArea: function (props) {
        props.onChange = this.onChangeText;

        return <TextAreaInput getvalue={props.value}
                              {...props}
                              onChange={this.onChangeText}
                              rows={props.rows || '3'}/>
    },

});

module.exports = CustomFieldInput;


/**
 * @param {*[]} array1
 * @param {*[]} array2
 * @returns {*[]}
 */
function union(array1, array2) {
    return [...new Set([...array1, ...array2])];
}

/**
 * @param event
 * @returns {number}
 */
function getEventCustomFieldId(event) {
    var id = event.target.parentNode.id.split('-');
    return id[id.length - 1];
}


/**
 * @typedef CustomFieldType
 * @type {object}
 * @property {number} id
 * @property {string} name
 * @property {string} displayName
 * @property {string} mediaType
 * @property {string} options
 */

/**
 * @typedef CustomField
 * @type {object}
 * @property {number} id
 * @property {CustomFieldType} type
 * @property {string} label
 * @property {string} displayName
 * @property {string} section
 * @property {string} description
 * @property {string} tooltip
 * @property {string} properties
 * @property {boolean} adminOnly
 * @property {boolean} allListingTypes
 * @property {boolean} isRequired
 */

/**
 * @typedef CustomFieldValue
 * @type {object}
 * @property {number} id
 * @property {number} customField
 * @property {string} value
 */

/**
 * @typedef Listing
 * @type {object}
 * @property {CustomFieldValue} customFields
 */
