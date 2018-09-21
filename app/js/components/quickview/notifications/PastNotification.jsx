'use strict';

var React = require('react');
var _Date = require('ozp-react-commons/components/Date.jsx');
var Time = require('ozp-react-commons/components/Time.jsx');
var NotificationActions = require('../../../actions/NotificationActions.js');

var PastNotification = React.createClass({
    mixins: [React.addons.PureRenderMixin],

    statics: {
        fromArray: function (notifications) {
            if (notifications) {
                return notifications.map(function (notification) {
                    return <PastNotification key={notification.id} notification={notification}/>;
                });
            }
        }
    },

    onStopClick() {
        // The backend complains when you send it listing and author, so send subset
        var subset = _.pick(this.props.notification, ['id', 'expiresDate']);
        NotificationActions.expireNotification(subset);
    },

    render() {
        var { listing, expiresDate, createdDate, message  } = this.props.notification;
        var created = new Date(createdDate);
        var e = document.createElement('div');
        e.innerHTML = message;

        return (
            <div className="PastNotification">
                <div className="PastNotification__Header">
                    <h5 style={{margin: 0, fontWeight: 400}}>{(listing) ? listing.title : 'AppsMall'}</h5>
                    <em>Created: <_Date date={created} /> at <Time date={created} /><br/></em>
                    <em>Expired: <_Date date={expiresDate} /> at <Time date={expiresDate} /></em>
                </div>
                <p dangerouslySetInnerHTML={{ __html: message}} />
            </div>
        );
    }
});

module.exports = PastNotification;
