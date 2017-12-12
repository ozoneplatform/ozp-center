'use strict';

var $ = require('jquery');
var humps = require('humps');

var { API_URL } = require('ozp-react-commons/OzoneConfig');
var { PAGINATION_MAX } = require('ozp-react-commons/constants');
var PaginatedResponse  =require ('./responses/PaginatedResponse');

module.exports = {
    parse (json) {
        json.expiresDate = new Date(json.expiresDate.replace('+0000', 'Z'));
        return json;
    },

    create(notification) {
        notification = humps.decamelizeKeys(notification);
        return $.ajax({
            url: `${API_URL}/api/notification/`,
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(notification)
        }).then((x) => this.parse(humps.camelizeKeys(x)));
    },

    update(notification) {
        notification = humps.decamelizeKeys(notification);
        return $.ajax({
            url: `${API_URL}/api/notification/` + notification.id + '/',
            type: 'put',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(notification)
        }).then((x) => this.parse(humps.camelizeKeys(x)));
    },

    delete(id) {
        return $.ajax({
            url: `${API_URL}/api/notification/` + id + '/',
            type: 'delete',
            dataType: 'json',
            contentType: 'application/json'
        }).then((response) => {
            return id;
        });
    },

    fetchActive() {
        return $.getJSON(`${API_URL}/api/notifications/pending/?offset=0&limit=${PAGINATION_MAX}`)
            .then((response) => {
              return new PaginatedResponse(humps.camelizeKeys(response), this.parse);
            });
    },

    fetchActiveById(id) {
        return $.getJSON(`${API_URL}/api/notifications/pending/?listing=${id}&offset=0&limit=${PAGINATION_MAX}`)
            .then((response) => {
              return new PaginatedResponse(humps.camelizeKeys(response), this.parse);
            });
    },

    fetchOwnNotifications: function () {
      return $.getJSON(API_URL + '/api/self/notification/').then(function(response) {
        return humps.camelizeKeys(response);
      });
    },

    fetchPast(url, id) {
        url = url || `${API_URL}/api/notifications/expired/?offset=0&limit=${PAGINATION_MAX}`;

        if (id) {
          url += `&listing=${id}`;
        }
        return $.getJSON(url)
            .then((response) => new PaginatedResponse(humps.camelizeKeys(response), this.parse));
    }
};
