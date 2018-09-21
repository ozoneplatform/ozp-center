'use strict';

var React = require('react');
var { Link, Navigation } = require('react-router');
var RadioGroup = require('react-radio-group');
var SystemStateMixin = require('../../../mixins/SystemStateMixin');
var _ = require('../../../utils/_');
var ApprovalStatusIcons = require('../../shared/ApprovalStatusIcons.jsx');

var MyListingsSidebarFilter = React.createClass({

    render: function () {
        return (
            <RadioGroup name="recent-activity-my-listings" onChange={this.props.handleChange}>
                <Link id="recent-activity-returned" to="my-listings" query={{approval_status: "REJECTED"}}>
                    <label htmlFor="MyListings__listings col-xs-9 col-lg-10 REJECTED" className="label-needs-action">
                        <i className="icon-caret-right"></i>
                        <ApprovalStatusIcons definedStatus={"REJECTED"} />
                        Returned to Owner
                    </label>
                </Link>

                <Link id="recent-activity-returned" to="my-listings" query={{approval_status: "PENDING"}}>
                    <label htmlFor="MyListings__listings col-xs-9 col-lg-10 PENDING"className="label-pending">
                        <i className="icon-caret-right"></i>
                        <ApprovalStatusIcons definedStatus={"PENDING"} />
                        Pending Review
                    </label>
                </Link>

                <Link id="recent-activity-returned" to="my-listings" query={{approval_status: "APPROVED"}}>
                    <label htmlFor="MyListings__listings col-xs-9 col-lg-10 APPROVED" className="label-published">
                        <i className="icon-caret-right"></i>
                        <ApprovalStatusIcons definedStatus={"APPROVED"} />
                        Published
                    </label>
                </Link>

                <Link id="recent-activity-pending-deletion" to="my-listings" query={{approval_status: "PENDING_DELETION"}}>
                    <label htmlFor="my-listings-filter-pending-delete" className="label-pending-delete">
                        <i className="icon-caret-right"></i>
                        <ApprovalStatusIcons definedStatus={"PENDING_DELETION"} />
                        Pending Deletion
                    </label>
                </Link>
            </RadioGroup>
        );
    }

});

var AllListingsSidebarFilter = React.createClass({

    render: function () {
        return (
            <RadioGroup name="recent-activity-all-listings" onChange={this.props.handleChange}>
                <Link id="recent-activity-returned" to="all-listings" query={{approval_status: "APPROVED_ORG"}}>
                    <label htmlFor="recent-activity-returned" className="label-needs-action">
                        <i className="icon-caret-right"></i>
                        <ApprovalStatusIcons definedStatus={"APPROVED_ORG"} userType={"admin"}/>
                        Pending Review
                    </label>
                </Link>

                <Link id="recent-activity-returned" to="all-listings" query={{approval_status: "PENDING"}}>
                    <label htmlFor="recent-activity-pending" className="label-pending">
                        <i className="icon-caret-right"></i>
                        <ApprovalStatusIcons definedStatus={"PENDING"} userType={"admin"}/>
                        Pending Organization Review
                    </label>
                </Link>

                <Link id="recent-activity-returned" to="all-listings" query={{approval_status: "APPROVED"}}>
                    <label htmlFor="recent-activity-published" className="label-published">
                        <i className="icon-caret-right"></i>
                        <ApprovalStatusIcons definedStatus={"APPROVED"} userType={"admin"}/>
                        Published
                    </label>
                </Link>

                <Link id="recent-activity-returned" to="all-listings" query={{approval_status: "REJECTED"}}>
                    <label htmlFor="recent-activity-returned" className="label-rejected">
                        <i className="icon-caret-right"></i>
                        <ApprovalStatusIcons definedStatus={"REJECTED"} userType={"admin"}/>
                        Returned to Owner
                    </label>
                </Link>

                <Link id="recent-activity-pending-deletion" to="all-listings" query={{approval_status: "PENDING_DELETION"}}>
                    <label htmlFor="recent-activity-pending-deletion" className="label-pending-deletion">
                        <i className="icon-caret-right"></i>
                        <ApprovalStatusIcons definedStatus={"PENDING_DELETION"} userType={"admin"}/>
                        Pending Deletion
                    </label>
                </Link>

                <Link id="recent-activity-deleted" to="all-listings" query={{approval_status: "DELETED"}}>
                    <label htmlFor="recent-activity-deleted" className="label-deleted">
                        <i className="icon-caret-right"></i>
                        <ApprovalStatusIcons definedStatus={"DELETED"} userType={"admin"}/>
                        Deleted
                    </label>
                </Link>
            </RadioGroup>
        );
    }

});


