'use strict';

var React = require('react');
var { cloneWithProps, classSet } = React.addons;
var _ = require('../../../utils/_');

var InputMixin = require('./InputMixin.jsx');
require('sweetalert');

var ImageInput = React.createClass({
    mixins: [_.omit(InputMixin,
        'render', 'shouldComponentUpdate', 'showError', 'showWarning', 'getInitialState')],



    getInitialState: function() {
        //if the input has received a new value since the last props update, we should not show
        //the error style
        return Object.assign({changedSinceUpdate: false},
                InputMixin.getInitialState.apply(this, arguments));
    },

    /**
     * Override render from InputMixin to include the image tag
     */
    render: function () {
        var removeImage = this.props.removeImage ? this.props.removeImage : this.removeImage;
        var labelClasses = classSet({ 'input-optional': this.props.optional }),
            props = _.omit(this.getInputProps(), 'value'),
            imageContainerClasses = classSet({
                'image-container': true,
                'image-present': !!this.props.imageUri
            }),
            helpOrErrorText = this.props.serverError || this.props.help;

        return (
            <div id={this.props.id} className={ this.getClasses() }>
                <label htmlFor={ this.props.id } className={labelClasses}>
                    { this.props.label }
                </label>
                <p className="small">{ this.props.description }</p>
                { helpOrErrorText &&
                    <p className="help-block small">{helpOrErrorText}</p>
                }
                { cloneWithProps(this.renderInput(), props) }
                <span className={imageContainerClasses}>
                    <button onClick={removeImage} className="btn image-remove">
                        <i className="icon-trash" />
                        </button>
                    <img alt="" ref="image" className="image-preview"
                        src={this.props.imageUri || undefined} />
                </span>
            </div>
        );
    },


    renderInput: function () {
        return <input type="file" />;
    },

    //override onChange so that it passes the file to the setter, not the fake
    //file path string that comes from the value property
    onChange: function(e) {
        //set the value to the file if possible.  Fallback to using the input itself
        //as the value if the File API is not available
        var value = typeof e.target.files !== 'undefined' ? e.target.files[0] : e.target;

        e.preventDefault();
        if(value.type === 'image/gif' || value.type === 'image/png' || value.type === 'image/jpeg'){
          if ( value.size <= 1024000){
            this.props.setter(value);
            this.setState({changedSinceUpdate: true});
          }
          else{
              sweetAlert({
                title: "Could not upload!",
                text: "The image you tried to upload does not meet the requirements. Please upload an image less than 1MB.",
                type: "error",
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Ok",
                closeOnConfirm: true,
                html: false
              });
              this.removeImage(e);
            }
        }
        else{
          sweetAlert({
            title: "Could not upload!",
            text: "The image you tried to upload does not meet the requirements. Please upload a JPG, PNG, or GIF.",
            type: "error",
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Ok",
            closeOnConfirm: true,
            html: false
          });
          this.removeImage(e);
        }
    },

    removeImage: function(evt) {
        evt.preventDefault();

        this.props.setter(null);
        this.setState({changedSinceUpdate: true});
    },

    componentDidUpdate: function(oldProps) {
        var img = this.refs.image.getDOMNode();

        //if we set the src to undefined in vdom after it's already had a value,
        //it'll show up as "", whereas we actually want it gone entirely
        if (img.getAttribute('src') === '') {
            img.removeAttribute('src');
        }

        if (oldProps.value && !this.props.value) {
            this.refs.input.getDOMNode().value = '';
        }
    },

    componentWillReceiveProps: function(newProps) {
        //these two conditionals together cover cases where the
        //change could be due to a server response.  value will be unset on a successful
        //save, but not on a failure, so check serverError too
        if (!newProps.value || newProps.serverError) {
            this.setState({changedSinceUpdate: false});
        }

        if(newProps.imageUri !== this.props.imageUri) {
            this.setState({'imageUri': newProps.imageUri});
        }
    },

    /**
     * In addition to default checks for update, check imageUri
     */
    shouldComponentUpdate: function(newProps) {
        return InputMixin.shouldComponentUpdate.apply(this, arguments) ||
            newProps.imageUri !== this.props.imageUri ||
            newProps.serverError !== this.props.serverError;
    },

    showError: function(props, state) {
        return !state.changedSinceUpdate && (props.serverError ||
                InputMixin.showError.apply(this, arguments));
    },

    showWarning: function(props, state) {
        return !state.changedSinceUpdate && InputMixin.showWarning.apply(this, arguments);
    }
});

module.exports = ImageInput;
