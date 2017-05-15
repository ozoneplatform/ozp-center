'use strict';

var React = require('react');
var Reflux = require('reflux');
var $ = require('jquery');

var SubscriptionActions = require('../actions/SubscriptionActions');
var SubscriptionApi = require('../webapi/Subscription');
var _ = require('../utils/_');

var SubscriptionStore = Reflux.createStore({
    listenables: SubscriptionActions,
    categories: [],

    onFetchSubscriptions: function() {
        var me = this;

        SubscriptionApi.getSubscriptions().then(function(response) {
            me.categories = response;
            me.trigger(me.categories);
            me.doTrigger();
        });
    },

    onSubscribeToCategory: function(category) {
        var me = this;

        SubscriptionApi.subscribeToCategory(category).then(function(categoryEntry) {
            me.categories = me.categories.concat(categoryEntry);
            me.doTrigger();
        });
    },

    unsubscribeToCategory: function(category) {
        var me = this;

        SubscriptionApi.unsubscribeToCategory(category.id).then(function() {
            for (var i = 0; i < me.categories.length; i++) {
                if (me.categories[i].entity_id == category.entity_id) {
                    me.categories.splice(i, 1);
                }
            }
            me.doTrigger();
        });

    },

    doTrigger: function() {
        this.trigger(this.getDefaultData());
    },

    getDefaultData: function() {
        return this.categories;
    }
});

module.exports = SubscriptionStore;
