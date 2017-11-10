'use strict';

var React = require('react');
var moment = require('moment');
var { Link, Navigation } = require('react-router');
var ActiveState = require('../../mixins/ActiveStateMixin');
var { UserRole } = require('ozp-react-commons/constants');
var deleted = './images/deleted_360.png';
var SelfStore = require('ozp-react-commons/stores/SelfStore');
var ApprovalStatusIcons = require('../shared/ApprovalStatusIcons.jsx');

var ActionMenu = React.createClass({

    mixins: [ Navigation, ActiveState ],

    render: function () {
        //TODO fill in hrefs
        var currentUser = SelfStore.getDefaultData().currentUser;
        var owners = this.props.listing.owners;

        var listing = this.props.listing,
            activeRoutePath = this.getActiveRoutePath(),
            overviewHref = this.makeHref(activeRoutePath, this.getParams(), {
                listing: listing.id,
                action: 'view',
                tab: 'overview'
            }),
            deleteHref = this.makeHref(activeRoutePath, this.getParams(), {
                listing: listing.id,
                action: 'delete'
            }),
            pendDeleteHref = this.makeHref(activeRoutePath, this.getParams(), {
                listing: listing.id,
                action: 'pending_deletion'
            }),
            feedbackHref = this.makeHref(activeRoutePath, this.getParams(), {
                listing: listing.id,
                action: 'feedback'
            }),
            undeleteHref = this.makeHref(activeRoutePath, this.getParams(), {
                listing: listing.id,
                action: 'undelete'
            }),
            linkParams = {listingId: listing.id},
            edit = <li key="edit"><Link to="edit" params={linkParams}>Edit</Link></li>,
            preview = <li key="preview"><a href={overviewHref}>Preview</a></li>,
            del = <li key="del"><a href={deleteHref}>Delete</a></li>,
            view = <li key="view"><a href={overviewHref}>View</a></li>,
            feedback = <li key="feedback"><a href={feedbackHref}>Read Feedback</a></li>,
            pendingDelete = <li key="penddelete"><a href={pendDeleteHref}>Pend for Deletion</a></li>,
            undelete  = <li key="undelete"><a href={undeleteHref}>Undelete</a></li>,
            links,
            approvalStatus = listing.approvalStatus;

        switch (approvalStatus) {
            case 'APPROVED':
                if(currentUser.isAdmin() || currentUser.isOrgSteward(listing.agencyShort)){
                    links = [edit, view, del];
                }
                else{
                    links = [edit, view, pendingDelete];
                }
                break;
            case 'APPROVED_ORG':
                if(currentUser.isAdmin() || currentUser.isOrgSteward(listing.agencyShort)){
                    links = [edit, view, del];
                }
                else{
                    links = [edit, view, pendingDelete];
                }
                break;
            case 'PENDING':
                if(currentUser.isAdmin() || currentUser.isOrgSteward(listing.agencyShort)){
                    links = [edit, view, del];
                }
                else{
                    links = [edit, view, pendingDelete];
                }
                break;
            case 'REJECTED':
                if(currentUser.isAdmin() || currentUser.isOrgSteward(listing.agencyShort)){
                    links = [edit, view, del];
                }
                else{
                    links = [edit, view, pendingDelete];
                }
                break;
            case 'DELETED':
                    links = [];
                break;
            case 'PENDING_DELETION':
                if(currentUser.isAdmin() || currentUser.isOrgSteward(listing.agencyShort)){
                    links = [edit, view, del];
                }
                else{
                    links = [view, edit,undelete];
                }
                break;
            case 'DRAFT':
                /* falls through */
            default:
                links = [edit, preview, pendingDelete];
        }

        //use hidden checkbox to manage menu toggle state
        return (
            <label className="AdminOwnerListingTile__actionMenu">
                <input type="checkbox" />
                <span className="AdminOwnerListingTile__actionMenuButton" />
                <ul>{links}</ul>
            </label>
        );
    }
});

var PrivateListing = React.createClass({
    render: function () {
        var isPrivate = this.props.listing.isPrivate;

        return (
            <div className={"lockStyle"}>
                { isPrivate &&
                    <i className="icon-lock-blue"></i>
                }
            </div>
        );
    }
});

var EditedDate = React.createClass({
    render: function () {
        var editedDate = this.props.listing.editedDate,
            editedDateString = moment(editedDate).format('MM/DD/YY');

        return (
            <div className="editedDate">{editedDateString}</div>
        );
    }
});

var InfoBar = React.createClass({
    render: function () {
        var listing = this.props.listing,
        user = this.props.user;

        return (
            <h5 className="AdminOwnerListingTile__infoBar">
                <div className="iconStyle">
                    <ApprovalStatusIcons listing={listing} user={user} />
                </div>
                <PrivateListing listing={listing} />
                <p className="title">{listing.title}</p>
                <EditedDate listing={listing} />
            </h5>
        );
    }
});

var AdminOwnerListingTile = React.createClass({
    propTypes: {
        user: React.PropTypes.object,
        listing: React.PropTypes.object
    },

    mixins: [ Navigation, ActiveState ],

    statics: {
        fromArray: function (array, user) {
            return array.map((listing) =>
                <AdminOwnerListingTile listing={listing} key={listing.id} user={user} />
            );
        }
    },

    getInitialState: function() {
        return {listing: this.props.listing, user: SelfStore.getDefaultData().currentUser};
    },

    render: function () {
        var { listing } = this.props;
        var user = this.state.user;
        var overview = this.makeHref(this.getActiveRoutePath(), this.getParams(), {
            listing: listing.id,
            action: 'view',
            tab: 'overview'
        });
        var imageLargeUrl = listing.imageLargeUrl;
        if(this.props.listing.approvalStatus !== 'DELETED'){
            return (
                <li className={'AdminOwnerListingTile'}>
                    { (this.props.listing.approvalStatus !== "DELETED")  &&
                    <ActionMenu listing={listing} />
                }
                <a href={overview}>
                    <img alt={`Click to manage ${listing.title}`} className="AdminOwnerListingTile__img" src={(this.props.listing.approvalStatus !== "DELETED") ? imageLargeUrl : deleted} />
                    <span className="hidden-span">{listing.title}</span>
                </a>
                <InfoBar listing={listing} user={user}/>
            </li>
        );
        }
        else{
            return (
                <li className={'AdminOwnerListingTile'}>
                    <a >
                        <img className="AdminOwnerListingTile__img" src={deleted} />
                        <span className="hidden-span">{listing.title}</span>
                    </a>
                    <InfoBar listing={listing} user={user}/>
                </li>
            );
        }
    }
});

module.exports = AdminOwnerListingTile;
