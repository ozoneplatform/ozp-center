'use strict';

var React = require('react');
var Reflux = require('reflux');
var LoadMask = require('../LoadMask.jsx');
var { pick, assign } = require('../../utils/_');
var { approvalStatus } = require('ozp-react-commons/constants');
var CurrentListingStore = require('../../stores/CurrentListingStore');
var CreateEditActions = require('../../actions/CreateEditActions');
var { Navigation } = require('react-router');
var { API_URL } = require('ozp-react-commons/OzoneConfig');
var NavBar = require('../NavBar/index.jsx');
var Sidebar = require('./Sidebar.jsx');
var { classSet } = React.addons;
var State = require('../../mixins/ActiveStateMixin');
var $ = require('jquery');
var ListingActions = require('../../actions/ListingActions');

require('sweetalert');

var {
    ValidatedFormMixin,
    ListInput,
    TextInput,
    ImageInput,
    Select2Input,
    Select2TagInput,
    CustomFieldInput,
    TextAreaInput,
    OwnerInput,
    Toggle,
    MarkingInput
} = require('./form');

var ResourceForm = require('./ResourceForm.jsx');
var ScreenshotForm = require('./ScreenshotForm.jsx');
var ContactForm = require('./ContactForm.jsx');

var savingMessages = {
    images: 'Uploading Images...',
    listing: 'Saving Listing...',
    exception: false
};

// formLinks object is used by formLinkGroups. formLinks is the config file to
// set up the side navigation panel in the createEdit view.
var formLinks = {
    basicInformation: {
        title: 'Basic Information',
        id: 'create-edit-basic-information'
    },
    securityMarking: {
        title: 'Security Marking',
        id: 'create-edit-security-marking'
    },
    title: {
        title: 'Name',
        id: 'create-edit-name'
    },
    type: {
        title: 'Listing Type',
        id: 'create-edit-type'
    },
    categories: {
        title: 'Categories',
        id: 'create-edit-categories'
    },
    tags: {
        title: 'Tags',
        id: 'create-edit-tags'
    },
    description: {
        title: 'Full Description',
        id: 'create-edit-full-description'
    },
    descriptionShort: {
        title: 'Short Description',
        id: 'create-edit-short-description'
    },
    listingDetails: {
        title: 'Listing Details',
        id: 'create-edit-listing-details'
    },
    versionNumber: {
        title: 'Version Number',
        id: 'create-edit-version-number'
    },
    launchUrl: {
        title: 'Listing URL',
        id: 'create-edit-listing-url'
    },
    usage_requirements: {
        title: 'Usage Requirements',
        id: 'create-edit-usage-requirements'
    },
    system_requirements: {
        title: 'System Requirements',
        id: 'create-edit-system-requirements'
    },
    isPrivate: {
        title: 'Private Listing',
        id: 'create-edit-isPrivate'
    },
    whatsNew: {
        title: "What's New",
        id: 'create-edit-whats-new'
    },
    intents: {
        title: 'Intents',
        id: 'create-edit-intents'
    },
    singleton: {
        title: 'Singleton',
        id: 'create-edit-singleton'
    },
    resources: {
        title: 'Resources',
        id: 'create-edit-resources'
    },
    graphics: {
        title: 'Graphics',
        id: 'create-edit-graphics'
    },
    smallIcon: {
        title: 'Small Icon',
        id: 'create-edit-small-icon',
        markingId: 'create-edit-small-icon-marking'
    },
    largeIcon: {
        title: 'Large Icon',
        id: 'create-edit-large-icon'
    },
    bannerIcon: {
        title: 'Small Banner',
        id: 'create-edit-small-banner'
    },
    featuredBannerIcon: {
        title: 'Large Banner',
        id: 'create-edit-large-banner'
    },
    screenshots: {
        title: 'Screenshots',
        id: 'create-edit-screenshots',
    },
    ownersAndContacts: {
        title: 'Owners & Contacts',
        id: 'create-edit-owners-contacts'
    },
    orgs: {
        title: 'Associated Organization',
        id: 'create-edit-orgs'
    },
    owners: {
        title: 'Owners',
        id: 'create-edit-owners'
    },
    contacts: {
        title: 'Contacts',
        id: 'create-edit-contacts'
    },
    customFields: {
        title: 'Custom Fields',
        id: 'create-edit-custom-fields'
    }
};


