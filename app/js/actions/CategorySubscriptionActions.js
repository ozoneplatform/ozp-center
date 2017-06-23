'use strict';

var Reflux = require('reflux');
var createActions = require('../utils/createActions');
var SubscriptionApi = require('../webapi/Subscription');

var CategorySubscriptionActions = Reflux.createActions([
    'fetchSubscriptions',
    'subscribeToCategory',
    'unsubscribeToCategory',
]);

module.exports = CategorySubscriptionActions;
