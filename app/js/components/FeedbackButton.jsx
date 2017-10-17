'use strict';

var React = require('react');
var ListingActions = require('../actions/ListingActions');
var OzpAnalytics = require('../analytics/ozp-analytics');

var FeedbackButton = React.createClass({

    propTypes: {
        listing: React.PropTypes.object.isRequired,
        thumbs: React.PropTypes.number.isRequired,
        toggled: React.PropTypes.bool
    },

    getInitialState: function() {
        return {
            toggled: this.props.toggled
        }
    },

    giveFeedback: function() {
        this.setState({
            toggled: !this.state.toggled
        });

        this.props.onClick();
    },

    componentDidMount: function() {
        if (!this.props.listing.gaveFeedback) {
            $(this.refs.tooltipped.getDOMNode()).tooltip({delay: 400});
        }
    },

    shouldComponentUpdate: function(prevProps) {
        if (prevProps.toggled != this.state.toggled) {
            this.setState({
                toggled: prevProps.toggled
            });
            return true;
        }

        return false;
    },

    render: function() {
        var thumbIcon,
            buttonStyle;
        var isPositive = this.props.thumbs == 1
            ? true
            : false;

        if (isPositive) {
            thumbIcon = <i className="icon-thumbs-up-14-grayDark"/>;
            buttonStyle = "btn btn-default";

            if (this.state.toggled) {
                thumbIcon = <i className="icon-thumbs-up-filled-yellow"/>;
                buttonStyle = "btn btn-default positive-feedback-toggled";
            }
        } else {
            thumbIcon = <i className="icon-thumbs-up-14-grayDark negative-feedback"/>;
            buttonStyle = "btn btn-default";

            if (this.state.toggled) {
                thumbIcon = <i className="icon-thumbs-up-filled-yellow negative-feedback"/>;
                buttonStyle = "btn btn-default positive-feedback-toggled";
            }
        }

        var title = isPositive
            ? "Helpful"
            : "Not Helpful"
        var feedbackButton = <button ref="tooltipped" data-toggle="tooltip" data-placement="top" title={title} type="button" className={buttonStyle} onClick={this.giveFeedback}>{thumbIcon}</button>;

        return (feedbackButton);
    }

});

module.exports = FeedbackButton;
