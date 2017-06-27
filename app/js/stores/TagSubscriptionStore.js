'use strict';

var React = require('react');
var Reflux = require('reflux');
var $ = require('jquery');

var TagSubscriptionActions = require('../actions/TagSubscriptionActions');
var SubscriptionApi = require('../webapi/Subscription');
var _ = require('../utils/_');

var TagSubscriptionStore = Reflux.createStore({
    listenables: TagSubscriptionActions,
    tagSubscriptions: [],

    onFetchSubscriptions: function() {
        var me = this;

        SubscriptionApi.getSubscriptions().then(function(response) {
            me.tagSubscriptions = [];
            for (var i = 0; i < response.length; i++) {
                if (response[i].entity_type == "tag") {
                    me.tagSubscriptions = me.tagSubscriptions.concat(response[i]);
                }
            }
            me.trigger(me.tagSubscriptions);
            me.doTrigger();
        });
    },

    onSubscribeToTag: function(tag) {
        var me = this;

        SubscriptionApi.subscribeToEntity("tag", tag).then(function(tagEntry) {
            me.tagSubscriptions = me.tagSubscriptions.concat(tagEntry);
            me.doTrigger();
        });
    },

    onUnsubscribeToTag: function(tag) {
        var me = this;

        SubscriptionApi.unsubscribeToEntity(tag.id).then(function() {
            for (var i = 0; i < me.tagSubscriptions.length; i++) {
                if (me.tagSubscriptions[i].entity_id == tag.entity_id) {
                    me.tagSubscriptions.splice(i, 1);
                }
            }
            me.doTrigger();
        });
    },

    doTrigger: function() {
        this.trigger(this.getDefaultData());
    },

    getDefaultData: function() {
        return this.tagSubscriptions;
    }
});

module.exports = TagSubscriptionStore;
