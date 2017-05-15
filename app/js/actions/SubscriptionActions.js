'use strict';

var Reflux = require('reflux');
var createActions = require('../utils/createActions');
var SubscriptionApi = require('../webapi/Subscription');

var SubscriptionActions = Reflux.createActions([
    'fetchSubscriptions',
    'subscribeToCategory',
    'unsubscribeToCategory'
]);

module.exports = SubscriptionActions;
