'use strict';

var React = require('react');
var _ = require('../../utils/_');

var Select = React.createClass({

    propTypes: {
        options: React.PropTypes.array.isRequired
    },

    _renderOptions() {
        return this.props.options.map(function (value) {
                    // if the array has objects with key values
            if(value.key)
                return <option key={value.key} value={value.key}>{value.value}</option>;
            else
                return <option key={value} value={value}>{value}</option>;
        });
    },

    render: function () {
        var props = _.omit(this.props, 'options');

        return (
            <select {...props}>
                { this._renderOptions() }
            </select>
        );
    }

});

module.exports = Select;
