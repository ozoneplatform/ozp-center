'use strict';

var React = require('react');
var _ = require('../../../utils/_');
var { reviewWarningMessage } = require('ozp-react-commons/constants/messages');
var { cloneWithProps, classSet } = React.addons;

var InputMixin = {
    getInitialState: function () {
        return {
            value: this.props.value,
            blurred: false,
            charLimit: this.props.charLimit,
            focused: false
        };
    },

    render: function () {
        var labelClasses = classSet({ 'input-optional': this.props.optional });
        var CharLimit = (this.props.charLimit) ? `${this.props.charLimit}/${this.props.charLimit} characters remaining` : '';
        var FOUOwarning = (this.props.showFOUOwarning) ? <div className="has-error"><p className="FOUOwarning small ">{reviewWarningMessage}</p></div> : '';

        if(this.props.charLimit && this.state.value){
          if(this.props.charLimit - this.state.value.length < 0){
            if(this.state.value.length === parseInt(this.props.charLimit) + 1){
              CharLimit = `${Math.abs(this.props.charLimit - this.state.value.length)} character over the limit.`;
            }else{
              CharLimit = `${Math.abs(this.props.charLimit - this.state.value.length)} characters over the limit.`;
            }
          }else{
            if(this.state.value.length === parseInt(this.props.charLimit) - 1){
              CharLimit = `${this.props.charLimit - this.state.value.length} character remaining.`;
            }else{
              CharLimit = `${this.props.charLimit - this.state.value.length} characters remaining.`;
            }
          }
        }else{
          CharLimit = `${this.props.charLimit} characters remaining`;
        }



        var charClass = classSet({
          'error-text': (this.state.value && this.state.value.length > this.state.charLimit)
        });
        return (
            <div id={this.props.id} className={ this.getClasses() }>
                <label htmlFor={ this.props.id } className={labelClasses}>{ this.props.label }</label>
                <p className="small">{ this.props.description }</p>
                { this.props.help && <p className="help-block small">{ this.props.help }</p>}
                {FOUOwarning}
                { cloneWithProps(this.renderInput(), this.getInputProps()) }
                { this.props.charLimit &&
                    <p className={charClass}>{CharLimit}</p>
                }
            </div>
        );
    },

    shouldComponentUpdate: function (nextProps, nextState) {
        if (nextProps.id !== this.props.id) {
            return true;
        }

        if (nextProps.value !== nextState.value) {
            return true;
        }

        if (nextProps.description !== this.props.description) {
            return true;
        }

        if (nextProps.label !== this.props.label) {
            return true;
        }

        if (nextProps.help !== this.props.help) {
            return true;
        }

        if (nextProps.optional !== this.props.optional) {
            return true;
        }

        if (nextState.blurred !== this.state.blurred) {
            return true;
        }

        if (nextState.focused !== this.state.focused) {
            return true;
        }

        if (this.showWarning(nextProps, nextState) !==
                this.showWarning(this.props, this.state)) {
            return true;
        }

        if (this.showError(nextProps, nextState) !==
                this.showError(this.props, this.state)) {
            return true;
        }

        // Check if anything else in props has changed
        if (!_.isEqual(nextProps, this.props)) {
            return true;
        }

        return false;
    },

    getClasses: function () {
        return classSet({
            'form-group': true,
            'has-error': this.showError(this.props, this.state),
            'has-warning': this.showWarning(this.props, this.state)
        });
    },

    //we pass props and state into showError/showWarning so that they
    //can be used in shouldComponentUpdate
    showWarning: function (props, state) {
        return !this.showError(props, state.blurred) && (props.warning && state.blurred);
    },

    showError: function (props, state) {
        return props.error && (state || props.forceError);
    },

    _onBlur: function (event) {
        event.preventDefault();
        this.setState({blurred: true});
    },

    _onFocus: function (event) {
        event.preventDefault();
        this.setState({focused: true});
    },

    _onChange: function (event) {
        event.preventDefault();
        var { value } = event.target;
        this.setState({ value: value });
        this.props.setter(value);
    },

    getInputProps: function () {
        var value = this.getValue ? this.getValue(this.props.value) : (this.state.value || this.props.value);
        var onChange = this.onChange ? this.onChange : this._onChange;
        var onBlur = this.onBlur ? this.onBlur : this._onBlur;
        var onFocus = this.onFocus ? this.onFocus : this._onFocus;

        return {
            ref: 'input',
            className: 'form-control',
            id: this.props.inputId,
            value: value,
            onBlur: onBlur,
            onChange: onChange,
            onFocus: onFocus
        };
    }
};

module.exports = InputMixin;
