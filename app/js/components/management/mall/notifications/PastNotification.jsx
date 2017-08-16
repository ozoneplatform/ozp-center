'use strict';

var React = require('react');
var _Date = require('ozp-react-commons/components/Date.jsx');
var Time = require('ozp-react-commons/components/Time.jsx');
var NotificationActions = require('../../../../actions/NotificationActions.js');
var { DeleteConfirmation } = require('../../../shared/DeleteConfirmation.jsx');

var PastNotification = React.createClass({
    mixins: [React.addons.PureRenderMixin],

    statics: {
        fromArray: function (notifications, id, centerSettings, fn) {
            if (notifications) {
                return notifications.map(function (notification) {
                    return <PastNotification key={notification.id} notification={notification} centerSettings={centerSettings} fn={fn}/>;
                });
            }
        }
    },

    resend: function(message){
        this.props.fn(message);
    },

    getInitialState() {
        return {
            deleting: false
        }
    },

    deleteNotification(notificationId) {
        NotificationActions.deleteNotification(notificationId);
        this.refs.modal.close();
    },

    isDelete() {
        this.setState({ deleting: true });
    },

    closeModal() {
        this.setState(this.getInitialState());
    },

    renderDeleteConfirmation(notification) {
        return (
            <DeleteConfirmation ref="modal" kind="notification"
                onCancel={this.closeModal} onClose={this.closeModal} onDelete={() =>this.deleteNotification(notification.id)}/>
        );
    },

    render() {
        var { listing, expiresDate, message, createdDate } = this.props.notification;
        var created = new Date(createdDate);
        var e = document.createElement('div');
        e.innerHTML = message;

        var resend = (this.props.centerSettings  ? <a onClick={() => this.resend(message)}><i className="icon-speech-bubble-grayDark activeIcon resend" title="Resend Notification"></i></a> : null)

        return (
            <div className="PastNotification">
                <div className="PastNotification__Header">
                    <h5 style={{margin: 0, fontWeight: 400}}>{(listing) ? listing.title : 'AppsMall' }</h5>
                    <em>Created: <_Date date={created} /> at <Time date={created} /> / </em>
                    <em>Expired: <_Date date={expiresDate} /> at <Time date={expiresDate} /></em>
                    <a onClick={() => this.isDelete()}><i className="icon-trash-12-blueDarker activeIcon resend" title="Delete Notification"></i></a>
                    {resend}
                </div>
                { this.state.deleting && this.renderDeleteConfirmation(this.props.notification) }
                <p dangerouslySetInnerHTML={{ __html: message}} />
            </div>
        );
    }
});

module.exports = PastNotification;
