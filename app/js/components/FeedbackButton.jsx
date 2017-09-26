'use strict';

var React = require('react');
var ListingActions = require('../actions/ListingActions');

var FeedbackButton = React.createClass({

    propTypes: {
        listing: React.PropTypes.object.isRequired,
        thumbs: React.PropTypes.number.isRequired
    },

    giveFeedback: function() {
        ListingActions.giveFeedback(this.props.listing.id, this.props.thumbs);
    },

    componentDidMount: function(){
      $(this.refs.tooltipped.getDOMNode()).tooltip({
        delay: 400
      });
    },

    render: function(){
        var isPositive = this.props.thumbs == 1 ? true : false;
        var thumbIcon = isPositive ? <i className="icon-thumbs-up-14-grayDark"/> : <i className="icon-thumbs-up-14-grayDark negative-feedback"/>
        var title = isPositive ? "Helpful" : "Not Helpful"

        return (
            <button
              ref="tooltipped"
              data-toggle="tooltip"
              data-placement="top"
              title={title}
              type="button"
              className="btn btn-default"
              onClick={this.giveFeedback}>
                {thumbIcon}
            </button>
        );
    }

});

module.exports = FeedbackButton;
