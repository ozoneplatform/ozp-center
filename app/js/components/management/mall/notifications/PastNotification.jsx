'use strict';

var React = require('react');
var _Date = require('ozp-react-commons/components/Date.jsx');
var Time = require('ozp-react-commons/components/Time.jsx');
var NotificationActions = require('../../../../actions/NotificationActions.js');

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

    deleteNotification(notificationId) {
        NotificationActions.deleteNotification(notificationId);
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
                    <a onClick={() => this.deleteNotification(this.props.notification.id)}><i className="icon-trash-12-blueDarker activeIcon resend" title="Delete Notification"></i></a>
                    {resend}
                </div>
                <p dangerouslySetInnerHTML={{ __html: message}} />
            </div>
        );
    }
});

module.exports = PastNotification;
