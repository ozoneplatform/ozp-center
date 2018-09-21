'use strict';

var Reflux = require('reflux');
var _ = require('../utils/_');
var NotificationActions = require('../actions/NotificationActions.js');
var PaginatedList = require('../utils/PaginatedList.js');
var _notifications;

var _resetNotifications = false;
var resetNotifications = function () {
    _resetNotifications = true;
};

NotificationActions.createNotificationCompleted.listen(resetNotifications);
NotificationActions.expireNotificationCompleted.listen(resetNotifications);
NotificationActions.deleteNotificationCompleted.listen(resetNotifications);

var PastNotificationStore = Reflux.createStore({

    init() {
        _notifications = new PaginatedList();
        this.listenTo(NotificationActions.fetchPastCompleted, this.fetchPastCompleted);
        this.listenTo(NotificationActions.createNotificationCompleted, this.onCreateCompleted);
        this.listenTo(NotificationActions.expireNotificationCompleted, this.onExpireCompleted);
        this.listenTo(NotificationActions.deleteNotificationCompleted, this.onDeleteCompleted);
    },

    getNotifications() {
        return _notifications;
    },

    fetchPastCompleted(notifications) {
        this.init();
        _notifications.receivePage(notifications);
        this.trigger();
    },

    onCreateCompleted(uuid, notification) {
        if (notification.expiresDate.toISOString() <= notification.createdDate){
            _notifications.data.unshift(notification);
            this.trigger();
        }
    },

    onExpireCompleted(notification) {
        _notifications.data.unshift(notification);
        this.trigger();
    },

    onDeleteCompleted(id) {
        _.remove(_notifications.data, { id: id });
        this.trigger();
    }

});

module.exports = PastNotificationStore;
