'use strict';

var React = require('react');
var _IconRating = require('react-icon-rating');

var IconRating = React.createClass({

    mixins: [React.addons.PureRenderMixin],

    displayName: 'IconRatingExtended',

    getDefaultProps: function () {
        return {
            className: 'icon-rating',
            toggledClassName: 'icon-star-filled-yellow',
            untoggledClassName: 'icon-star-filled-grayLighter',
            halfClassName: 'icon-star-half-filled-yellow'
        };
    },

    getInitialState: function () {
        return {
            rating: this.roundRating(this.props.currentRating)
        };
    },

    componentWillReceiveProps: function (nextProps) {
        if (this.props.currentRating !== nextProps.currentRating) {
            this.setState({
                rating: this.roundRating(nextProps.currentRating)
            });
        }
    },

    roundRating: function (currentRating) {
        var floor = Math.floor(currentRating),
            difference = currentRating - floor,
            rating = floor;

        if (difference >= 0.25 && difference < 0.75) {
            rating += 0.5;
        }
        else if (difference >= 0.75) {
            rating += 1;
        }

        return rating;
    },

    render: function () {
        var votes = (this.props.totalVotes != null && this.props.totalVotes > 0) ? '(' + this.props.totalVotes + ')' : null;
        // key is explicitly used here to destroy IconRating component for Reset
        return (
            <div>
            <_IconRating {...this.props}
                key={ this.props.currentRating }
                currentRating={ this.state.rating }
                className={ this.props.className }
                toggledClassName={ this.props.toggledClassName }
                untoggledClassName={ this.props.untoggledClassName }
                halfClassName={ this.props.halfClassName }/>
            <span className="rating-text">
                {votes}
            </span>
            </div>
        );
    }

});

module.exports = IconRating;
