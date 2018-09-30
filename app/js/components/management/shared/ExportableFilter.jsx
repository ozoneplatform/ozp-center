'use strict';
var React = require('react');
var _ = require('../../../utils/_');
var RadioGroup = require('react-radio-group');

var ExportableFilter = React.createClass({

    handleExportableChange: function (evt) {
        var {value} = evt.target;
        if (value === 'null') { value = null; }
        if (value === 'true') { value = true; }
        if (value === 'false') { value = false; }
        this.props.onFilterChanged('exportable', value);
    },

    render: function () {
        var {counts, value} = this.props;
        value = _.isBoolean(this.props.value.exportable) ? this.props.value.exportable.toString() : 'null';

        var total = counts.total || 0;
        var exportable = counts.exportable || 0;
        var not_exportable = total - exportable;

        return (
            <div>
                <h4 style={{marginTop: 30}}>Exportable</h4>
                <RadioGroup
                    name="exportable"
                    value={ value }
                    onChange={ this.handleExportableChange }>
                    <input id="all-listings-filter-exportable-enabled" type="radio" value="true"/>
                    <label htmlFor="all-listings-filter-exportable-enabled" className="label-exportable-enabled">
                        Exportable to Affiliated Stores
                        {
                            (value === 'null' || value === 'true') &&
                                <strong className="badge">{ exportable }</strong>
                        }
                    </label>
                    <input id="all-listings-filter-exportable-disabled" type="radio" value="false"/>
                    <label htmlFor="all-listings-filter-exportable-disabled" className="label-exportable-disabled">
                        Not Exportable to Affiliated Stores
                        {
                            (value === 'null' || value === 'false') &&
                                <strong className="badge">{ not_exportable }</strong>
                        }
                    </label>
                </RadioGroup>
            </div>
        );
    }


});

module.exports = ExportableFilter;
