'use strict';

var React = require('react');
var IconRating = require('../shared/IconRating.jsx');
var ListingActions = require('../../actions/ListingActions');
var launch = ListingActions.launch;
var { UserRole } = require('../../constants');

var BookmarkButton = require('../BookmarkButton.jsx');

var QuickviewHeader = React.createClass({

    propTypes: {
        listing: React.PropTypes.object,
        onCancel: React.PropTypes.func.isRequired
    },

    render: function () {
        var listing = this.props.listing;
        var title = listing.title;
        var avgRate = listing.avgRate;
        var image = listing.imageMediumUrl;
        var agencyShort = listing.agencyShort;

        return (
            <div className="quickview-header">
                <div className="quickview-header-info">
                    <button type="button" className="close" aria-hidden="true" onClick={ this.props.onCancel }>×</button>
                    <img className="listing-icon" src={ image } data-fallback="/store/images/types/3" />
                    <h3 className="listing-title" title={ title }>{ title }
                    {
                        agencyShort &&
                        <span className="company">{ agencyShort }</span>
                    }
                    </h3>
                    <IconRating
                        className="icon-rating"
                        viewOnly
                        currentRating= { avgRate }
                        toggledClassName="fa fa-star"
                        untoggledClassName="fa fa-star-o"
                        halfClassName="fa fa-star-half-o" />
                </div>
                { !this.props.preview && this.renderActions() }
            </div>
        );
    },

    renderActions: function () {
        var currentUser = this.props.currentUser;
        var isOwner = this.props.listing.owners.some(o => o.username === currentUser.username);
        var isAdmin = UserRole[currentUser.highestRole] >= UserRole.ADMIN;

        return (
            <div className="btn-group quickview-header-actions">
                <button type="button" className="btn btn-default" onClick={ this.launch }><i className="icon-open"></i></button>
                <BookmarkButton listing={this.props.listing} />
              {this.props.allowEdit && <button type="button" className="btn btn-default" onClick={ this.props.onEdit }><i className="fa fa-pencil"></i></button>}
            </div>
        );
    },

    launch: function () {
        launch(this.props.listing);
    }
});

module.exports = QuickviewHeader;