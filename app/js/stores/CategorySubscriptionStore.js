'use strict';

var React = require('react');
var Reflux = require('reflux');
var $ = require('jquery');

var CategorySubscriptionActions = require('../actions/CategorySubscriptionActions');
var SubscriptionApi = require('../webapi/Subscription');
var _ = require('../utils/_');

var CategorySubscriptionStore = Reflux.createStore({
    listenables: CategorySubscriptionActions,
    categorySubscriptions: [],

    onFetchSubscriptions: function() {
        var me = this;

        SubscriptionApi.getSubscriptions().then(function(response) {
            me.categorySubscriptions = [];
            for (var i = 0; i < response.length; i++) {
                if (response[i].entity_type == "category") {
                    me.categorySubscriptions = me.categorySubscriptions.concat(response[i]);
                }
            }
            me.trigger(me.categorySubscriptions);
            me.doTrigger();
        });
    },

    onSubscribeToCategory: function(category) {
        var me = this;

        SubscriptionApi.subscribeToEntity("category", category).then(function(categoryEntry) {
            me.categorySubscriptions = me.categorySubscriptions.concat(categoryEntry);
            me.doTrigger();
        });
    },

    onUnsubscribeToCategory: function(category) {
        var me = this;

        SubscriptionApi.unsubscribeToEntity(category.id).then(function() {
            for (var i = 0; i < me.categorySubscriptions.length; i++) {
                if (me.categorySubscriptions[i].entity_id == category.entity_id) {
                    me.categorySubscriptions.splice(i, 1);
                }
            }
            me.doTrigger();
        });

    },

    doTrigger: function() {
        this.trigger(this.getDefaultData());
    },

    getDefaultData: function() {
        return this.categorySubscriptions;
    }
});

module.exports = CategorySubscriptionStore;
