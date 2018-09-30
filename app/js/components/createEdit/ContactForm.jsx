'use strict';

var React = require('react');
var Reflux = require('reflux');

var {
    ValidatedFormMixin,
    TextInput,
    Select2Input
} = require('./form');


var ContactForm = React.createClass({

    mixins: [
        require('../../mixins/SystemStateMixin'),
        ValidatedFormMixin
    ],

    render: function () {
        var baseKey = this.props.value.type + '.' + this.props.baseKey;

        return (
            <div className="well">
                <button type="button" className="close" onClick={this.props.removeHandler}>
                    <span aria-hidden="true"><i className="icon-cross-14"></i></span><span
                    className="sr-only">Clear</span>
                </button>
                <Select2Input {...this.getFormComponentProps('type')}
                              options={getOptionsForNamedSystemObject(this.state.system.contactTypes)}
                              key={`${baseKey}.type`}/>
                <TextInput {...this.getFormComponentProps('name')} key={`${baseKey}.name`}/>
                <TextInput {...this.getFormComponentProps('organization')} key={`${baseKey}.organization`} optional/>
                <TextInput {...this.getFormComponentProps('email')} key={`${baseKey}.email`}/>
                <TextInput {...this.getFormComponentProps('securePhone')} key={`${baseKey}.securePhone`}/>
                <TextInput {...this.getFormComponentProps('unsecurePhone')} key={`${baseKey}.unsecurePhone`}/>
            </div>
        );
    }

});

function getOptionsForNamedSystemObject(items) {
    return items.map(item => {
        return { id: item.name, text: item.name };
    });
}

module.exports = ContactForm;
