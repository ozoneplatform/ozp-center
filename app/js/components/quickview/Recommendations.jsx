'use strict';

var React = require('react');
var IconRating = require('../shared/IconRating.jsx');

var BookmarkButton = require('../BookmarkButton.jsx');
var CenterLaunchLink = require('../CenterLaunchLink.jsx');

var QuickViewRecommendations = React.createClass({

    propTypes: {
        listing: React.PropTypes.object,
        onCancel: React.PropTypes.func.isRequired
    },

    componentDidMount: function(){
      if (!this.props.preview) {
        $(this.refs.hastooltips.getDOMNode()).find('.tooltiped').each(function(){
          $(this).tooltip({
            delay: 400
          });
        });
      }
    },

    render: function () {
        var listing = this.props.listing;
        var title = listing.title;
        var avgRate = listing.avgRate;
        var image = listing.imageMediumUrl;
        var agencyShort = listing.agencyShort;
        var lockStyle = {
            position: 'absolute',
            left: '4px',
            top: '4px'
        };
        var labelStyle = {
            paddingLeft: '10px'
        };

        return (
            <div className="quickview-recommendations">
                <div className="quickview-recommendations-info">
                    <h3 className="recommendations-title" tabIndex="0" title="Similar Listings">Similar Listings
                    </h3>
                </div>
               
            </div>
        );
    },

});

module.exports = QuickViewRecommendations;
