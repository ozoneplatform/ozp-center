'use strict';

var React = require('react');

var MessageStore = require('../../stores/MessageStore');

var _Date = require('ozp-react-commons/components/Date.jsx');
var Time = require('ozp-react-commons/components/Time.jsx');

// map of message ID --> timer/timeout for message close/delete countdown
var timers = {};
var timeouts = {};

var MessageQueueItem = React.createClass({
    propTypes: {
        message: React.PropTypes.object.isRequired
    },

    getInitialState() {
        return {
            showTimeout: false,
            timeLeft: 10    // initial countdown for message
        }
    },

    componentWillReceiveProps(nextProps) {
        if(nextProps.message.state == MessageStore.SUCCESS_STATE) {
            var me = this;

            if(!timeouts[nextProps.message.uuid]) {
                timeouts[nextProps.message.uuid] = setTimeout(function() {
                    MessageStore.deleteMessage(nextProps.message.uuid);
                }, me.state.timeLeft * 1000);
            }

            if(!timers[nextProps.message.uuid]) {
                timers[nextProps.message.uuid] = setInterval(function() {
                    if(me.state.timeLeft <= 0) {
                        clearInterval(timers[nextProps.message.uuid]);
                        timers[nextProps.message.uuid] = null;
                    }
                    else if(me.isMounted()) {
                        me.setState({ timeLeft: me.state.timeLeft - 1 });
                    }
                }, 1000);
            }

            this.setState({ showTimeout: true });
        }
    },

    componentWillUnmount() {
        if(timeouts[this.props.message.uuid]) {
            clearTimeout(timeouts[this.props.message.uuid]);
            timeouts[this.props.message.uuid] = null;
        }

        if(timers[this.props.message.uuid]) {
            clearInterval(timers[this.props.message.uuid]);
            timers[this.props.message.uuid] = null;
        }
    },

    onHideClick() {
        if(this.props.message.state != MessageStore.PROGRESS_STATE) {
            MessageStore.deleteMessage(this.props.message.uuid);
        }
        else {
            MessageStore.updateMessage(this.props.message.uuid, { hidden: true });
        }
    },

    render() {
        if(this.props.message.hidden) {
            return (null);
        }

        return (
            <div className={"message-item alert alert-" + this.props.message.state}>
                <span className="message">{this.props.message.message}</span>
                <span className="timestamp">
                    <_Date date={this.props.message.createdDate}/>
                    <Time date={this.props.message.createdDate}/>
                </span>
                <button type="button" className="hide-button pull-right" onClick={this.onHideClick}>
                    <i className="icon-cross-16"></i>
                </button>
                { this.state.showTimeout &&
                    <p>This message will close automatically in {this.state.timeLeft} second{this.state.timeLeft == 1 ? '' : 's'}...</p>
                }
            </div>
        );
    }
});

module.exports = MessageQueueItem;
