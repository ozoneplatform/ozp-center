'use strict';

var React = require('react');
var Reflux = require('reflux');
var { RouteHandler } = require('react-router');
var State = require('../mixins/ActiveStateMixin');
var SystemStateMixin = require('../mixins/SystemStateMixin');

var { fetchLibrary } = require('../actions/LibraryActions');

var Quickview = require('../components/quickview/index.jsx');
var CenterProfileWindow = require('./profile/CenterProfileWindow.jsx');
var CenterContactsWindow = require('./contacts/CenterContactsWindow.jsx');
var FeedbackModal = require('./management/user/FeedbackModal.jsx');
var NotificationWindow = require('./notification/NotificationWindow.jsx');
var { ListingDeleteConfirmation } = require('./shared/DeleteConfirmation.jsx');
var { ListingPendingDeleteConfirmation } = require('./shared/PendingDeleteConfirmation.jsx');
var { ListingUndeleteConfirmation } = require('./shared/UndeleteConfirmation.jsx');
var TagSubscriptionActions = require('ozp-react-commons/actions/TagSubscriptionActions');
var TagSubscriptionStore = require('ozp-react-commons/stores/TagSubscriptionStore');
var CategorySubscriptionActions = require('ozp-react-commons/actions/CategorySubscriptionActions');
var CategorySubscriptionStore = require('ozp-react-commons/stores/CategorySubscriptionStore');

var App = React.createClass({

    mixins: [Reflux.connect(CategorySubscriptionStore, "categorySubscriptionStore"), Reflux.connect(TagSubscriptionStore, "tagSubscriptionStore"), SystemStateMixin, State ],

    render: function () {
        return (
            <div id="App">
                <RouteHandler system={this.state.system} currentUser={this.state.currentUser} {...this.props} />
                { this.renderModal() }
            </div>
        );
    },

    renderModal: function () {
        var { listing, profile, contacts, tab, action, notifications} = this.getQuery();
        if (listing) {
            if (tab) {
                var preview = action === 'preview';
                return <Quickview listingId={ listing } tab={tab} preview={ preview } system={this.state.system} currentUser={this.state.currentUser} />;
            }
            else if (action === 'feedback') {
                return <FeedbackModal listing={listing} />;
            }
            else if (action === 'delete') {
                return <ListingDeleteConfirmation listing={listing} />;
            }
            else if (action === 'pending_deletion') {
                return <ListingPendingDeleteConfirmation listing={listing} />;
            }
            else if (action === 'undelete') {
                return <ListingUndeleteConfirmation listing={listing} />;
            }
        }
        else if (profile) {
            return <CenterProfileWindow profileId={profile} />;
        }
        else if (contacts) {
            return <CenterContactsWindow/>;
        }
        else if (notifications) {
            return <NotificationWindow />
        }
    },

    componentWillMount: function () {
        fetchLibrary();
    },

    componentDidMount: function () {
        TagSubscriptionActions.fetchSubscriptions();
        CategorySubscriptionActions.fetchSubscriptions();
    }
});

module.exports = App;
