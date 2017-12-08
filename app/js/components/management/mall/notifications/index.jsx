'use strict';

var React = require('react');
var Reflux = require('reflux');
var CreateNotification = require('./CreateNotification.jsx');
var ActiveNotification = require('./ActiveNotification.jsx');
var PastNotification = require('./PastNotification.jsx');
var LoadMore = require('../../../shared/LoadMore.jsx');
var LoadIndicator = require('ozp-react-commons/components/LoadIndicator.jsx');

var ActiveNotificationsStore = require('../../../../stores/ActiveNotificationStore.js');
var PastNotificationsStore = require('../../../../stores/PastNotificationStore.js');
var NotificationActions = require('../../../../actions/NotificationActions.js');

var ActiveNotifications = React.createClass({
    mixins: [
        Reflux.listenTo(ActiveNotificationsStore, 'onStoreChanged'),
        Reflux.listenTo(NotificationActions.fetchActive, 'onFetchActive'),
        Reflux.listenTo(NotificationActions.fetchActiveCompleted, 'onFetchActiveCompleted'),
        Reflux.listenTo(NotificationActions.fetchActiveFailed, 'onFetchActiveFailed')
    ],

    getState() {
        var notificationList = ActiveNotificationsStore.getNotifications();
        return {
            notifications: notificationList.data,
            hasMore: notificationList.hasMore
        };
    },

    onFetchActive() {
        this.setState({
            loading: true,
            loadingError: false
        });
    },

    onFetchActiveCompleted() {
        this.setState({
            loading: false,
            loadingError: false
        });
    },

    onFetchActiveFailed() {
        this.setState({
            loading: false,
            loadingError: true
        });
    },

    getInitialState() {
        return this.getState();
    },

    onStoreChanged() {
        this.setState(this.getState());
    },

    componentDidMount() {
        var { hasMore } = this.state;
        if (hasMore) {
            NotificationActions.fetchActive();
        }
    },

    render() {
        var notificationComponents = ActiveNotification.fromArray(this.state.notifications);
        if (!notificationComponents || notificationComponents.length === 0) {
            notificationComponents = <span>There are no active notifications.</span>;
        }
        return (
            <div>
                <h4 style={{marginTop: 0}}>Active Notifications</h4>
                { this.state.loading || this.state.loadingError ?
                    <LoadIndicator showError={this.state.loadingError}
                        errorMessage="Error Loading Active Notifications"/>
                    : notificationComponents }
            </div>
        );
    }
});

var PastNotifications = React.createClass({
    mixins: [
        Reflux.listenTo(PastNotificationsStore, 'onStoreChanged'),
        Reflux.listenTo(NotificationActions.fetchPast, 'onFetchPast'),
        Reflux.listenTo(NotificationActions.fetchPastCompleted, 'onFetchPastCompleted'),
        Reflux.listenTo(NotificationActions.fetchPastFailed, 'onFetchPastFailed')
    ],

    getState() {
        var notificationList = this.notifications();
        return {
            notifications: notificationList.data,
            hasMore: notificationList.hasMore
        };
    },

    getInitialState() {
        return this.getState();
    },

    onFetchPast() {
        this.setState({
            loading: true,
            loadingError: false
        });
    },

    onFetchPastCompleted() {
        this.setState({
            loading: false,
            loadingError: false
        });
    },

    onFetchPastFailed() {
        this.setState({
            loading: false,
            loadingError: true
        });
    },

    onStoreChanged() {
        this.setState(this.getState());
    },

    notifications: function () {
        return PastNotificationsStore.getNotifications();
    },

    fetchMore() {
        var { hasMore } = this.state;
        if (hasMore) {
            NotificationActions.fetchPast(this.notifications());
        }
    },

    componentDidMount() {
        if (!this.state.notifications || this.state.notifications.length === 0) {
            this.fetchMore();
        }
    },

    render() {
        return (
            <div>
                <h4 style={{marginTop: 0}}>Past Notifications</h4>
                { this.state.loading || this.state.loadingError ?
                    <LoadIndicator showError={this.state.loadingError}
                        errorMessage="Error Loading Past Notifications"/> :
                    <LoadMore hasMore={this.state.hasMore} onLoadMore={this.fetchMore}>
                        { PastNotification.fromArray(this.state.notifications, null, true, this.props.fn) }
                    </LoadMore>
                }
            </div>
        );
    }
});

var Notifications = React.createClass({
    getInitialState() {
        return {message: ''};
    },

    updateMessage: function(message){
      this.setState({message: message});
    },

    render() {
        var message = this.state.message;
        var updateMessage = this.updateMessage;
        return (
            <div className="row">
                <div className="col-md-4 clearfix">
                    <CreateNotification fn={updateMessage} message={message}/>
                </div>
                <div className="col-md-4">
                    <ActiveNotifications />
                </div>
                <div className="col-md-4">
                    <PastNotifications fn={updateMessage}/>
                </div>
            </div>
        );
    }

});

module.exports = Notifications;
module.exports.ActiveNotifications = ActiveNotifications;
module.exports.PastNotifications = PastNotifications;
