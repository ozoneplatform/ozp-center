'use strict';
var React = require('react');
var _ = require('../../../utils/_');
var RadioGroup = require('react-radio-group');
var { UserRole } = require('ozp-react-commons/constants');
var ApprovalStatusClass = require('../../ApprovalStatusClass.jsx');

function filterOption (currentValue, label, value, count, htmlFor, className, iconClass) {
    var badge;
    var statusIcon;

    if(iconClass) {
        statusIcon = <ApprovalStatusClass definedStatus={value} userType={'user'}/>;
    }
    if(iconClass && label==='Needs action') {
        statusIcon = <ApprovalStatusClass definedStatus={'REJECTED'} />;
    }

    if (currentValue === 'all') {
        badge = <strong className="badge">{ count || 0 }</strong>;
    }
    else if (value === currentValue) {
        badge = <strong className="badge">{ count || 0 }</strong>;
    }

    return [
        <input id={htmlFor} key={"input" + htmlFor} type="radio" value={value} />,
        <label htmlFor={htmlFor} key={"label" + htmlFor} className={className}>
            { statusIcon }
            { label }
            { badge }
        </label>,
    ];
}

var ApprovalStatusFilter = React.createClass({

    propTypes: {
        value: React.PropTypes.object.isRequired,
        counts: React.PropTypes.object.isRequired,
        onFilterChanged: React.PropTypes.func.isRequired,
        organizations: React.PropTypes.array,
        tab:React.PropTypes.string
    },

    handleChange: function (evt) {
        var { value } = evt.target;
        if (value === 'all') {
            value = null;
        }
        this.props.onFilterChanged('approval_status', value);
    },

    _renderRadioGroupOptions: function () {

        var counts = this.props.counts;
        var value = this.props.value.approval_status || 'all';

        var components = [
            filterOption(value, 'All', 'all', counts.total, 'all-listings-filter-all', 'label-all', undefined),
            filterOption(value, 'Published', 'APPROVED', counts.APPROVED, 'all-listings-filter-published', 'label-published', true)
        ];

        if (this.props.tab === "MyListings"){
            components.push(
                filterOption(value, 'Needs action', 'REJECTED', counts.REJECTED, 'all-listings-filter-needs-action', 'label-needs-action', true),
                filterOption(value, 'Pending', 'PENDING', counts.PENDING, 'all-listings-filter-pending', 'label-pending', true)
            );
        }
        else if (this.props.role === UserRole.APPS_MALL_STEWARD) {
            components.push(
                filterOption(value, 'Needs action', 'APPROVED_ORG', counts.APPROVED_ORG, 'all-listings-filter-needs-action', 'label-needs-action', true),
                filterOption(value, 'Pending, Org.', 'PENDING', counts.PENDING, 'all-listings-filter-pending', 'label-pending', true),
                filterOption(value, 'Returned', 'REJECTED', counts.REJECTED, 'all-listings-filter-rejected', 'label-rejected', true)
            );
        }
        else if (this.props.role === UserRole.ORG_STEWARD) {
            components.push(
                filterOption(value, 'Needs action', 'PENDING', counts.PENDING, 'all-listings-filter-needs-action', 'label-needs-action', true),
                filterOption(value, 'Org approved', 'APPROVED_ORG', counts.APPROVED_ORG, 'all-listings-filter-pending', 'label-pending', true),
                filterOption(value, 'Returned', 'REJECTED', counts.REJECTED, 'all-listings-filter-rejected', 'label-rejected', true)
            );
        }
        components.push(
            filterOption(value, 'Draft', 'IN_PROGRESS', counts.IN_PROGRESS, 'all-listings-filter-draft', 'label-draft', true),
            filterOption(value, 'Deleted', 'DELETED', counts.DELETED, 'all-listings-filter-deleted', 'label-deleted', true),
            filterOption(value, 'Pending Deletion', 'PENDING_DELETION', counts.PENDING_DELETION, 'all-listings-filter-pending-deletion', 'label-pending-deletion', true)
        );
        return components;
    },

    render: function() {
        var value = this.props.value.approval_status || 'all';
        return (
            <div>
                <h4>State</h4>
                <RadioGroup
                    name="approval-status"
                    value={ value }
                    onChange={ this.handleChange }>
                    { _.flatten(this._renderRadioGroupOptions()) }
                </RadioGroup>
            </div>
        );
    }

});

module.exports = ApprovalStatusFilter;