// formLinkGroups splits the formLinks into logical groups, with each link
// being the accordion header and the array of links being the contents of
// the expanded accordion.
var formLinkGroups = [{
    link: formLinks.basicInformation,
    links: [
        formLinks.securityMarking,
        formLinks.title,
        formLinks.type,
        formLinks.categories,
        formLinks.tags,
        formLinks.description,
        formLinks.descriptionShort,
        formLinks.customFields
    ]
}, {
    link: formLinks.listingDetails,
    links: [
        formLinks.versionNumber,
        formLinks.launchUrl,
        formLinks.isPrivate,
        formLinks.usage_requirements,
        formLinks.system_requirements,
        formLinks.whatsNew,
        formLinks.intents,
        formLinks.singleton,
    ]
}, {
    link: formLinks.resources,
    links: []
}, {
    link: formLinks.graphics,
    links: [
        formLinks.smallIcon,
        formLinks.largeIcon,
        formLinks.bannerIcon,
        formLinks.featuredBannerIcon,
        formLinks.screenshots
    ]
}, {
    link: formLinks.ownersAndContacts,
    links: [
        formLinks.orgs,
        formLinks.owners,
        formLinks.contacts
    ]
}];

function getOptionsWithPKForSystemObject(items) {
    return items.map(item => {

        return { pk: item.id, id: item.title, text: item.title, custom_fields: item.custom_fields };
    });
}

//TODO
function getOptionsForSystemObject(items) {
    return items.map(item => {
        return { id: item.title, text: item.title };
    });
}


function getOptionsForSimpleLists(items) {
    return items.map(item => {
        return { id: item, text: item };
    });
}

