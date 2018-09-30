'use strict';

var React = require('react');
var Reflux = require('reflux');

var {
    ValidatedFormMixin,
    TextInput
} = require('./form');


// On the edit listing page, these are the wells users input the 'Type of Resource' and the resources 'URL'
var ResourceForm = React.createClass({

    mixins: [ValidatedFormMixin],

    render: function () {
        return (
            <div className="well listItemRow">
                <div className="clear"></div>
                <div className="col-md-2">
                    <div><strong>Resource<br/> <span className="resourceNum">{this.props.count + 1}</span></strong>
                    </div>
                </div>
                <div className="col-md-4">
                    <TextInput {...this.getFormComponentProps('name')}/>
                </div>
                <div className="col-md-4">
                    <TextInput {...this.getFormComponentProps('url')}/>
                </div>
                <div className="col-md-2">
                    <button type="button" className="close" onClick={this.props.removeHandler}>
                        <span aria-hidden="true"><i className="icon-cross-14"></i></span><span
                        className="sr-only">Remove</span>
                    </button>
                </div>
                <div className="clear"></div>
            </div>
        );
    }

});

module.exports = ResourceForm;
