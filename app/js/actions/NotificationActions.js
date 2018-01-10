'use strict';

var _ = require('../utils/_');
var createActions = require('../utils/createActions');
var NotificationApi = require('../webapi/Notification.js');
var ProfileActions = require('ozp-react-commons/actions/ProfileActions');

var MessageStore = require('../stores/MessageStore');

var _notificationTypes = [
    {key: 'System', value: 'System'},
    {key: 'StewardAppNotification', value: 'Update Request'}
];

var NotificationActions = createActions({

    createNotification(uuid, notification) {
        var displayType = ' ';
        if(_.has(notification, 'listing')) {
            displayType = ' Listing ';
        }
        else {
            var notificationType = _.find(_notificationTypes, { key: notification.notificationType });
            if(notificationType) {
                displayType = ' ' + notificationType['value'] + ' ';
            }
        }
        var messageData = MessageStore.addMessage('Sending' + displayType + 'Notification', true);

        NotificationApi.create(notification)
            .then(function (response) {
                NotificationActions.createNotificationCompleted(uuid, response);
                MessageStore.updateMessage(messageData['uuid'], {
                    message: messageData['message'] + ' Complete!',
                    state: MessageStore.SUCCESS_STATE,
                    hidden: false
                });
                ProfileActions.fetchNotifications();
            })
            .fail(function (response) {
                NotificationActions.createNotificationFailed(uuid, response);

                // if readyState is 0, the failure is caused by a window unload
                // (navigating away from the page, forcing an app reload)
                if(response.readyState == 0) {
                    MessageStore.updateMessage(messageData['uuid'], {
                        message: messageData['message'] + ' (message out-of-sync due to page reload)',
                        hidden: true
                    });
                }
                else {
                    MessageStore.updateMessage(messageData['uuid'], {
                        message: messageData['message'] + ' Failed!',
                        state: MessageStore.ERROR_STATE,
                        hidden: false
                    });
                }
            });
    },

    expireNotification(notification) {
        notification.expiresDate = new Date();
        NotificationApi.update(notification)
            .then(function (response) {
                NotificationActions.expireNotificationCompleted(response);
                ProfileActions.fetchNotifications();
            })
            .fail(NotificationActions.expireFailed);
    },

    fetchActive() {
        NotificationApi.fetchActive()
            .then(NotificationActions.fetchActiveCompleted)
            .fail(NotificationActions.fetchActiveFailed);
    },

    fetchActiveById(id) {
        NotificationApi.fetchActiveById(id)
            .then(NotificationActions.fetchActiveCompleted)
            .fail(NotificationActions.fetchActiveFailed);
    },

    fetchOwnNotifications() {
      NotificationApi.fetchOwnNotifications()
          .then(NotificationActions.fetchOwnNotificationsCompleted)
          .fail(NotificationActions.fetchOwnNotificationsFailed);
    },

    fetchPast() {
        NotificationApi.fetchPast()
            .then(NotificationActions.fetchPastCompleted)
            .fail(NotificationActions.fetchPastFailed);
    },

    fetchPastById(id) {
      NotificationApi.fetchPast(id)
          .then(NotificationActions.fetchPastCompleted)
          .fail(NotificationActions.fetchPastFailed);
    },

    deleteNotification(notificationId) {
        NotificationApi.delete(notificationId)
            .then(NotificationActions.deleteNotificationCompleted)
            .fail(NotificationActions.deleteNotificationFailed);
    }

});

module.exports = NotificationActions;
