'use strict';

var Reflux = require('reflux');
var uuid = require('../utils/uuid.js');
var _ = require('../utils/_');

var _storageKey = 'message-queue';

var MessageStore = Reflux.createStore({
    PROGRESS_STATE: 'info',
    ERROR_STATE: 'danger',
    SUCCESS_STATE: 'success',

    data: {
        messages: []
    },

    init: function () {
        this._initMessages();
    },

    addMessage(message, useStorage) {
        var data = {
            'uuid': uuid(),
            'message': message,
            'state': this.PROGRESS_STATE,
            'hidden': false,
            'createdDate': new Date()
        };

        this.data.messages.push(data);

        if(useStorage) {
            var storageMessages = JSON.parse(sessionStorage.getItem(_storageKey));

            storageMessages.push(data);
            sessionStorage.setItem(_storageKey, JSON.stringify(storageMessages));
        }

        var finishedMessages = _.filter(this.data.messages, m => m.state != this.PROGRESS_STATE);
        finishedMessages.forEach(m => {
            this.deleteMessage(m.uuid);
        });

        this.trigger();

        return data;
    },

    updateMessage(id, newData) {
        var message = _.find(this.data.messages, { uuid: id });

        if(message) {
            message.message = _.has(newData, 'message') ? newData.message : message.message;
            message.state = _.has(newData, 'state') ? newData.state : message.state;
            message.hidden = _.has(newData, 'hidden') ? newData.hidden : message.hidden;

            var storageMessages = JSON.parse(sessionStorage.getItem(_storageKey));
            var storageIndex = _.findIndex(storageMessages, { uuid: id });

            if(storageIndex > -1) {
                storageMessages[storageIndex] = message;
                sessionStorage.setItem(_storageKey, JSON.stringify(storageMessages));
            }

            this.trigger();
        }
    },

    deleteMessage(id) {
        var removedMessages = _.remove(this.data.messages, { uuid: id });

        var storageMessages = JSON.parse(sessionStorage.getItem(_storageKey));
        var removedStorageMessages = _.remove(storageMessages, { uuid: id });

        if(removedStorageMessages.length > 0) {
            sessionStorage.setItem(_storageKey, JSON.stringify(storageMessages));
        }

        if(removedMessages.length > 0 || removedStorageMessages.length > 0) {
            this.trigger();
        }
    },

    getMessages() {
        var sortedMessages = this.data.messages.sort((a, b) => a.createdDate < b.createdDate);

        return sortedMessages;
    },

    _initMessages() {
        this.data.messages = JSON.parse(sessionStorage.getItem(_storageKey));

        if(this.data.messages == null) {
            sessionStorage.setItem(_storageKey, JSON.stringify([]));
            this.data.messages = [];
        }

        // JSON parser doesn't parse dates appropriately
        this.data.messages.forEach(m => {
            m.createdDate = new Date(m.createdDate);
        });

        this.trigger();
    }

});

module.exports = MessageStore;
