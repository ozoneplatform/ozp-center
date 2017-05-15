'use strict';

var $ = require('jquery');

var { API_URL } = require('ozp-react-commons/OzoneConfig');

var SubscriptionApi = {

    getSubscriptions: function() {
        return $.ajax({
            url: API_URL + '/api/self/subscription/'
        });
    },

    subscribeToCategory: function(categoryId) {
        return $.ajax({
            type: 'POST',
            url: API_URL + '/api/self/subscription/',
            data: JSON.stringify({entity_type: "category", entity_id: categoryId}),
            contentType: 'application/json'
        });
    },

    unsubscribeToCategory: function(categoryId) {
        return $.ajax({
            type: 'DELETE',
            url: API_URL + '/api/subscription/' + categoryId + '/'
        });
    }
};

module.exports = SubscriptionApi;