// This is the whole form for all the other createEdit createClass forms
var ListingForm = React.createClass({

    mixins: [ValidatedFormMixin, State],

    getInitialState: () => ({ currentNavTarget: null }),

    render: function () {
        var listing = this.props.value;
        var system = this.props.system;
        var organizations = system.organizations.map((x) => x.shortName);

        var customFieldSetter = field => {
            var customFieldsObject = this.props.value.customFieldsObject;
            var customFields = this.props.value.customFields;

            var updated = false;
            for (var i = 0; i < customFields.length; i++) {
                if (customFields[i].customField === field.id) {
                    this.props.value.customFields[i].value = field.value;
                    this.props.value.customFieldsObject[i].value = field.value;
                    updated = true;
                    break;
                }
            }

            if (!updated) {
                this.props.value.customFieldsObject.push(field);
                this.props.value.customFields.push({ customField: field.id, value: field.value });
            }
        };

        var ownerSetter = usernames => {
            this.props.requestChange(['owners'], usernames.map(u => {
                return { username: u };
            }));
        };

        var formProps = this.getFormComponentProps;
        var f = formLinks;

        var decodedUrl = (() => {
            var durl = formProps('launchUrl');
            durl.value = (durl.value) ? decodeURI(durl.value) : '';
            return durl;
        })();

        ///TODO uncomment alert and return and comment form return to cause the alert to display with no changes to the form allowed to be made
        /*
        sweetAlert({
          title: "Warning!",
          text: "AppsMall is under maintenance. No changes can be made to the lisitings at this time.",
          type: "error",
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Ok",
          closeOnConfirm: true,
          html: true
        });

        return(<h2 id={f.basicInformation.id}>Basic Information</h2>);
        */
        return (
            <form ref="form" className="CreateEdit__form col-xs-9 col-lg-10">
                <h2 id={f.basicInformation.id}>Basic Information</h2>

                <MarkingInput id={f.securityMarking.id}
                              {...formProps('securityMarking')}
                              aria-label={formProps('securityMarking').description}/>

                <TextInput id={f.title.id}
                           {...formProps('title')}
                           aria-label={formProps('title').description}/>

                <Select2Input id={f.type.id}
                              {...formProps('type')}
                              options={getOptionsWithPKForSystemObject(system.types)}/>

                <Select2Input id={f.categories.id}
                              {...formProps('categories')}
                              options={getOptionsForSystemObject(system.categories)}
                              multiple/>

                <Select2TagInput id={f.tags.id}
                                 showFOUOwarning="true"
                                 {...formProps('tags')}
                                 multiple/>

                <TextAreaInput id={f.description.id}
                               {...formProps('description')}
                               rows="6"/>

                <TextAreaInput id={f.descriptionShort.id}
                               {...formProps('descriptionShort')}
                               charLimit="100"
                               rows="3"/>

                <CustomFieldInput user={this.props.currentUser}
                                  errors={this.props.errors}
                                  customFieldsAll={system.customFieldsAll}
                                  warnings={this.props.warnings}
                                  customFieldDefs={this.state.customFieldDefs}
                                  customFieldsObject={this.props.value['customFieldsObject']}
                                  {...this.props}
                                  types={system.types}
                                  listing_type={this.props.value['type']}
                                  id={f.customFields.id}
                                  listing={this.props.value}
                                  listingTypes={this.props.system.types}
                                  {...formProps('customFields')} />

                <h2 id={f.listingDetails.id}>Listing Details</h2>

                <TextInput id={f.versionNumber.id} {...formProps('versionName')}/>

                <TextInput id={f.launchUrl.id} {...decodedUrl}/>

                <Toggle toggleId="privateListing"
                        explanation={['This web application/widget is visible to all agencies in the community',
                            'This web application/widget is only visible to your agency']}
                        id={f.isPrivate.id} {...formProps('isPrivate')} />

                <TextAreaInput id={f.usage_requirements.id} {...formProps('usage_requirements')} rows="5"/>

                <TextAreaInput id={f.system_requirements.id} {...formProps('system_requirements')} rows="5"/>

                <TextAreaInput id={f.whatsNew.id} {...formProps('whatIsNew')} rows="3" optional/>

                <Select2Input id={f.intents.id} {...formProps('intents')} multiple options={
                    this.props.system.intents.map(intent => {
                        return { id: intent.action, text: intent.action };
                    })
                } optional/>

                <Toggle toggleId="singletonListing"
                        explanation={['Multiple instances of this web application/widget can be launched in webtop',
                            'Only one instance of this web application/widget can be launched in webtop']}
                        id={f.singleton.id} {...formProps('singleton')} />

                <h2 id={f.resources.id}> Resources </h2>

                <ListInput {...this.getSubFormProps('docUrls')}
                           itemForm={ResourceForm} optional/>

                <h2 id={f.graphics.id}>Graphics</h2>

                <ImageInput id={f.smallIcon.id}
                            {...formProps('smallIcon')}
                            imageUri={this.props.value.imageSmallUrl}
                            serverError={this.props.imageErrors.smallIcon}/>

                <MarkingInput id={f.smallIcon.markingId} {...formProps('smallIconMarking')}
                              aria-label={formProps('smallIconMarking').description}/>

                <ImageInput id={f.largeIcon.id}
                            {...formProps('largeIcon')}
                            imageUri={this.props.value.imageMediumUrl}
                            serverError={this.props.imageErrors.largeIcon}/>

                <MarkingInput id={f.largeIcon.markingId}
                              {...formProps('largeIconMarking')}
                              aria-label={formProps('largeIconMarking').description}/>

                <ImageInput id={f.bannerIcon.id}
                            {...formProps('bannerIcon')}
                            imageUri={this.props.value.imageLargeUrl}
                            serverError={this.props.imageErrors.bannerIcon}/>

                <MarkingInput id={f.bannerIcon.markingId}
                              {...formProps('bannerIconMarking')}
                              aria-label={formProps('bannerIconMarking').description}/>

                <ImageInput id={f.featuredBannerIcon.id}
                            {...formProps('featuredBannerIcon')}
                            imageUri={this.props.value.imageXlargeUrl}
                            serverError={this.props.imageErrors.featuredBannerIcon}/>

                <MarkingInput id={f.featuredBannerIcon.markingId}
                              {...formProps('featuredBannerIconMarking')}
                              aria-label={formProps('featuredBannerIconMarking').description}/>

                <ListInput id={f.screenshots.id} {...this.getSubFormProps('screenshots')}
                           itemForm={ScreenshotForm}/>

                <h2 id={f.ownersAndContacts.id}>Owner Information and Contacts</h2>

                <Select2Input id={f.orgs.id}
                              {...formProps('agencyShort')}
                              options={getOptionsForSimpleLists(organizations)}/>

                <OwnerInput id={f.owners.id}
                            {...formProps('owners')}
                            listing={listing}
                            ownerSetter={ownerSetter}/>

                <ListInput id={f.contacts.id}
                           {...this.getSubFormProps('contacts')}
                           itemForm={ContactForm}/>

                <div className="space" style={{ 'height': '400px' }}>&#32;</div>
            </form>
        );
    },

    componentWillReceiveProps: function () {
        this.setState({ currentNavTarget: this.getQuery().el });
    },

    componentDidMount: function () {
        this.setState({ currentNavTarget: this.getQuery().el });
        var listing = this.props.value.certIssues;
        if (listing && listing.length > 0) {
            sweetAlert({
                title: "Warning!",
                text: "The following users in in the owner field have invalid certificates <font color='red'><b>" + listing + " </b></font>please remove these owners or notify them of this issue. You will be unable to save your listing until these changes have been made.",
                type: "error",
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Ok",
                closeOnConfirm: true,
                html: true
            });
            listing = [];
            this.setState({ currentNavTarget: 'create-edit-owners' });
        }
    },

    componentDidUpdate: function (prevProps, prevState) {
        var elId = this.state.currentNavTarget || 'notyetset';
        if (elId !== 'notyetset' && prevState.currentNavTarget !== elId) {

            var element = $(`#${elId}`),
                form = $(this.refs.form.getDOMNode()),
                firstFormChild = form.find(':first-child');

            if (element) {
                var elementOffset = element.offset().top,
                    formOffset = firstFormChild.offset().top;

                form.animate({
                    scrollTop: elementOffset - formOffset
                });
            }
        }
    }
}); // End ListingForm

