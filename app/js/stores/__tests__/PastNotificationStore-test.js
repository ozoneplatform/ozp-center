'use strict';

var expect = require('chai').expect;
var sinon = require('sinon');
var NotificationActions = require('../../actions/NotificationActions');

describe('PastNotificationStore', () => {

    var PastNotificationStore = require('../PastNotificationStore');

    it('fetches past notifications when notification is created or expired', (done) => {
        var fetchPastStub = sinon.stub(NotificationActions, 'fetchPast');
        var notificationList = JSON.parse(JSON.stringify(PastNotificationStore.getNotifications()));
        var date = new Date();
        date.setDate(date.getDate() - 1);
        var notification = {
            id: 1,
            message: 'TEST',
            createdDate: new Date().toISOString(),
            expiresDate: date
        };

        NotificationActions.createNotificationCompleted(Math.random(), notification);
        NotificationActions.expireNotificationCompleted(notification);

        setTimeout(() => {
            expect(notificationList).to.not.eql(PastNotificationStore.getNotifications());
            done();
        }, 0);
    });

});
