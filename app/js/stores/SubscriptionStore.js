'use strict';

var React = require('react');
var Reflux = require('reflux');
var $ = require('jquery');

var SubscriptionActions = require('../actions/SubscriptionActions');
var SubscriptionApi = require('../webapi/Subscription');
var _ = require('../utils/_');

var SubscriptionStore = Reflux.createStore({
    listenables: SubscriptionActions,
    subscriptions: [],

    onFetchSubscriptions: function() {
        var me = this;

        SubscriptionApi.getSubscriptions().then(function(response) {
            me.subscriptions = response;
            me.trigger(me.subscriptions);
            me.doTrigger();
        });
    },

    onSubscribeToCategory: function(category) {
        var me = this;

        SubscriptionApi.subscribeToEntity("category", category).then(function(categoryEntry) {
            me.subscriptions = me.subscriptions.concat(categoryEntry);
            me.doTrigger();
        });
    },

    onUnsubscribeToCategory: function(category) {
        var me = this;

        SubscriptionApi.unsubscribeToEntity(category.id).then(function() {
            for (var i = 0; i < me.subscriptions.length; i++) {
                if (me.subscriptions[i].entity_id == category.entity_id && me.subscriptions[i].entity_type == 'category') {
                    me.subscriptions.splice(i, 1);
                }
            }
            me.doTrigger();
        });

    },

    onSubscribeToTag: function(tag) {
        var me = this;

        SubscriptionApi.subscribeToEntity("tag", tag).then(function(tagEntry) {
            me.subscriptions = me.subscriptions.concat(tagEntry);
            me.doTrigger();
        });
    },

    onUnsubscribeToTag: function(tag) {
        var me = this;

        SubscriptionApi.unsubscribeToEntity(tag.id).then(function() {
            for (var i = 0; i < me.subscriptions.length; i++) {
                if (me.subscriptions[i].entity_id == tag.entity_id && me.subscriptions[i].entity_type == 'tag') {
                    me.subscriptions.splice(i, 1);
                }
            }
            me.doTrigger();
        });
    },

    doTrigger: function() {
        this.trigger(this.getDefaultData());
    },

    getDefaultData: function() {
        return this.subscriptions;
    }
});

module.exports = SubscriptionStore;
