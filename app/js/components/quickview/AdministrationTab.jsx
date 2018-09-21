'use strict';

var Reflux = require('reflux');
var React = require('react');
var _ = require('../../utils/_');
var ChangeLog = require('../shared/ChangeLog.jsx');
var ListingActions = require('../../actions/ListingActions');
var fetchChangeLogs = ListingActions.fetchChangeLogs;
var rejectListing = ListingActions.reject;
var approveListingByOrg = ListingActions.approveByOrg;
var approveListing = ListingActions.approve;
var listingStatus = require('ozp-react-commons/constants').approvalStatus;
var { UserRole } = require('ozp-react-commons/constants');
var { form, Str, subtype, struct } = require('tcomb-form');
var LoadMore = require('../shared/LoadMore.jsx');
var PaginatedChangeLogByIDStore = require('../../stores/PaginatedChangeLogByIDStore');
var SystemStateMixin = require('../../mixins/SystemStateMixin');
var ApprovalStatusIcons = require('../shared/ApprovalStatusIcons.jsx');
var LoadIndicator = require('ozp-react-commons/components/LoadIndicator.jsx');

var Toggle = React.createClass({
    propTypes: {
        listing: React.PropTypes.object
    },

    render: function () {
        var title = this.props.title;

        return (
            <section className={this.props.className}>
                <h5>{title}</h5>
                <p>{this.props.description}</p>

                <label className="switchLabel">{this.props.label || title}:</label>
                <input type="checkbox" className="switch-checkbox" id={this.props.id} defaultChecked={this.props.checked} onChange={this.props.onChange}/>
                <label className=" switch switch-label" htmlFor={this.props.id}>
                    <span className="switch-inner"></span>
                    <span className="switch-slider"></span>
                </label>
            </section>
        );
    }
});

var EnabledControl = React.createClass({
    onChange: function (evt, onChange) {
        PaginatedChangeLogByIDStore.resetChangeLogByIDStore();

        if(evt.target.checked)
            ListingActions.enable(this.props.listing);
        else
            ListingActions.disable(this.props.listing);
    },

    shouldComponentUpdate: function (newProps) {
        return newProps.listing.isEnabled !== this.props.isEnabled;
    },

    render: function () {
        var listing = this.props.listing,
            id = 'enabledControl',
            enabled = listing.isEnabled,
            title = enabled ? 'Enabled' : 'Disabled',
            description = 'This listing is ' + (enabled ? '' : 'not') + ' visible to users';

        return (
            <Toggle title={title} label="Enabled" className="enabled-toggle" id={id}
                description={description}
                checked={enabled}
                onChange={this.onChange}/>
        );
    }
});

var FeaturedControl = React.createClass({
    onChange1: function (evt) {
        PaginatedChangeLogByIDStore.resetChangeLogByIDStore();

        ListingActions.setFeatured(evt.target.checked, this.props.listing);
    },

    shouldComponentUpdate: function (newProps) {
        return newProps.listing.isFeatured !== this.props.isFeatured;
    },

    render: function () {
        var listing = this.props.listing,
            id = 'featuredControl',
            featured = listing.isFeatured,
            title = 'Featured',
            description = 'This listing is ' + (featured ? '' : 'not') +
                ' featured on the Discovery Page';

        return (
            <Toggle title={title} label="Featured" className="featured-toggle" id={id}
                description={description}
                checked={featured}
                onChange={this.onChange1}/>
        );
    }
});

