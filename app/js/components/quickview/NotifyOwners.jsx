'use strict';

var React = require('react');
var Reflux = require('reflux');
var _ = require('../../utils/_');
var uuid = require('../../utils/uuid.js');
var NotificationActions = require('../../actions/NotificationActions.js');

var NotifyOwners = React.createClass({

    mixins: [
        React.addons.LinkedStateMixin,
        Reflux.listenTo(NotificationActions.createNotificationCompleted, 'onNotificationCreated')
    ],


    propTypes: {
        listing: React.PropTypes.object.isRequired,
        text: React.PropTypes.string,
    },

    getInitialState: function () {
        return {
            text: ''
        };
    },

    onTextChange: function (val) {
        this.state.text = val.target.value.substring(0, 4000);
        this.forceUpdate();
    },

    onSave(event) {
        event.preventDefault();
        var date = new Date();
        var expiresDate = new Date(
            Date.UTC(date.getFullYear(), date.getMonth()+1, date.getDate())
        );

        var message =
            this.props.user.currentUser.displayName +
            " has sent a notification in regards to the listing " +
            this.props.listing.title +
            ":<br><br>" +
            this.state.text;

        NotificationActions.createNotification(this.state.uuid, {
            expiresDate: expiresDate,
            listing: {
                id: this.props.listing.id
            },
            message: message,
            notification_type: "ListingOwnerNotification",
        });
    },

    onReset: function () {
        this.setState({
            uuid: uuid(),
            date: null,
            text: ''
        });
    },

    onNotificationCreated(uuid, notification) {
        if (this.state.uuid === uuid) {
            this.onReset();
            this.props.responded();
        }
    },

    render: function() {
        var { text } = this.state;
        var submitButton = text.length > 0 ? <button className="btn btn-success btn-small" onClick={ this.onSave } >Submit</button> : <button className="btn btn-success btn-small" onClick={ this.onSave } disabled>Submit</button>;

        return (
            <div>
                <h6>Send a message to the above owners</h6>
                <textarea className="response-textarea" ref="text" value={ text } onChange={ this.onTextChange }/>
                <div>
                    <button className="btn btn-default btn-small" onClick={ this.onReset }>Reset</button>
                    {submitButton}
                </div>
            </div>
        );

    }
});

module.exports = NotifyOwners;
