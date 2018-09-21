'use strict';

var React = require('react');
var Reflux = require('reflux');
var CreateNotification = require('./CreateNotification.jsx');
var ActiveNotification = require('./ActiveNotification.jsx');
var PastNotification = require('./PastNotification.jsx');
var LoadMore = require('../../shared/LoadMore.jsx');

var ActiveNotificationsStore = require('../../../stores/ActiveNotificationStore.js');
var PastNotificationsStore = require('../../../stores/PastNotificationStore.js');
var NotificationActions = require('../../../actions/NotificationActions.js');
var LoadIndicator = require('ozp-react-commons/components/LoadIndicator.jsx');

var ActiveNotifications = React.createClass({
    mixins: [
        Reflux.listenTo(ActiveNotificationsStore, 'onStoreChanged')
    ],

    getState() {
        var notificationList = ActiveNotificationsStore.getNotifications();
        return {
            notifications: notificationList.data,
            hasMore: notificationList.hasMore,
            loading: true,
            loadingError: false
        };
    },

    getInitialState() {
        return this.getState();
    },

    onStoreChanged() {
        this.setState(this.getState());
    },

    componentDidMount() {
      NotificationActions.fetchActiveById(this.props.listing.id);
      this.setState({
          loading: false,
          loadingError: false
      });
    },

    render() {
        var notificationComponents = ActiveNotification.fromArray(this.state.notifications);
        if (!notificationComponents || notificationComponents.length === 0) {
            notificationComponents = <span>There are no active notifications.</span>;
        }
        return (
            <div>
                <h4 style={{marginTop: 0}}>Active Notifications</h4>
                {(!this.state.loading) ?
                    <LoadIndicator showError={this.state.loadingError}
                        errorMessage="Error Getting Notifications"
                    /> :
                notificationComponents
            }
            </div>
        );
    }
});

var PastNotifications = React.createClass({
    mixins: [
        Reflux.listenTo(PastNotificationsStore, 'onStoreChanged')
    ],

    getState() {
        var notificationList = PastNotificationsStore.getNotifications();
        return {
            notifications: notificationList.data,
            hasMore: notificationList.hasMore,
            loading: true,
            loadingError: false
        };
    },

    getInitialState() {
        return this.getState();
    },

    onStoreChanged() {
        this.setState(this.getState());
    },

    componentDidMount() {
      NotificationActions.fetchPastById(this.props.listing.id);
      this.setState({
          loading: false,
          loadingError: false
      });
    },

    render() {
        var notificationComponents = PastNotification.fromArray(this.state.notifications);
        if (!notificationComponents || notificationComponents.length === 0) {
            notificationComponents = <span>There are no past notifications.</span>;
        }
        return (
            <div>
                <h4 style={{marginTop: 0}}>Past Notifications</h4>
                {(!this.state.loading) ?
                    <LoadIndicator showError={this.state.loadingError}
                        errorMessage="Error Getting Notifications"
                    /> :
                notificationComponents
            }
            </div>
        );
    }
});

var Notifications = React.createClass({

    render() {
        return (
            <div className="row">
                <div className="col-md-4 clearfix">
                    <CreateNotification {...this.props}/>
                </div>
                <div className="col-md-4 notificationsScroller">
                    <ActiveNotifications {...this.props}/>
                </div>
                <div className="col-md-4 notificationsScroller">
                    <PastNotifications {...this.props}/>
                </div>
            </div>
        );
    }

});

module.exports = Notifications;
module.exports.ActiveNotifications = ActiveNotifications;
module.exports.PastNotifications = PastNotifications;
