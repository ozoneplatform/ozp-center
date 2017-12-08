'use strict';

var React = require('react');
var Reflux = require('reflux');
var DatePicker = require('react-datepicker');
var moment = require('moment');
var Select = require('../../../shared/Select.jsx');
var LoadIndicator = require('ozp-react-commons/components/LoadIndicator.jsx');

var _ = require('../../../../utils/_.js');
var uuid = require('../../../../utils/uuid.js');
var NotificationActions = require('../../../../actions/NotificationActions.js');

var CreateNotification = React.createClass({

    mixins: [
        React.addons.LinkedStateMixin,
        Reflux.listenTo(NotificationActions.createNotificationCompleted, 'onNotificationCreated'),
        Reflux.listenTo(NotificationActions.createNotificationFailed, 'onNotificationCreateFailed')
    ],

    getDefaultProps() {
        return {
            minDate: moment(),
            hours: _.range(0, 24).map((x) => {
                return x < 10 ? `0${x}` : `${x}`;
            }),
            minutes: ['00', '15', '30', '45', '59'],
            types: [{key: 'System', value: 'System'},
                    {key: 'StewardAppNotification', value: 'Update Request'}]
        };
    },

    getInitialState() {
        return {
            uuid: uuid(),
            date: null,
            message: '',
            hour: '00',
            minute: '00',
            type: 'System',
            loading: false,
            loadingError: false
        };
    },

    componentWillReceiveProps(nextProps){
        this.setState({message: nextProps.message});
    },

    onReset(event) {
        if (event) {
            event.preventDefault();
        }

        this.setState(this.getInitialState());

        this.props.fn('');
    },

    onExpiresDateChange(date) {
        this.setState({date: date});
    },

    onMessageChange(event) {
        var { value } = event.target;
        this.setState({message: value.substring(0, 600)});
    },

    onTypeChange(event) {
        var { value } = event.target;
        if (value === 'StewardAppNotification')
            this.setState({type: value, message:'Please review your agency\'s apps and make sure their information is up to date'});
        else
            this.setState({type: value, message: ''});
    },

    onSend(event) {
        event.preventDefault();
        var { message, date, hour, minute, type} = this.state;
        var expiresDate = new Date(
            Date.UTC(date.year(), date.month(), date.date(), parseInt(hour, 10), parseInt(minute, 10))
        );

        this.setState({
            loading: true,
            loadingError: false
        });

        NotificationActions.createNotification(this.state.uuid, {
            expiresDate: expiresDate,
            message: message,
            notificationType: type
        });
    },

    /* eslint-disable no-unused-vars */
    onNotificationCreated(uuid, notification) {
        this.setState({
            loading: false,
            loadingError: false
        });
        if (this.state.uuid === uuid) {
            this.onReset();
        }
    },
    /* eslint-enable no-unused-vars */

    onNotificationCreateFailed() {
        this.setState({
            loading: false,
            loadingError: true
        });
    },

    render() {
        return (
            <div className="CreateNotification">
                <h4 style={{marginTop: 0}}>Send a Notification</h4>
                <form>
                    <div className="row">
                        <div className="col-xs-6 col-md-4" style={{paddingRight: '0px'}}>
                            <div className="form-group">
                                <label>Type</label>
                                <div>
                                    <Select ref="type" name="type" options={ this.props.types } onChange={this.onTypeChange} />
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-4 col-md-4" style={{paddingRight: '0px'}}>
                            <div className="form-group">
                                <label htmlFor="notification-expires-time">Expires On</label>
                                <DatePicker
                                    placeholderText="MM/DD/YYYY"
                                    selected={ this.state.date }
                                    minDate= { this.props.minDate }
                                    dateFormat={ "MM/DD/YYYY" }
                                    onChange= { this.onExpiresDateChange }
                                />
                            </div>
                        </div>
                        <div className="col-xs-2 col-md-4" style={{paddingRight: '0px'}}>
                            <div className="form-group">
                                <label>Expires At (Z)</label>
                                <div>
                                    <Select ref="hour" name="hour" options={ this.props.hours } valueLink={ this.linkState('hour') } />
                                    <Select ref="minute" name="minute" options={ this.props.minutes } valueLink={ this.linkState('minute') } />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="form-group">
                        <label htmlFor="notification-message">Notification text</label>
                        <textarea ref="message" rows="5" className="form-control" placeholder="Enter the text for the notification" name="notification-message"
                            value={this.state.message} onChange={this.onMessageChange}></textarea>
                    </div>
                    <div className="pull-right">
                        <button className="btn btn-default btn-small" onClick={ this.onReset }>Reset</button>
                        <button
                            ref="send"
                            className="btn btn-success btn-small"
                            disabled={!this.state.message || !this.state.date || this.state.loading}
                            onClick={ this.onSend }
                        >
                            Send
                        </button>
                    </div>
                    { (this.state.loading || this.state.loadingError) &&
                        <div>
                            <LoadIndicator showError={this.state.loadingError}
                                errorMessage="Error Creating Notification"
                            />
                        </div>
                    }
                </form>
            </div>
        );
    }

});

module.exports = CreateNotification;