var OrgListingsSidebarFilter = React.createClass({

    render: function () {
        return (
            <RadioGroup name="recent-activity-org-listings" onChange={this.props.handleChange}>
                <Link id="recent-activity-pending" to="org-listings" query={{approval_status: "PENDING"}} params={{org: this.props.org.shortName}}>
                    <label htmlFor="recent-activity-org-pending" className="label-needs-action">
                        <ApprovalStatusIcons definedStatus={"PENDING"} userType={"orgSteward"}/>
                        Pending { this.props.org.shortName } Review
                        <i className="icon-caret-right"></i>
                    </label>
                </Link>

                <Link id="recent-activity-pending" to="org-listings" query={{approval_status: "APPROVED_ORG"}} params={{org: this.props.org.shortName}}>
                    <label htmlFor="recent-activity-org-pending" className="label-pending">
                        <ApprovalStatusIcons definedStatus={"APPROVED_ORG"}/>
                        Organization Approved
                        <i className="icon-caret-right"></i>
                    </label>
                </Link>

                <Link id="recent-activity-published" to="org-listings" query={{approval_status: "APPROVED"}} params={{org: this.props.org.shortName}}>
                    <label htmlFor="recent-activity-org-published" className="label-published">
                        <ApprovalStatusIcons definedStatus={"APPROVED"}/>
                        Published
                        <i className="icon-caret-right"></i>
                    </label>
                </Link>

                <Link id="recent-activity-returned" to="org-listings" query={{approval_status: "REJECTED"}} params={{org: this.props.org.shortName}}>
                    <label htmlFor="recent-activity-org-returned" className="label-rejected">
                        <ApprovalStatusIcons definedStatus={"REJECTED"}/>
                        Returned to Owner
                        <i className="icon-caret-right"></i>
                    </label>
                </Link>

                <Link id="recent-activity-deleted" to="org-listings" query={{approval_status: "DELETED"}} params={{org: this.props.org.shortName}}>
                    <label htmlFor="recent-activity-org-deleted" className="label-deleted">
                        <ApprovalStatusIcons definedStatus={"DELETED"}/>
                        Deleted
                        <i className="icon-caret-right"></i>
                    </label>
                </Link>

                <Link id="recent-activity-pending-deletion" to="org-listings" query={{approval_status: "PENDING_DELETION"}} params={{org: this.props.org.shortName}}>
                    <label htmlFor="recent-activity-org-pending-deletion" className="label-pending-deletion">
                        <i className="icon-caret-right"></i>
                        Pending Deletion
                        <ApprovalStatusIcons definedStatus={"PENDING_DELETION"}/>
                    </label>
                </Link>
            </RadioGroup>
        );
    }

});



var RecentActivitySidebar = React.createClass({

    mixins: [ Navigation, SystemStateMixin ],

    renderFilters: function() {
        var me = this;
        var { currentUser, system } = this.state;

        var children = [];
        if (currentUser.isAdmin()) {
            children.push(
                <div key="center-overview" className="filter-group">
                    <h4>Center Overview</h4>
                    <AllListingsSidebarFilter handleChange={this.handleChange} />
                </div>
            );
        }

        if(currentUser.stewardedOrganizations.length > 0 && system.organizations.length > 0) {
            _.forEach(currentUser.stewardedOrganizations, function(orgName, i) {
                var org = _.find(system.organizations, function(orgObj) {
                    return orgObj.shortName === orgName;
                });

                children.push(
                    <div key={`${orgName}.steward.${i}`}  className="filter-group">
                        <h4>{ org.shortName } Review </h4>
                        <OrgListingsSidebarFilter handleChange={me.handleChange} org={org} />
                    </div>
                );

            });
        }

        children.push(
            <div key="listings-overview" className="filter-group">
                <h4>My Listings Overview</h4>
                <MyListingsSidebarFilter handleChange={this.handleChange} />
            </div>
        );

        return children;
    },

    render: function () {
        return (
            <form className="RecentActivity__SidebarFilter">
                { this.renderFilters() }
            </form>
        );
    }
});

module.exports = RecentActivitySidebar;
