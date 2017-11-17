'use strict';
var React = require('react');
var uuid = require('../../utils/uuid');
var timeAgo = require('../../utils/timeAgo');
var fieldName = require('ozp-react-commons/constants/index').listingFieldName;
var GlobalListingStore = require('../../stores/GlobalListingStore');

var { Navigation } = require('react-router');
var ProfileLink = require('../profile/ProfileLink.jsx');

var ActiveState = require('../../mixins/ActiveStateMixin');

var AuthorLink = React.createClass({
    propTypes: {
        author: React.PropTypes.object.isRequired
    },

    render: function() {
        var author = this.props.author;

        return (
            <ProfileLink profileId={author.id}>
                {author.displayName}
            </ProfileLink>
        );
    }
});

var ActionChangeLog = React.createClass({
    render: function() {
        var changeLog = this.props.changeLog;
        return (
            <div>
                <AuthorLink author={changeLog.author} />
                <span> { changeLog.action.toLowerCase() } </span>
                { this.props.listingName }
            </div>
        );
    }
});

var PendingDeletionChangeLog = React.createClass({
    render: function() {
        var changeLog = this.props.changeLog;
        return (
            <div>
                <AuthorLink author={changeLog.author} />
                <span> submitted { this.props.listingName } for deletion</span>
            </div>
        );
    }
});

var SetToChangeLog = React.createClass({
    render: function() {
        var changeLog = this.props.changeLog;
        return (
            <div>
                <AuthorLink author={changeLog.author} />
                <span> set </span>
                { this.props.listingName } to {changeLog.action.toLowerCase()}
            </div>
        );
    }
});

var RejectedChangeLog = React.createClass({
    toggleIcon: function (e) {
        $(e.currentTarget).children('i').toggleClass('icon-minus-10-blueDark icon-plus-10-blueDark');
    },
    render: function () {
        var changeLog = this.props.changeLog;
        var details = 'Details: ' + changeLog.description;
        var id = uuid();

        return (
            <div>
                <div>
                    <AuthorLink author={changeLog.author} />
                    <span> rejected </span>
                    { this.props.listingName }
                </div>
                <a data-toggle="collapse" data-target={ '#' + id } onClick={ this.toggleIcon }>
                    <i className="icon-plus-10-blueDark"></i> Feedback
                </a>
                <ul id={ id } className="collapse list-unstyled ListingActivity__Changes">
                    <li>{ details }</li>
                </ul>
            </div>
        );
    }
});

var OrgApprovalChangeLog = React.createClass({

    render: function() {
        var changeLog = this.props.changeLog;
        return (
            <div>
                <AuthorLink author={changeLog.author} />
                <span> approved </span>
                { this.props.listingName } for { changeLog.listing.agency.shortName }
            </div>
        );
    }
});

var ModifiedChangeLog = React.createClass({
    toggleIcon: function (e) {
        $(e.currentTarget).children('i').toggleClass('icon-minus-10-blueDark icon-plus-10-blueDark');
    },

    render: function () {
        var changeLog = this.props.changeLog;
        var details = [], extendedDetails = [];
        changeLog.changeDetails.forEach(function (changeDetail, i) {
            var changedField = fieldName[changeDetail.fieldName] || changeDetail.fieldName;

            if (i === changeLog.changeDetails.length - 1 && i !== 0) {
                details[i] =  'and ' + changedField;
            }
            else {
                details[i] = changedField;
            }

            extendedDetails[i] = (
                <li key={i}>{ changedField } changed from&nbsp;
                    <span className="OldValue">{ changeDetail.oldValue }</span>
                    <span> to </span>
                    <span className="NewValue">{ changeDetail.newValue }</span>
                </li>
            );
        });

        if (details.length) {
            details = details.join(', ');
            var id = uuid();

            return (
                <div>
                    <div>
                        <AuthorLink author={changeLog.author} /> modified {this.props.listingName}
                    </div>
                    <a data-toggle="collapse" data-target={ '#' + id } onClick={ this.toggleIcon }>
                        <i className="icon-plus-10-blueDark"></i> See {this.props.showListingName ? changeLog.listing.title : 'the listing'} changes
                    </a>
                    <ul id={ id } className="collapse list-unstyled ListingActivity__Changes">
                        { extendedDetails }
                    </ul>
                </div>
            );
        } else {
            return (
                <div>
                    <AuthorLink author={changeLog.author} />
                    <span> modified </span>
                    { this.props.showListingName ? changeLog.listing.title : 'the listing' }
                </div>
            );
        }
    }
});

