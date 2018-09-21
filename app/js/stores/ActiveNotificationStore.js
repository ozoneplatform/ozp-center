'use strict';

var Reflux = require('reflux');
var _ = require('../utils/_');
var NotificationActions = require('../actions/NotificationActions.js');
var PaginatedList = require('../utils/PaginatedList.js');
var _notifications;

var ActiveNotificationStore = Reflux.createStore({

    init() {
        _notifications = new PaginatedList();
        this.listenTo(NotificationActions.fetchActiveCompleted, this.fetchActiveCompleted);
        this.listenTo(NotificationActions.createNotificationCompleted, this.onCreateCompleted);
        this.listenTo(NotificationActions.expireNotificationCompleted, this.onExpireCompleted);
        this.listenTo(NotificationActions.deleteNotificationCompleted, this.onDeleteCompleted);
    },

    getNotifications() {
        return _notifications;
    },

    fetchActiveCompleted(notifications) {
        this.init();
        _notifications.receivePage(notifications);
        this.trigger();
    },

    onCreateCompleted(uuid, notification) {
        if (notification.expiresDate.toISOString() > notification.createdDate){
            _notifications.data.unshift(notification);
            this.trigger();
        }
    },
    onExpireCompleted(notification) {
        _.remove(_notifications.data, { id: notification.id });
        this.trigger();
    },

    onDeleteCompleted(id) {
        _.remove(_notifications.data, { id: id });
        this.trigger();
    }

});

module.exports = ActiveNotificationStore;
