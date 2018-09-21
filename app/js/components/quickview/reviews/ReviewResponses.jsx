'use strict';

var React = require('react');
var TimeAgo = require('../../shared/TimeAgo.jsx');
var SubmitResponse = require('./SubmitResponse.jsx');

var ReviewResponse = React.createClass({

    propTypes: {
        response: React.PropTypes.object.isRequired,
        listing: React.PropTypes.object.isRequired,
        review: React.PropTypes.object,
        user: React.PropTypes.object.isRequired,
        reviewId: React.PropTypes.number
    },

    getInitialState: function() {
        return {
            isEditting: false
        }
    },

    isEditting: function() {
        this.setState({
            isEditting: !this.state.isEditting
        });
    },

    onEditComplete: function() {
        this.setState({
            isEditting: false
        });
    },

    isEditAllowed: function() {
        var { review, user, listing, response } = this.props;

        return (
            response.author.id === user.id
        );
    },

    render: function() {
        var {response, user, listing, reviewId, review} = this.props;
        var time = response.createdDate || "";

        return(
            <li className="Response">
                <span className="Review__author">{response.author.displayName}</span>
                <TimeAgo className="Review__time" time={time} />
                {this.isEditAllowed() && <i className="icon-pencil" onClick={this.isEditting}></i>}
                <p className="Review__text">{response.text}</p>
                { this.state.isEditting && this.isEditAllowed() && <SubmitResponse reviewId={reviewId} review={response} parentReview={review} listing={listing} text={response.text} user={user} responded={this.onEditComplete}/>}
            </li>
        )
    }
});

var ReviewResponses = React.createClass({

    propTypes: {
        responses: React.PropTypes.array,
        listing: React.PropTypes.object.isRequired,
        review: React.PropTypes.object,
        user: React.PropTypes.object.isRequired
    },

    getDefaultProps: function() {
        return { responses: []};
    },

    render: function() {
        return (
            (this.props.responses && this.props.responses.length > 0) ?
            <ul className="list-unstyled list-reviews">
                {this.renderResponses()}
            </ul> :
            null
        )
    },

    renderResponses: function() {
        var {responses, user, listing, review} = this.props;

        return this.props.responses.map(function (response) {
            return <ReviewResponse key={response.id} reviewId={response.id} review={review} response={response} user={ user } listing={ listing } />;
        });
    }

});

module.exports = ReviewResponses;
module.exports.ReviewResponse = ReviewResponse;
