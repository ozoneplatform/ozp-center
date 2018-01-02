'use strict';

var React = require('react');
var Reflux = require('reflux');

var MessageStore = require('../../stores/MessageStore');

var MessageQueueItem = require('./MessageQueueItem.jsx');

var MessageQueue = React.createClass({
    mixins: [
        Reflux.listenTo(MessageStore, 'onStoreChange')
    ],

    getInitialState() {
        return {
            messages: MessageStore.getMessages()
        }
    },

    onStoreChange() {
        this.setState(this.getInitialState());
    },

    render() {
        var messageItems = this.state.messages.map(m =>
            <MessageQueueItem message={m} key={m.uuid}/>
        );

        return (
            <div className="message-queue navbar-fixed-bottom">
                {messageItems}
            </div>
        );
    }
});

module.exports = MessageQueue;
