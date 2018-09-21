'use strict';

var React = require('react');
var { reviewWarningMessage } = require('ozp-react-commons/constants/messages');

var ReviewWarningMessage = React.createClass({

    render: function () {
        return (
            <p className="alert alert-warning">{reviewWarningMessage}</p>
        );
    }

});

module.exports = ReviewWarningMessage;
