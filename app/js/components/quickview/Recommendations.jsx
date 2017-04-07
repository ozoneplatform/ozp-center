'use strict';

require('jquery');

var React = require('react');
var IconRating = require('../shared/IconRating.jsx');
var RecommendedListingTile = require('../discovery/RecommendedListingTile.jsx');
var BookmarkButton = require('../BookmarkButton.jsx');
var CenterLaunchLink = require('../CenterLaunchLink.jsx');
var Carousel = require('../carousel/index.jsx');
var CurrentListingStore = require('../../stores/CurrentListingStore.js');
var QuickViewRecommendations = React.createClass({

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
        var component = this;
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
        var recommendations = this.props.listing.similar;
        if(!recommendations.length){
            return <div>Loading...</div>;
        }
        var children = recommendations.map(function (listing) {
            return <RecommendedListingTile
                        key = { listing.id }
                        listing={ listing }
                    />;
        });
        return <Carousel options = {carouselOptions} autoInit = {this.props.shown} >
                {children}
               </Carousel>
    },

    render: function () {

        var divStyle = {
            display: 'inline-block',
            width:'100%'
        };

        return (
            <div className="quickview-recommendations" style={divStyle}>
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
