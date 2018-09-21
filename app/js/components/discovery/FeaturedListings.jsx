'use strict';

var React = require('react');
var Carousel = require('../carousel/index.jsx');
var FeaturedListingTile = require('./FeaturedListingTile.jsx');

module.exports = React.createClass({

    propTypes: {
        options: React.PropTypes.object
    },

    getDefaultProps: function () {
        return {
            options: {
                auto: false,
                scroll: {
                    easing: 'quadratic',
                    items: 1,
                    duration: 1000
                },
                width: '100%',
                items: {
                    visible: 3,
                    start: -1
                }
            }
        };
    },

    render: function () {
        var children = this.props.listings.map(function (listing) {
            return <FeaturedListingTile
                        key = { listing.id }
                        listing={ listing }
                    />;
        });

        if(this.props.listings.length <= 3) {
            this.props.options.items.visible = 1;
        }

        return (
            <section>
                <h4>Featured</h4>
                <Carousel ref="featured" aria-label="Featured Carousel" slides={children} />
            </section>
        );
    }

});
