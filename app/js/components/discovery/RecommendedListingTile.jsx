'use strict';

var React = require('react');
var { Navigation, CurrentPath } = require('react-router');
var ActiveState = require('../../mixins/ActiveStateMixin');
var IconRating = require('../shared/IconRating.jsx');
var CenterLaunchLink = require('../CenterLaunchLink.jsx');
var BookmarkButton = require('../BookmarkButton.jsx');
var CurrentListingStore = require('../../stores/CurrentListingStore.js');
var OzpAnalytics = require('../../analytics/ozp-analytics');
var { listingMessages } = require('ozp-react-commons/constants/messages');

var RecommendedListingTile = React.createClass({

    mixins: [Navigation, CurrentPath, ActiveState],

    statics: {
        fromArray: function (array) {
            return array.map(function(listing, i) {
                return <RecommendedListingTile listing={listing} key={`${listing.id}.${i}`}/>;
            });
        },
        renderLimitedTiles: function(display, mostPopular) {
            var ammount = 0;
            return(
                mostPopular.filter(function(tile){
                    if(ammount < display){ ammount++; return tile; }
                }).map((tile, i) => <RecommendedListingTile listing={tile} key={`${tile.id}.${i}`}/>)
            );
        }
    },

    loadRecommendation: function (recommendation, href) {
        OzpAnalytics.trackRecommender(listingMessages['recommender.similar'], recommendation.title);
        CurrentListingStore.loadListing(recommendation.id);
        //window.history.pushState('','', href);
    },

    render: function () {
        var listing = this.props.listing;
        var title = listing.title;
        var image = listing.imageMediumUrl;
        var avgRate = listing.avgRate;
        var agencyShort = listing.agencyShort;
        var totalVotes = listing.totalVotes;
        var href = this.makeHref(this.getActiveRoutePath(), null, {
            listing: listing.id,
            action: 'view',
            tab: 'overview'
        });
        var labelStyle = {
            paddingLeft: '10px'
        };
        var lockStyle = {
            position: 'absolute',
            left: '4px',
            top: '4px'
        };


        return (
            <div className="recommendations-tile" onClick={this.loadRecommendation.bind(this,listing, href)} >
                <a className="listing-link"  href={ href }>
                    {/* Empty link - css will make it cover entire <li>*/}
                    <span className="hidden-span">{listing.title}</span>
                </a>
                <div className="quickview-header-info">
                    <img className="listing-icon" alt={`${listing.title} header information`} src={ image } data-fallback="/store/images/types/3" />
                    <h3 className="listing-title" tabIndex="0" title={ title }>{ title }
                    {
                        agencyShort &&
                        <span className="company">
                            { listing.isPrivate &&
                                <i className="icon-lock-blue" style={lockStyle}></i>
                            }
                            <span style={labelStyle}>{ agencyShort }</span>
                        </span>
                    }
                    </h3>
                    <IconRating
                        className="icon-rating"
                        viewOnly
                        currentRating= { avgRate }
                        toggledClassName="icon-star-filled-yellow"
                        untoggledClassName="icon-star-filled-grayLighter"
                        halfClassName="icon-star-half-filled-yellow"
                        totalVotes= {totalVotes} />
                </div>
            </div>

        );
    }
});

module.exports = RecommendedListingTile;
