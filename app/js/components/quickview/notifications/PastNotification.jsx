'use strict';

var React = require('react');
var _Date = require('ozp-react-commons/components/Date.jsx');
var Time = require('ozp-react-commons/components/Time.jsx');

var PastNotification = React.createClass({
    statics: {
        fromArray: function (notifications, forId) {
            if (notifications) {
                return notifications.map(function (notification) {
                    if (notification.listing && notification.listing.id === forId) {
                      return <PastNotification key={notification.id} notification={notification}/>;
                    }
                });
            }
        }
    },
    render() {
        var { expiresDate, message, listing } = this.props.notification;
        return (
            <div className="PastNotification">
                <div className="PastNotification__Header">
                    <h5 style={{margin: 0, fontWeight: 400}}>{(listing) ? listing.title : 'AppsMall'}</h5>
                    <em>Expired: <_Date date={expiresDate} /> at <Time date={expiresDate} /></em>
                </div>
                <p>{ message }</p>
            </div>
        );
    }
});

module.exports = PastNotification;
