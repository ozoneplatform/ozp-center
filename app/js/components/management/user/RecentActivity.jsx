'use strict';

var React = require('react');
var Reflux = require('reflux');
var { Navigation } = require('react-router');
var Sidebar = require('./RecentActivitySidebar.jsx');
var ListingActions = require('../../../actions/ListingActions');
var ChangeLog = require('../../shared/ChangeLog.jsx');
var LoadMore = require('../../shared/LoadMore.jsx');
var PaginatedChangeLogStore = require('../../../stores/PaginatedChangeLogStore');
var ActiveState = require('../../../mixins/ActiveStateMixin');
var SystemStateMixin = require('../../../mixins/SystemStateMixin');


var RecentActivity = React.createClass({

    mixins: [
        Navigation,
        ActiveState,
        SystemStateMixin,
        Reflux.listenTo(ListingActions.fetchAllChangeLogsFailed, 'onFetchAllChangeLogsFailed')
    ],

    getInitialState: function () {
        return {
            changeLogs: []
        };
    },

    componentDidMount: function () {
        this.refs.loadMore.initLoad();
        this.fetchAllChangeLogsIfEmpty();
        this.listenTo(PaginatedChangeLogStore, this.onChangeLogsReceived);
    },

    onLoadMore: function() {
        this.refs.loadMore.initLoad();
        ListingActions.fetchAllChangeLogs(this.state.currentUser);
    },

    onChangeLogsReceived: function() {
        var paginatedList = this.getPaginatedList();
        if (!paginatedList) {
            return;
        }
        var { data, hasMore } = paginatedList;
        this.setState({
            changeLogs: data,
            hasMore: hasMore
        });
        this.refs.loadMore.loadSuccess();
    },

    createLink: function (changeLog) {
        var action = changeLog.action;
        var noActions = [
            'MODIFIED',
            'ADD_RELATED_TO_ITEM',
            'REMOVE_RELATED_TO_ITEM',
            'REJECTED',
            'PENDING_DELETION',
            'TAG_CREATED',
            'DELETED'
        ];

        if (noActions.indexOf(action) > -1) {
            return;
        } else {
            var linkMap = {
                'APPROVED' : 'View',
                'SUBMITTED' : 'View Submission',
                'ENABLED' : 'View',
                'DISABLED' : 'View',
                'CREATED' : 'View Draft',
                'APPROVED_ORG' : 'Review Listing',
                'REVIEWED' : 'View',
                'REVIEW_EDITED' : 'View',
                'REVIEW_DELETED' : 'View'
            };

            var href = this.makeHref(this.getActiveRoutePath(), this.getParams(), {
                listing: changeLog.listing.id,
                action: 'view',
                tab: 'overview'
            });
            if (changeLog.action === "REVIEWED" || changeLog.action === "REVIEW_EDITED"){
                href = this.makeHref(this.getActiveRoutePath(), this.getParams(), {
                    listing: changeLog.listing.id,
                    action: 'view',
                    tab: 'reviews'
                });
            }

            if (!this.state.currentUser.isAdmin()) {
                linkMap.APPROVED_ORG = 'View';
            }

            if (this.state.currentUser.highestRole === 'ORG_STEWARD') {
                linkMap.SUBMITTED = 'Review Listing';
            }
            if(!changeLog.listing.isDeleted){
              return (
                  <a href={href}>{ linkMap[action] } <i className="icon-caret-right-blueDark"></i></a>
              )
            }
        }
    },

    getPaginatedList: function () {
        return PaginatedChangeLogStore.getChangeLogs();
    },

    fetchAllChangeLogsIfEmpty: function () {
        var changeLogs = this.getPaginatedList();
        if (!changeLogs) {
            ListingActions.fetchAllChangeLogs(this.state.currentUser);
        }
        this.onChangeLogsReceived();
    },

    onFetchAllChangeLogsFailed() {
        this.refs.loadMore.loadError();
    },

    renderChangeLogs: function () {
        var me = this;

        return this.state.changeLogs.map(function (changeLog) {
            if(!changeLog.listing.isDeleted){
            return [
                <ChangeLog showListingName={true} changeLog={changeLog}>
                    { changeLog.listing.smallIcon ? <img className="recent-activity-icon" alt="recent activity icon" src={ changeLog.listing.smallIcon } /> : <div></div> }
                    { me.createLink(changeLog) }
                </ChangeLog>,
                <br/>
            ];

          }
          else{
            return [

                <ChangeLog showListingName={true} changeLog={changeLog}>
                    { changeLog.listing.smallIcon ? <img className="recent-activity-icon" alt="recent activity icon" src={ changeLog.listing.smallIcon } /> : <div></div> }
                </ChangeLog>,
                <br/>
            ];
          }
        });
    },

    render: function () {
        var hasMore = this.state.hasMore || false;
        var logs = this.renderChangeLogs();

        return (
            <div className="RecentActivity row">
                <div className="RecentActivity__Sidebar col-xs-5 col-lg-4"><Sidebar /></div>
                <div className="RecentActivity__Content col-xs-7 col-lg-8">
                    <h3>Recent Activity</h3>
                        <LoadMore ref="loadMore" className="RecentActivity__activities all"
                                  hasMore={hasMore} onLoadMore={this.onLoadMore}>
                            { logs }
                        </LoadMore>
                </div>
            </div>
        );
    }

});

module.exports = RecentActivity;