var ReviewedChangeLog = React.createClass({
    render: function() {
        var changeLog = this.props.changeLog;
        return (
            <div>
                <AuthorLink author={changeLog.author} />
                <span> reviewed </span>
                 { this.props.listingName }
            </div>
        );
    }
});

var ReviewEditedChangeLog = React.createClass({
    render: function() {
        var changeLog = this.props.changeLog;
        return (
            <div>
                <AuthorLink author={changeLog.author} />
                <span> edited review for </span>
                { this.props.listingName }
            </div>
        );
    }
});

var ReviewDeletedChangeLog = React.createClass({
    render: function() {
        var changeLog = this.props.changeLog;
        return (
            <div>
                <AuthorLink author={changeLog.author} />
                <span> removed </span>
                { changeLog.changeDetails[0].newValue } review from { this.props.listingName }
            </div>
        );
    }
});

var GenericLegacyChangeLog = React.createClass({
    render: function() {
        var changeLog = this.props.changeLog;
        return (
            <div>
                <AuthorLink author={changeLog.author} />
                <span> { changeLog.action } </span>
                 on { this.props.listingName }
            </div>
        );
    }
});

var ChangeLog = React.createClass({


    mixins: [ Navigation, ActiveState],

    actionMapAdmin: {
        'MODIFIED' : ModifiedChangeLog,
        'APPROVED' : ActionChangeLog,
        'SUBMITTED' : ActionChangeLog,
        'ENABLED' : ActionChangeLog,
        'DISABLED' : ActionChangeLog,
        'CREATED' : ActionChangeLog,
        'OUTSIDE' : SetToChangeLog,
        'INSIDE' : SetToChangeLog,
        'DELETED' : ActionChangeLog,
        'REJECTED' : RejectedChangeLog,
        'APPROVED_ORG' : OrgApprovalChangeLog,
        'REVIEWED' : ReviewedChangeLog,
        'REVIEW_EDITED' : ReviewEditedChangeLog,
        'REVIEW_DELETED' : ReviewDeletedChangeLog,
        'PENDING_DELETION' : PendingDeletionChangeLog
    },

    getListingName: function() {

        if(this.props.showListingName) {
            var href = this.makeHref(this.getActiveRoutePath(), this.getParams(), {
                listing: this.props.changeLog.listing.id,
                action: 'view',
                tab: 'overview'
            });
            if(!this.props.changeLog.listing.isDeleted){
              return (
                  <a href={ href }>{ this.props.changeLog.listing.title }</a>
              );
            }
            else {
              return(
                <span>{this.props.changeLog.listing.title + " (Deleted)"}</span>
              );
            }
        } else {
            return 'the listing';
        }
    },

    render: function() {
        var icon, link;

        if(this.props.children !== undefined) {
            icon = this.props.children[0];
            link = this.props.children[1];
        }

        var changeLog = this.props.changeLog;
        var time = changeLog ? timeAgo(changeLog.activityDate) : null;
        var Handler = changeLog ? this.actionMapAdmin[changeLog.action] : null;
        if(!Handler) {
            Handler = GenericLegacyChangeLog;
        }
        return (
            <li>
                <div className="row">
                    <div className={this.props.showListingName? "col-md-2" : "col-md-3"}>
                        <em>{ time }</em>
                    </div>
                    <div className={this.props.showListingName ? "col-md-10" : "col-md-9"}>
                        { icon }
                        { changeLog ? < Handler changeLog={ changeLog } listingName={ this.getListingName() } /> : null }
                        { link }
                    </div>
                </div>
            </li>
        );
    }

});


module.exports = ChangeLog;