var AdministrationTab = React.createClass({
    mixins: [
        SystemStateMixin
    ],

    propTypes: {
        listing: React.PropTypes.object.isRequired
    },

    getInitialState: function () {
        PaginatedChangeLogByIDStore.resetChangeLogByIDStore();
        return {
            prevId: this.props.listing.id,
            editingReviewRejection: false,
            editingDeleteRejection: false,
            editingDeleteApproval: false,
            hasMore: true,
            changeLogs: [],
            loading: false,
            loadingError: false
        };
    },

    componentWillMount: function(){
        this.setState({
            loading: true,
            loadingError: false
        });
    },

    componentWillReceiveProps: function (newProps) {
        if (this.state.prevId !== newProps.listing.id) {
            this.state.prevId = newProps.listing.id;
            this.state.changeLogs = [];
            PaginatedChangeLogByIDStore.resetChangeLogByIDStore();
            fetchChangeLogs(newProps.listing.id);
        }
    },

    componentDidMount: function () {
        this.fetchAllChangeLogsIfEmpty();
        this.listenTo(PaginatedChangeLogByIDStore, this.onChangeLogsReceived);
    },

    onChangeLogsReceived: function() {
        var paginatedList = this.getPaginatedList();
        if (!paginatedList) {
            return;
        }
        var { data, hasMore } = paginatedList;
        this.setState({
            changeLogs: data,
            hasMore: hasMore,
            loading: false,
            loadingError: false
        });
    },

    getPaginatedList: function () {
        return PaginatedChangeLogByIDStore.getChangeLogsByID();
    },

    fetchAllChangeLogsIfEmpty: function () {
        var changeLogs = this.getPaginatedList();
        if (!changeLogs) {
            if (this.props.listing.id) {
                fetchChangeLogs(this.props.listing.id);
            }
        }
        this.onChangeLogsReceived();
    },

    renderChangeLogs: function () {
        return this.state.changeLogs.map(function (changeLog) {
            return [
                <ChangeLog changeLog={changeLog}></ChangeLog>,
                <br/>
            ];
        })
    },

    onLoadMore: function() {
        fetchChangeLogs(this.props.listing.id);
    },

    render: function () {
        var hasMore = this.state.hasMore || false;
        var logs = this.renderChangeLogs();

        return (
            <div className="tab-pane active Quickview__ChangeLog row">
                { this.renderStatus() }
                <div className="col-xs-8 col-right">
                    {(this.state.loading) ?
                        <LoadIndicator showError={this.state.loadingError}
                            errorMessage="Error Getting Reviews"
                        /> :
                        <section>
                            <h5>Listing Changes</h5>
                            <LoadMore className="RecentActivity__activities all"
                                  hasMore={hasMore} onLoadMore={this.onLoadMore}>
                            { logs }
                            </LoadMore>
                        </section>
                    }
                </div>
            </div>
        );
    },

    renderStatus: function () {
        var listing = this.props.listing,
            status = listingStatus[listing.approvalStatus],
            statusText = status,
            user = this.props.currentUser,
            isAdmin = UserRole[user.highestRole] >= UserRole.APPS_MALL_STEWARD,
            isStewardOfOrg = _.contains(this.props.currentUser.stewardedOrganizations, listing.agencyShort),
            controls, statusClass, iconClass;

        switch (status) {
            case 'Published':
                var enabledControl =
                        <EnabledControl key="enabled" listing={this.props.listing} />;
                controls = isAdmin ? [
                        enabledControl,
                        <FeaturedControl key="featured" listing={this.props.listing} />
                    ] : [enabledControl];
                statusClass = 'published';
                break;

            case 'Pending, Organization':
                if (isStewardOfOrg) {
                    controls = this.renderReviewSection();
                    statusClass = 'label-needs-action';
                } else if (isAdmin) {
                    controls = this.renderReviewSection();
                    statusClass = 'label-pending';
                } else {
                    controls = [];
                    statusClass = 'label-pending';
                }
                break;

            case 'Pending Deletion':
                if (isStewardOfOrg) {
                    controls = this.renderReviewSection();
                    statusClass = 'label-needs-action';
                } else if (isAdmin) {
                    controls = this.renderReviewSection();
                    statusClass = 'label-pending';
                } else {
                    controls = this.renderReviewSection();
                    statusClass = 'label-pending';
                }
                break;

            case 'Pending, Center':
                if (isAdmin) {
                    controls = this.renderReviewSection();
                    statusClass = 'label-needs-action';
                } else {
                    controls = [];
                    statusClass = 'label-pending';
                }
                break;

            case 'Returned to Owner':
                statusClass = 'label-needs-action';
                controls = [];
                break;

            case 'Draft':
                statusClass = 'label-draft';
                controls = [];
                break;
        }

        return (
            <div className="col-xs-4 col-left ListingAdmin__Controls">
                <section>
                    <h5>Listing Status</h5>
                    <p className={statusClass}><ApprovalStatusIcons listing={listing} user={user} />{ statusText }</p>
                </section>
                { controls }
            </div>
        );
    },

    renderReviewSection: function () {
        var editingReviewNote = this.state.editingReviewRejection;
        var editingDeleteNote = this.state.editingDeleteRejection;
        var editingDeleteApproval = this.state.editingDeleteApproval;

        var Justification = form.createForm(
            struct({ description: subtype(Str, s => s.length >= 1 && s.length <= 2000) }),
            { fields: { description: {
                type: 'textarea',
                message: 'A justification is required. It can be up to 2000 characters in length.'
            }}}
        );

        var isAdmin = UserRole[this.props.currentUser.highestRole] >= UserRole.APPS_MALL_STEWARD,
            isStewardOfOrg = _.contains(this.props.currentUser.stewardedOrganizations, this.props.listing.agencyShort),
            pendingOrg = (listingStatus[this.props.listing.approvalStatus] === 'Pending, Organization')  ? true : false,
            pendingAdmin = (listingStatus[this.props.listing.approvalStatus] === 'Pending, Center') ? true : false,
            pendingDelete = (listingStatus[this.props.listing.approvalStatus] === 'Pending Deletion')  ? true : false,
            agency = this.props.listing.agencyShort;

        if (editingReviewNote) {
            return (
                <section className="return-feedback">
                    <h5>Return to Owner Feedback</h5>
                    <p>Please provide feedback for the listing owner about what they should do to make this listing ready for publication</p>
                    <form>
                        <Justification ref="justification" />
                        <button type="button" className="btn btn-default" onClick={ this.cancelRejection }>Cancel</button>
                        <button type="button" className="btn btn-warning" onClick={ this.returnToOwner }>Return to Owner</button>
                    </form>
                </section>
            );
        } else if (editingDeleteNote) {
            return (
                <section className="return-feedback">
                    <h5>Reject Deletion Feedback</h5>
                    <p>Please provide feedback for the listing owner about why their listing cannot be deleted.</p>
                    <form>
                        <Justification ref="justification" />
                        <button type="button" className="btn btn-default" onClick={ this.cancelRejection }>Cancel</button>
                        <button type="button" className="btn btn-warning" onClick={ this.returnToOwner }>Reject Deletion</button>
                    </form>
                </section>
            );
        } else if (editingDeleteApproval) {
            return (
                <section className="return-feedback">
                    <h5>Approve Deletion Feedback</h5>
                    <p>Please enter a reason for deleting the listing.</p>
                    <form>
                        <Justification ref="justification" />
                        <button type="button" className="btn btn-default" onClick={ this.cancelApproval }>Cancel</button>
                        <button type="button" className="btn btn-success" onClick={ this.approveDelete }>Approve Deletion</button>
                    </form>
                </section>
            );
        } else {
            if (pendingDelete){
              if(isAdmin && !isStewardOfOrg) {
                return (
                    <section className="review-listing">
                        <h5>{"Listing Pending Deletion"}</h5>
                        <button type="button" className="btn btn-success" onClick={ this.editDeleteApproval }>{"Approve deletion for " + agency}</button>
                        <button type="button" className="btn btn-warning" onClick={ this.editDeleteRejection }>{"Reject deletion for " + agency}</button>
                    </section>
                );
              } else if(isStewardOfOrg) {
                  return (
                      <section className="review-listing">
                         <h5>{"Listing Pending Deletion"}</h5>
                          <button type="button" className="btn btn-success" onClick={ this.editDeleteApproval }>Approve deletion</button>
                          <button type="button" className="btn btn-warning" onClick={ this.editDeleteRejection }>Reject Deletion</button>
                       </section>
                  );
              }
            }
            if(pendingOrg) {
                if(isAdmin && !isStewardOfOrg) {
                   var org = this.props.listing.agencyShort;
                    return (
                        <section className="review-listing">
                            <h5>{"Review Listing for " + org}</h5>
                            <button type="button" className="btn btn-success" onClick={ this.approve }>{"Approve for " + agency}</button>
                            <button type="button" className="btn btn-warning" onClick={ this.editReviewRejection }>{"Reject for " + agency}</button>
                        </section>
                    );
                } else if(isStewardOfOrg) {
                    return (
                        <section className="review-listing">
                           <h5>Review Listing</h5>
                            <button type="button" className="btn btn-success" onClick={ this.approve }>Approve</button>
                            <button type="button" className="btn btn-warning" onClick={ this.editReviewRejection }>Return to Owner</button>
                         </section>
                    );
                }
            }

            if(pendingAdmin) {
                if(isAdmin) {
                    return (
                        <section className="review-listing">
                           <h5>Review Listing</h5>
                            <button type="button" className="btn btn-success" onClick={ this.approve }>Approve</button>
                            <button type="button" className="btn btn-warning" onClick={ this.editReviewRejection }>Return to Owner</button>
                         </section>
                    );
                }
            }
        }
    },

    editDeleteApproval: function (event) {
        event.preventDefault();
        this.setState({ editingDeleteApproval: true });
    },

    editReviewRejection: function (event) {
        event.preventDefault();
        this.setState({ editingReviewRejection: true });
    },

    editDeleteRejection: function (event) {
        event.preventDefault();
        this.setState({ editingDeleteRejection: true });
    },

    returnToOwner: function (event) {
        event.preventDefault();
        var justification = this.refs.justification.getValue();
        if (justification) {
            rejectListing(this.props.listing.id, justification.description);
            this.setState({
                editingReviewRejection: false,
                editingDeleteRejection: false
             });
        }
    },

    cancelApproval: function (event) {
        event.preventDefault();
        this.setState({ editingDeleteApproval: false });
    },

    cancelRejection: function (event) {
        event.preventDefault();
        this.setState({
            editingReviewRejection: false,
            editingDeleteRejection: false
         });
    },

    approve: function (event) {
        event.preventDefault();
        if (listingStatus[this.props.listing.approvalStatus] === 'Pending, Organization') {
            approveListingByOrg(this.props.listing);
        } else {
            approveListing(this.props.listing);
        }
    },

    approveDelete: function (event) {
        //event.preventDefault();
        var justification = this.refs.justification.getValue();
        if (justification) {
            ListingActions.deleteListing(this.props.listing, justification.description);
        }
    }

});

module.exports = AdministrationTab;
