'use strict';

var React = require('react');
var Reflux = require('reflux');

var {
    ValidatedFormMixin,
    ImageInput,
    TextAreaInput,
    MarkingInput,
} = require('./form');


// On the edit listing page, these are the Screenshot wells users input the 'Preview Image' and the 'Full Size Image'
var ScreenshotForm = React.createClass({

    mixins: [ValidatedFormMixin],

    componentDidUpdate: function (prev) {
        this.props.value.order = this.props.count;
    },

    shouldComponentUpdate: function (newProps) {
        return (newProps.value === this.props.value) ||
            newProps.value.smallImageId == null ||
            newProps.value.largeImageId == null;
    },

    render: function () {
        var up_arrow = <button type="button"
                               onClick={this.props.reorderUpHandler}
                               className="up-arrow"><i className="icon-caret-up"></i></button>;

        var down_arrow = <button type="button"
                                 onClick={this.props.reorderDownHandler}
                                 className="down-arrow"><i className="icon-caret-down-14"></i></button>;

        return (
            <div className="listItemRow" ref="listItemRow">
                <div className="clear"></div>
                <div className="col-md-2 dragBox">
                    <div><strong>Screenshot<br/> <span className="screenshotNum">{this.props.count + 1}</span></strong>
                    </div>
                    {this.props.value && this.props.total - 1 == this.props.count ? null : down_arrow}
                    {this.props.value && this.props.count != 0 ? up_arrow : null}
                </div>

                <div className="col-md-4">
                    <ImageInput {...this.getFormComponentProps('smallImage')}
                                imageUri={this.props.value.smallImageUrl}
                                serverError={this.props.imageErrors.smallImage}/>
                    <MarkingInput id={this.props.value.smallImageMarking}
                                  {...this.getFormComponentProps('smallImageMarking')}
                                  aria-label="Classification and Control Marking"/>
                </div>

                <div className="col-md-4">
                    <ImageInput {...this.getFormComponentProps('largeImage')}
                                imageUri={this.props.value.largeImageUrl}
                                serverError={this.props.imageErrors.largeImage}/>
                    <MarkingInput id={this.props.value.largeImageMarking}
                                  {...this.getFormComponentProps('largeImageMarking')}
                                  aria-label="Classification and Control Marking"/>
                </div>

                <div className="col-md-2">
                    <button type="button" className="close" onClick={this.props.removeHandler}>
                        <span aria-hidden="true"><i className="icon-cross-16"></i></span><span
                        className="sr-only">Remove</span>
                    </button>
                </div>

                <div className="clear"></div>
                <div className="col-md-2">
                    <div><br/></div>
                </div>

                <div className="col-md-8">
                    <TextAreaInput {...this.getFormComponentProps('description')} id="description" label="Description:"
                                   charLimit="160" optional/>
                </div>

                <div className="clear"></div>
            </div>
        );
    }

});

module.exports = ScreenshotForm;
