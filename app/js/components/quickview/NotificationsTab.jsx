'use strict';

var React = require('react');
var Reflux = require('reflux');
var DatePicker = require('react-datepicker');
var moment = require('moment');
var Select = require('../shared/Select.jsx');

var _ = require('../../utils/_.js');
var Notifications = require('./notifications/index.jsx');

var NotificationsTab = React.createClass({
  render: function () {
    return (
      <div className="tab-pane active quickview-overview" tabIndex="0">
        <Notifications listing={this.props.listing} {...this.props}/>
      </div>
    );
  }
});

module.exports = NotificationsTab;
