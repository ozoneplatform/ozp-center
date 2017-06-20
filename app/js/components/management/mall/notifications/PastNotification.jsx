'use strict';

var React = require('react');
var _Date = require('ozp-react-commons/components/Date.jsx');
var Time = require('ozp-react-commons/components/Time.jsx');

var PastNotification = React.createClass({
    statics: {
        fromArray: function (notifications) {
            if (notifications) {
                return notifications.map(function (notification) {
                    return <PastNotification key={notification.id} notification={notification}/>;
                });
            }
        }
    },
    render() {
        var { listing, expiresDate, message, createdDate } = this.props.notification;
        var created = new Date(createdDate);
        var e = document.createElement('div');
        e.innerHTML = message;

        return (
            <div className="PastNotification">
                <div className="PastNotification__Header">
                    <h5 style={{margin: 0, fontWeight: 400}}>{(listing) ? listing.title : 'AppsMall' }</h5>
                    <em>Created: <_Date date={created} /> at <Time date={created} /> / </em>
                    <em>Expired: <_Date date={expiresDate} /> at <Time date={expiresDate} /></em>
                </div>
                <p dangerouslySetInnerHTML={{ __html: message}} />
            </div>
        );
    }
});

module.exports = PastNotification;
