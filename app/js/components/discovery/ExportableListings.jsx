'use strict';

var React = require('react');
var SelectBox = require('../shared/SelectBox.jsx');
var SystemStateMixin = require('../../mixins/SystemStateMixin');

var options = [
  {value: 'false', label: 'Listings for this Store'},
  {value: 'true', label: 'Listings Exportable to Affiliated Stores'}
];

var Exportables = React.createClass({
    mixins: [SystemStateMixin],

    propExportable: {
        value: React.PropTypes.string.isRequired,
        onChange: React.PropTypes.func.isRequired
    },

    onChange(exportable) {
        this.props.onChange(exportable);
    },

    render() {
        return (
            <div>
                <SelectBox value={this.props.value} label="Exportable" onChange={this.onChange} className="SelectBox__exportable col-sm-3 col-xs-4">
                   {options.map(option => {
                     return <option value={option.value} key={option.value}>{option.label}</option>
                   })}
                 </SelectBox>

                <span id="exportableDescription" className="ariaTip">Press tab once and use the arrow keys to filter</span>
            </div>
        );
    }
});

module.exports = Exportables;
