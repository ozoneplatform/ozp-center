'use strict';

var React = require('react');
var Reflux = require('reflux');
var ReviewResponse = require('./validation');
var _ = require('../../../utils/_');
var ListingActions = require('../../../actions/ListingActions');

var SubmitResponse = React.createClass({

    propTypes: {
        review: React.PropTypes.object.isRequired,
        listing: React.PropTypes.object.isRequired,
        user: React.PropTypes.object,
        text: React.PropTypes.string.isRequired,
        reviewId: React.PropTypes.number,
        parentReview: React.PropTypes.object
    },

    getDefaultProps: function() {
        return {
            text: ''
        }
    },

    getInitialState: function () {
        return _.clone(this.props, 'text');
    },

    onTextChange: function (val) {
        this.state.text = val.target.value.substring(0, 4000);
        this.forceUpdate();
    },

    onSave: function () {
        ListingActions.saveReviewResponse(this.props.listing, this.state);
        this.props.responded();
    },

    onReset: function () {
        this.state.text = this.props.text;
        this.forceUpdate();
    },

    render: function() {
        var { rate, text } = this.state;
        var {review, listing} = this.props;
        var submitButton = text.length > 0 ? <button className="btn btn-success btn-small" onClick={ this.onSave } >Submit</button> : <button className="btn btn-success btn-small" onClick={ this.onSave } disabled>Submit</button>;

        return (
            <div>
                <h6>Reply</h6>
                <textarea className="response-textarea" ref="text" value={ text } onChange={ this.onTextChange }/>
                <div>
                    <button className="btn btn-default btn-small" onClick={ this.onReset }>Reset</button>
                    {submitButton}
                </div>
            </div>
        );
    }
});

module.exports = SubmitResponse;