function transitionToMyListings(transition) {
    transition.redirect('my-listings');
}

var CreateEditPage = React.createClass({

    mixins: [Reflux.connect(CurrentListingStore), Navigation, State],

    statics: {
        UNSAVED_MESSAGE: 'You have unsaved information, are you sure you want to leave this page?',

        willTransitionTo: function (transition, params, query, callback) {

            var listingId = params.listingId || query.listing;
            listingId = listingId === undefined ? undefined : parseInt(listingId, 10);
            var loadedListing = CurrentListingStore.getDefaultData().listing;
            var myListingsTransition = transitionToMyListings.bind(null, transition);

            function checkPermission() {
                CurrentListingStore.currentUserCanEdit() ?
                    callback() :
                    myListingsTransition();
            }

            if (loadedListing && loadedListing.id === listingId) {
                checkPermission();
            } else {
                CurrentListingStore.loadListing(listingId)
                    .done(checkPermission)
                    .fail(myListingsTransition);
            }
        },

        willTransitionFrom: function (transition, component) {
            var stripQuery = path => path.replace(/\?.*/, ''),
                currentPathBase = stripQuery(component.getPath()),
                newPathBase = stripQuery(transition.path);
            var { state } = component;

            // if we are actually moving away from this page, and we have changes
            if (newPathBase.indexOf(currentPathBase) !== 0 && state && state.hasChanges) {
                window.confirm(CreateEditPage.UNSAVED_MESSAGE) ?
                    CreateEditActions.discard() :
                    transition.abort();
            }
        }
    },

    getInitialState: function () {
        return {
            listing: null,
            activeId: null,
            hasChanges: false,
            scrollToError: false,
            imageErrors: { screenshots: [] },
            certIssues: [],
            timestamp: Date.now(),
            isValid: true
        };
    },

    onSave: function () {
        var scrollToError = false;

        if (this.state.listing.approvalStatus !== "IN_PROGRESS") {
            scrollToError = true;
        }
        CreateEditActions.save();
        this.setState({ scrollToError: scrollToError });
    },

    onClose: function () {
        this.transitionTo('my-listings');
    },

    onPreview: function () {
        var id = this.state.listing.id;
        this.transitionTo('edit', { listingId: id }, {
            listing: id,
            action: 'preview',
            tab: 'overview'
        });
    },

    onSubmit: function () {
        CreateEditActions.submit();
        this.setState({ scrollToError: true, lastUpdate: Date.now() });
    },


    childContextTypes: {
        lastUpdate: React.PropTypes.string.isRequired
    },

    getChildContext: function () {
        var lastUpdateState = this.state.lastUpdate || 'initial';
        return { lastUpdate: `${lastUpdateState}` };
    },

    scrollToError: function () {
        this.setState({ scrollToError: false });
        var $target = $('div.form-group.has-error');
        var form = $(this.refs.form.getDOMNode());
        var $firstFormElement = form.find(':first-child');

        if ($target[0]) {
            var scroll = $target.offset().top - $firstFormElement.offset().top;

            /* jshint ignore:start */
            sweetAlert({
                title: "Could not save!",
                text: "Your listing could not be saved because you have errors!",
                type: "error",
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "show errors",
                closeOnConfirm: true,
                html: false
            });
            /* jshint ignore:end */

            form.animate({
                scrollTop: scroll
            }, 'medium');
        }
    },

    handleFormScroll: function () {
        var lastScrolledPast = null;
        var form = $(this.refs.form.getDOMNode());

        form.children('h2').each(function () {
            var section = $(this);
            if (section.offset().top < (form.offset().top + 35.01)) {
                lastScrolledPast = section[0].id;
            }
        });

        if (!this.state.activeId) {
            this.setState({ activeId: formLinks.basicInformation.id });
        }

        if (lastScrolledPast && lastScrolledPast !== this.state.activeId) {
            this.setState({ activeId: lastScrolledPast });
        }
    },

    componentDidUpdate: function () {
        if (this.state.hasChanges) {
            window.addEventListener("beforeunload", this.newPage);
        } else {
            window.removeEventListener("beforeunload", this.newPage);
        }
        if (this.state.scrollToError && !this.state.isValid) {
            this.scrollToError(this.state.firstError);
        }

        var that = this;
        var scrollTimer;

        // Let's setup a timer so we don't check scroll more often than nessisary.
        // 20ms Seems to be a good mix between responsiveness and performance
        // requestAnimationFrame may also be a future option. Will come back to after
        // testing has been done.
        $(this.refs.form.getDOMNode()).on('scroll', function () {
            if (scrollTimer) {
                clearTimeout(scrollTimer);
            }
            scrollTimer = setTimeout(function () {
                that.handleFormScroll();
            }, 20);
        });
    },

    //HACK: need different height/overflow styling on the parent elements of this page,
    //in order to get the form to be the only scrollable element

    componentDidMount: function () {
        var main = $('#main');
        main.addClass('create-edit-open');

        this.listenTo(CreateEditActions.resetForm, () => {
            this.setState({ timestamp: Date.now() });
        });

        this.listenTo(ListingActions.saveFailed, this.handleMarkingError);
    },

    // Generate SweetAlert notifying user marking is too high for current user
    handleMarkingError: function (response) {
        var resp = JSON.parse(response.responseText);
        var msg; // Stores just one error message; user iterates until all errors are gone

        msg = resp.security_marking ? 'Listing ' + resp.security_marking[0].toLowerCase() : msg;
        msg = resp.small_icon ? 'Small Icon ' + resp.small_icon.security_marking[0].toLowerCase() : msg;
        msg = resp.large_icon ? 'Large Icon ' + resp.large_icon.security_marking[0].toLowerCase() : msg;
        msg = resp.banner_icon ? 'Small Banner ' + resp.banner_icon.security_marking[0].toLowerCase() : msg;
        msg = resp.large_banner_icon ? 'Large Banner ' + resp.large_banner_icon.security_marking[0].toLowerCase() : msg;

        if (resp.non_field_errors) {
            if (resp.non_field_errors == "Permissions are invalid for current owner profile") {
                msg = 'One of the listed owners cannot be added as a listing Owner.';
            } else {
                msg = resp.non_field_errors;
            }
        }

        if (resp.screenshots) {
            if (resp.screenshots[0].small_image) {
                msg = 'Preview Image ' + resp.screenshots[0].small_image.security_marking[0].toLowerCase();
            }
            if (resp.screenshots[0].large_image) {
                msg = 'Full Size Image ' + resp.screenshots[0].large_image.security_marking[0].toLowerCase();
            }
        }

        if (msg) {
            this.setState({
                saveStatus: 'exception'
            });
            /* jshint ignore:start */
            sweetAlert({
                title: "Could not save!",
                text: "Your listing could not be saved: " + msg,
                type: "error",
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "ok",
                closeOnConfirm: true,
                html: false
            });
            /* jshint ignore:end */
        }
    },

    componentWillUnmount: function () {
        var main = $('#main');
        main.removeClass('create-edit-open');
        window.removeEventListener("beforeunload", this.newPage);
    },

    // Ensures agency title corresponds to the short name selected by the user
    lookupAgencyTitle: function (listing) {
        if (listing && listing.agencyShort) {
            var title = _.find(this.props.system.organizations,
                { 'shortName': listing.agencyShort }).title;
            listing.agency = title;
        }
    },

    newPage: function (event) {
        event.returnValue = "You have unsaved changes on this page. If you continue all changes will be lost."
    },

    render: function () {
        var listing = this.state.listing;

        this.lookupAgencyTitle(listing);

        if (!listing) {
            return <p>loading...</p>;
        }

        var showSave = this.state.hasChanges || !listing.id;

        var saveBtnClasses = {
            'btn': true,
            'tool': true,
            'btn-success': !showSave,
            'btn-danger': showSave
        };

        var status = approvalStatus[listing.approvalStatus];
        var { IN_PROGRESS, REJECTED, PENDING_DELETION, DRAFT } = approvalStatus;
        var showSubmit = [IN_PROGRESS, REJECTED].some(s => s === status);
        var showUndelete = [PENDING_DELETION].some(s => s === status);
        var inProgress = [IN_PROGRESS].some(s => s === status);
        var showPreview = !!listing.id;
        var showDelete = !!listing.id;
        var titleText = (this.getParams().listingId ? 'Edit ' : 'Create New ') + 'Listing';
        var saveText = showSave ? 'icon-save-white' : 'icon-check-white';
        var savingText = savingMessages[this.state.saveStatus];
        var idString = listing ? listing.id ? listing.id.toString() : '' : '';
        var currentUser = this.props.currentUser;
        var owners = listing.owners.map(function (owner) {
            return owner.username;
        });

        var formProps = assign({},
            pick(this.state, ['errors', 'warnings', 'messages', 'firstError']),
            {
                system: this.props.system,
                value: listing,
                requestChange: CreateEditActions.updateListing,
                forceError: !this.state.isValid,
                currentUser: this.props.currentUser,
                imageErrors: this.state.imageErrors
            }
        );


        var deleteHref = this.makeHref(this.getActiveRoutePath(), this.getParams(), {
            listing: listing.id,
            action: 'delete'
        });
        var pendDeleteHref = this.makeHref(this.getActiveRoutePath(), this.getParams(), {
            listing: listing.id,
            action: 'pending_deletion'
        });
        var undeleteHref = this.makeHref(this.getActiveRoutePath(), this.getParams(), {
            listing: listing.id,
            action: 'undelete'
        });


        var header = (
            <div className="CreateEdit__titlebar">
                <div className="btn-toolbar" role="group">
                    <div className="btn-group" role="group">
                        <button type="button" tabIndex="0" className={classSet(saveBtnClasses)}
                                onClick={this.onSave}>
                            <span className="create-edit-button">Save</span>
                            <i className={saveText}></i>
                        </button>
                        {
                            showPreview &&
                            <button className="btn btn-default tool"
                                    onClick={this.onPreview}>
                                <span className="create-edit-button">Preview</span>
                                <i className="icon-eye-grayDark"> </i>
                            </button>
                        }
                        {
                            (showDelete && (currentUser.isAdmin() || currentUser.isOrgSteward(listing.agencyShort))) &&
                            <a href={deleteHref} className="btn btn-default tool delete-button">
                                <span className="create-edit-button">Delete</span>
                                <i className="icon-trash-grayDark"></i>
                            </a>
                        }
                        {
                            showDelete && (_.contains(owners, currentUser.username) && !(currentUser.isAdmin() || currentUser.isOrgSteward(listing.agencyShort))) && !showUndelete && !inProgress &&
                            <a href={pendDeleteHref} className="btn btn-default tool pendDelete-button">
                                <span className="create-edit-button">Pend for Delete</span>
                                <i className="icon-trash-grayDark"></i>
                            </a>
                        }
                        {
                            showUndelete && (_.contains(owners, currentUser.username) || currentUser.isAdmin()) &&
                            <a href={undeleteHref} className="btn btn-default tool undelete-button">
                                <span className="create-edit-button">Undelete</span>
                                <i className="icon-trash-grayDark"></i>
                            </a>
                        }
                        {
                            showSubmit &&
                            <button className="btn btn-default tool"
                                    onClick={this.onSubmit}>
                                <span className="create-edit-button">Submit</span>
                                <i className="icon-cloud-upload-grayDark"> </i>
                            </button>
                        }
                    </div>
                    <div className="btn-group" tabIndex="0" role="group">
                        <a type="button" className="btn-link btn myListings" onClick={this.onClose}>
                            Listing Management
                        </a>
                    </div>
                </div>
                <h1>{titleText}</h1>
            </div>
        );

        var makeFormLink = elId => `#/edit/${idString}?el=${encodeURIComponent(elId)}`;

        var links = formLinkGroups.map(function (g) {
            var link = g.link;

            return {
                title: link.title,
                id: link.id,
                href: makeFormLink(link.id),
                links: g.links.map(l => ({
                    title: l.title,
                    id: l.id,
                    href: makeFormLink(l.id)
                }))
            };
        });

        return (
            <div className="create-edit">
                <NavBar/>
                {header}
                <section className="create-edit-body">
                    <Sidebar groups={links} activeId={this.state.activeId || this.getQuery().el}/>
                    <ListingForm key={this.state.timestamp} ref="form" {...formProps}  />
                </section>
                {savingText && <LoadMask message={savingText}/>}
            </div>
        );
    }
});

module.exports = CreateEditPage;
