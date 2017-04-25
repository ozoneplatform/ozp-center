'use strict';

require('jquery');

var React = require('react');
var Reflux = require('reflux');
var IconRating = require('../shared/IconRating.jsx');
var RecommendedListingTile = require('../discovery/RecommendedListingTile.jsx');
var BookmarkButton = require('../BookmarkButton.jsx');
var CenterLaunchLink = require('../CenterLaunchLink.jsx');
var Carousel = require('../carousel/index.jsx');
var CurrentListingStore = require('../../stores/CurrentListingStore');
var ListingActions = require('../../actions/ListingActions.js');
var QuickViewRecommendations = React.createClass({
    mixins: [
        Reflux.listenTo(CurrentListingStore, 'onFetchSimilarCompleted'),
    ],
    getInitialState: function() {
        return this.getState();
    },
    getState: function() {
        return {similar: CurrentListingStore.getSimilar()};
    },
    onFetchSimilarCompleted: function(){
        this.setState(this.getState());
    },
    propTypes: {
        listing: React.PropTypes.object,
        shown: React.PropTypes.bool,
    },
    
    getDefaultProps: function () {
        return {
            shown: false
        };
    },

    renderSimilar: function () {

         var listing = this.props.listing;
        var carouselOptions = {
                auto: false,
                scroll: {
                    easing: 'quadratic',
                    items: 1,
                    duration: 500
                },
                width: '100%',
                items: {
                    visible: 3,
                    start: -1
                },
            };
        var recommendations = this.state.similar;
        if(!recommendations){
            return <div>Loading...</div>;
        } else {
        var children = recommendations.map(function (listing) {
            return <RecommendedListingTile
                        key = { listing.id }
                        listing={ listing }
                    />;
        });
        return <Carousel options = {carouselOptions} autoInit = {this.props.shown} >
                {children}
               </Carousel>
        }
    },

    render: function () {

        return (
            <div className="quickview-recommendations" >
                <div className="quickview-recommendations-info">
                    <h3 className="recommendations-title" tabIndex="0" title="Similar Listings">Similar Listings
                    </h3>
                    
                   <div>{this.renderSimilar()}</div>
                </div>
               </div>
        );
    },

});

module.exports = QuickViewRecommendations;
