'use strict';

var React = require('react');
var IconRating = require('../../shared/IconRating.jsx');
var _ = require('../../../utils/_');
var TimeAgo = require('../../shared/TimeAgo.jsx');
var OzpAnalytics = require('../../../analytics/ozp-analytics');
var ReviewResponses = require('./ReviewResponses.jsx');
var SubmitResponse = require('./SubmitResponse.jsx');

var UserReview = React.createClass({

    mixins: [React.addons.PureRenderMixin],

    propTypes: {
        listing: React.PropTypes.object.isRequired,
        review: React.PropTypes.object.isRequired,
        user: React.PropTypes.object.isRequired,
        onEdit: React.PropTypes.func.isRequired
    },

    getInitialState: function() {
        return {
            isResponding: false
        }
    },

    isEditAllowed: function () {
        var listingOrg = this.props.listing.agencyShort;
        var currentUser = this.props.user;
        var reviewer = this.props.review.author.id;

        if(currentUser.id == reviewer || currentUser.highestRole == "APPS_MALL_STEWARD" || (currentUser.stewardedOrganizations.indexOf(listingOrg) !== -1)){
            return true;
        }
        return false;
    },

    onResponseCompleted: function() {
        this.setState({
            isResponding: false
        });
    },

    isRespondAllowed: function() {
        var {review, user, listing} = this.props;
    },

    respondToReview: function() {
        this.setState({
            isResponding: !this.state.isResponding
        });
    },

    render: function () {
        var { review, onEdit, listing, user } = this.props;
        var time = review.editedDate || review.createdDate || "";

        return (
            <li className="Review">
                <IconRating currentRating = { review.rate } viewOnly={true} />
                <span className="Review__author">{ review.author.displayName }</span>
                <TimeAgo className="Review__time" time={ time } />
                {
                    this.isEditAllowed() &&
                        <i className="icon-pencil" onClick={ _.partial(onEdit, review) }></i>
                }
                <i className="icon-feedback-12-grayDark" onClick={this.respondToReview}></i>
                <p className="Review__text">{ review.text }</p>
                { this.state.isResponding && <SubmitResponse review={review} listing={listing} responded={this.onResponseCompleted}/> }
                <ReviewResponses responses={review.reviewResponses} listing={listing} user={user} review={review}/>
            </li>
        );
    }

});

var UserReviews = React.createClass({

    propTypes: {
        listing: React.PropTypes.object.isRequired,
        user: React.PropTypes.object.isRequired,
        reviews: React.PropTypes.array,
        onEdit: React.PropTypes.func.isRequired
    },

    getDefaultProps: function () {
        return { reviews: [] };
    },

    render: function () {
        return (
            (this.props.reviews && this.props.reviews.length > 0) ?
                <ul className="list-unstyled list-reviews">
                    { this.renderReviews() }
                </ul> :
                <div>
                    <h4>There are no user reviews yet.</h4>
                    <p>Please add a review to share your thoughts and experiences with others.</p>
                </div>
        );
    },

    componentDidMount: function(){
      var listing = this.props.listing || false;
      if(listing.title) {
        OzpAnalytics.trackListingReviewView(listing.title, listing.agencyShort);
      }
    },

    renderReviews: function () {
        var { onEdit, user, listing } = this.props;

        return this.props.reviews.map(function (review) {
            return <UserReview
                        key={ review.id }
                        user={ user }
                        listing={ listing }
                        review={ review }
                        onEdit={ onEdit } />;
        });
    }
});

module.exports = UserReviews;
module.exports.UserReview = UserReview;
