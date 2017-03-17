'use strict';

var React = require('react');
var IconRating = require('../shared/IconRating.jsx');
var RecommendedListingTile = require('../discovery/RecommendedListingTile.jsx');
var BookmarkButton = require('../BookmarkButton.jsx');
var CenterLaunchLink = require('../CenterLaunchLink.jsx');
var Carousel = require('../carousel/index.jsx');
var QuickViewRecommendations = React.createClass({

    propTypes: {
        listing: React.PropTypes.object,
        onCancel: React.PropTypes.func.isRequired
    },

    componentDidMount: function(){
    },

    render: function () {

        var recommendations = this.props.recommendations;
        var children = recommendations?recommendations.map(function (listing) {
            return <RecommendedListingTile
                        key = { listing.id }
                        listing={ listing }
                    />;
        }):[];

        var lockStyle = {
            position: 'absolute',
            left: '4px',
            top: '4px'
        };
        var divStyle = {
            display: 'inline-block',
            width:'100%'
        };

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

            

       console.log(recommendations)

        return (
            <div className="quickview-recommendations" style={divStyle}>
                <div className="quickview-recommendations-info">
                    <h3 className="recommendations-title" tabIndex="0" title="Similar Listings">Similar Listings
                    </h3>
                    
                   <div><Carousel options={carouselOptions} >
                        {children}
                   </Carousel></div>
                </div>
               
            </div>
        );
    },

});

module.exports = QuickViewRecommendations;
