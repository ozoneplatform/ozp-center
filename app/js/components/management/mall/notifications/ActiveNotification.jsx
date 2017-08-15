'use strict';

var React = require('react');
var _ = require('../../../../utils/_');

var _Date = require('ozp-react-commons/components/Date.jsx');
var Time = require('ozp-react-commons/components/Time.jsx');
var NotificationActions = require('../../../../actions/NotificationActions.js');
var { DeleteConfirmation } = require('../../../shared/DeleteConfirmation.jsx');

var ActiveNotification = React.createClass({
    mixins: [React.addons.PureRenderMixin],

    statics: {
        fromArray: function (notifications) {
            if (notifications) {
                return notifications.map(function (notification) {
                    return <ActiveNotification key={notification.id} notification={notification}/>;
                });
            }
        }
    },

    getInitialState() {
        return {
            deleting: false
        }
    },

    onStopClick() {
        // The backend complains when you send it listing and author, so send subset
        var subset = _.pick(this.props.notification, ['id', 'expiresDate']);
        NotificationActions.expireNotification(subset);
    },

    deleteNotification(notificationId) {
        NotificationActions.deleteNotification(notificationId);
        this.refs.modal.close();
    },

    isDelete() {
        this.setState({ deleting: true });
    },

    closeModal() {
        sweetAlert({
            title: "Deletion complete",
            text: "The notification has been deleted.",
            type: "info",
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "ok",
            closeOnConfirm: true,
            html: false
        });
    },

    renderDeleteConfirmation(notification) {
        return (
            <DeleteConfirmation ref="modal" kind="notification"
                onHidden={this.closeModal} onDelete={() =>this.deleteNotification(notification.id)}/>
        );
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
                    <em>Created: <_Date date={created} /> at <Time date={created} /> / </em>
                    <em>Expires: <_Date date={expiresDate} /> at <Time date={expiresDate} /></em>
                    <a onClick={() => this.isDelete()}><i className="icon-trash-12-blueDarker activeIcon resend" title="Delete Notification"></i></a>
                </div>
                { this.state.deleting && this.renderDeleteConfirmation(this.props.notification) }
                <p dangerouslySetInnerHTML={{ __html: message}} />
            </div>
        );
    }
});

module.exports = ActiveNotification;
