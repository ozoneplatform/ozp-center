'use strict';

var React = require('react');
var ListingActions = require('../actions/ListingActions');
var OzpAnalytics = require('../analytics/ozp-analytics');

var FeedbackButton = React.createClass({

    propTypes: {
        listing: React.PropTypes.object.isRequired,
        thumbs: React.PropTypes.number.isRequired
    },

    giveFeedback: function() {
        var feedback = this.props.thumbs == 1 ? 'Positive' : 'Negative';
        OzpAnalytics.trackFeedback(feedback, this.props.listing.title);
        ListingActions.giveFeedback(this.props.listing.id, this.props.thumbs);
    },

    componentDidMount: function(){
      $(this.refs.tooltipped.getDOMNode()).tooltip({
        delay: 400
      });
    },

    render: function(){
        var isPositive = this.props.thumbs == 1 ? true : false;
        var toggledOn = this.props.listing.gaveFeedback;
        var buttonStyle = toggledOn  && isPositive ? "btn btn-default positive-feedback-toggled" : "btn btn-default"
        var thumbIcon = isPositive ? <i className="icon-thumbs-up-14-grayDark"/> : <i className="icon-thumbs-up-14-grayDark negative-feedback"/>
        var title = isPositive ? "Helpful" : "Not Helpful"

        if (toggledOn && isPositive) {
            thumbIcon = <i className="icon-thumbs-up-14-white"/>
        }

        return (
            <button
              ref="tooltipped"
              data-toggle="tooltip"
              data-placement="top"
              title={title}
              type="button"
              className={buttonStyle}
              onClick={this.giveFeedback}>
                {thumbIcon}
            </button>
        );
    }

});

module.exports = FeedbackButton;
