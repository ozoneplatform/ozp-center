'use strict';

var React = require('react');
var { Navigation, CurrentPath } = require('react-router');
var ActiveState = require('../../mixins/ActiveStateMixin');
var IconRating = require('../shared/IconRating.jsx');
var CenterLaunchLink = require('../CenterLaunchLink.jsx');
var BookmarkButton = require('../BookmarkButton.jsx');
var FeedbackButton = require('../FeedbackButton.jsx');
var OzpAnalytics = require('../../analytics/ozp-analytics');
var { listingMessages } = require('ozp-react-commons/constants/messages');
var ListingActions = require('../../actions/ListingActions');

var RecommendedListingTileStorefront = React.createClass({

    mixins: [Navigation, CurrentPath, ActiveState],

    statics: {
        fromArray: function (array, from) {
            if(!from) from = '';
            return array.map(function(listing, i) {
                return <RecommendedListingTileStorefront from={from} listing={listing} key={`${listing.id}.${i}`}/>;
            });
        },
        renderLimitedTiles: function(display, mostPopular) {
            var ammount = 0;
            return(
                mostPopular.filter(function(tile){
                    if(ammount < display){ ammount++; return tile; }
                }).map((tile, i) => <RecommendedListingTileStorefront listing={tile} key={`${tile.id}.${i}`}/>)
            );
        }
    },

    handleClick: function(from, title) {
      if(from){
        if(from == listingMessages['recommender.recommended'])
          OzpAnalytics.trackRecommender(listingMessages['recommender.recommended'], title);
      }
    },

    giveFeedback: function(listing, thumbs) {
        ListingActions.giveFeedback(listing.id, thumbs);
    },

    render: function () {
        var listing = this.props.listing;
        var name = listing.title;
        var description = listing.descriptionShort && listing.descriptionShort.substr(0, 140);
        var imageLargeUrl;
        var avgRate = listing.avgRate;
        var agencyShort = listing.agencyShort;
        var totalVotes = listing.totalVotes;
        var href = this.makeHref(this.getActiveRoutePath(), null, {
            listing: listing.id,
            action: 'view',
            tab: 'overview'
        });

        imageLargeUrl = listing.imageLargeUrl;

        return (
            <li onClick={this.handleClick.bind(this, this.props.from, listing.title)} className="listing SearchListingTile">
                <a className="listing-link"  href={ href }>
                    {/* Empty link - css will make it cover entire <li>*/}
                    <span className="hidden-span">{listing.title}</span>
                </a>
                <img alt={`${listing.title} app tile`} src={ imageLargeUrl } />
                <section className="slide-up">
                    <p className="title">{ name }</p>
                    <IconRating
                        {...this.props}
                        className="icon-rating"
                        viewOnly
                        currentRating = { avgRate }
                        toggledClassName="icon-star-filled-yellow"
                        untoggledClassName="icon-star-filled-grayLighter"
                        halfClassName="icon-star-half-filled-yellow"
                        totalVotes={totalVotes} />
                    {
                        agencyShort &&
                        <span className="company">
                            { listing.isPrivate &&
                                <i className="icon-lock-blue"></i>
                            }
                            { agencyShort }
                        </span>
                    }
                    <p className="description">{ description }</p>
                    { this.renderActions() }
                </section>
            </li>
        );
    },

    renderActions: function () {
        var positiveFeedback = 1;
        var negativeFeedback = -1;
        var divClass = this.props.listing.gaveFeedback
            ? "btn-group"
            : "btn-group recommended-actions";
        var divDivider = this.props.listing.gaveFeedback
            ? "btn-group actions"
            : "btn-divider";

        return (
                <div className={divClass}>
                    <FeedbackButton listing={this.props.listing} thumbs={positiveFeedback} />
                    <FeedbackButton listing={this.props.listing} thumbs={negativeFeedback} />
                    <div className={divDivider}>
                    <CenterLaunchLink className="btn-default" listing={this.props.listing} />
                    <BookmarkButton listing={this.props.listing} />
                    </div>
                </div>
        );
    }
});

module.exports = RecommendedListingTileStorefront;
