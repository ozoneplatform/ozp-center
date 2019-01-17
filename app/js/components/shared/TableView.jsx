'use strict';

var React = require('react');
var { PropTypes } = React;

var { Navigation } = require('react-router');
var ActiveState = require('../../mixins/ActiveStateMixin');

var TableView = React.createClass({
    mixins: [ Navigation, ActiveState ],

    propTypes: {
        onSearch: PropTypes.func.isRequired,
        onSort: PropTypes.func.isRequired,
        sortKey: PropTypes.string.isRequired,
        searchKey: PropTypes.string.isRequired,
        saveKey: PropTypes.string.isRequired,
    },

    onSearch: function (event) {
        this.props.onSearch(event.target.value);
    },

    clearSearch: function () {
        this.props.onSearch("");
    },

    onSort: function (key) {
        if (this.props.sortKey === key) {
            this.props.onSort("!"+key);
        } else {
            this.props.onSort(key);
        }
    },

    renderHeaderRow: function (columns) {
        var me = this;
        var activeRoutePath = this.getActiveRoutePath(),
            returnHref = this.makeHref(activeRoutePath, this.getParams(), {}).substring(1),
            tableColumnSettingsHref = this.makeHref(activeRoutePath, this.getParams(), {
                centerListingsSettings: true,
                saveKey: this.props.saveKey,
                returnPath: returnHref
            }),
            tableSettings = (<a href={tableColumnSettingsHref} className="pull-right" title="settings"><i className="icon-cog"/></a>);
        var headerColumns = columns.map( function (column) {
            return me.renderHeaderColumn(column);
        });
        return (
            <thead>
                <tr className="TableHeader" key="header">
                    <th className="searchHeader" colSpan={columns.length}>
                        {tableSettings}
                        <span className="tableViewSearchBox">
                            <i className="icon-search"/>
                            <input className="tableViewSearchBar" ref="searchInput" onChange={this.onSearch} placeholder="search..." value={this.props.searchKey}></input>
                            <span onClick={this.clearSearch}><i className="icon-cross-14-grayDark clearButton"/></span>
                        </span>
                    </th>
                </tr>

                <tr className = "TableHeader" key="header2">
                    {headerColumns}
                </tr>
            </thead>);
    },

    renderHeaderColumn: function (type) {
        var nameIcon, ownerIcon, orgIcon, statusIcon, updatedIcon, enabledIcon, featuredIcon;
        if (this.props.sortKey==="name") { nameIcon = <i className="headerSortIcon icon-caret-down-14-blueDark"/>; }
        if (this.props.sortKey==="!name") { nameIcon = <i className="headerSortIcon icon-caret-up-blueDark"/>; }
        if (this.props.sortKey==="owner") { ownerIcon = <i className="headerSortIcon icon-caret-down-14-blueDark"/>; }
        if (this.props.sortKey==="!owner") { ownerIcon = <i className="headerSortIcon icon-caret-up-blueDark"/>; }
        if (this.props.sortKey==="organization") { orgIcon = <i className="headerSortIcon icon-caret-down-14-blueDark"/>; }
        if (this.props.sortKey==="!organization") { orgIcon = <i className="headerSortIcon icon-caret-up-blueDark"/>; }
        if (this.props.sortKey==="status") { statusIcon = <i className="headerSortIcon icon-caret-down-14-blueDark"/>; }
        if (this.props.sortKey==="!status") { statusIcon = <i className="headerSortIcon icon-caret-up-blueDark"/>; }
        if (this.props.sortKey==="updated") { updatedIcon = <i className="headerSortIcon icon-caret-down-14-blueDark"/>; }
        if (this.props.sortKey==="!updated") { updatedIcon = <i className="headerSortIcon icon-caret-up-blueDark"/>; }
        if (this.props.sortKey==="enabled") { enabledIcon = <i className="headerSortIcon icon-caret-down-14-blueDark"/>; }
        if (this.props.sortKey==="!enabled") { enabledIcon = <i className="headerSortIcon icon-caret-up-blueDark"/>; }
        if (this.props.sortKey==="featured") { featuredIcon = <i className="headerSortIcon icon-caret-down-14-blueDark"/>; }
        if (this.props.sortKey==="!featured") { featuredIcon = <i className="headerSortIcon icon-caret-up-blueDark"/>; }
        if (this.props.sortKey==="exportable") { exportableIcon = <i className="headerSortIcon icon-caret-down-14-blueDark"/>; }
        if (this.props.sortKey==="!exportable") { exportableIcon = <i className="headerSortIcon icon-caret-up-blueDark"/>; }

        switch (type) {
        case "name":
            return <th className="titleColumn" key="name" onClick={this.onSort.bind(this, "name")}>Name {nameIcon}</th>;
        case "owner":
            return <th className="ownersColumn" key="owner" onClick={this.onSort.bind(this, "owner")}>Owner {ownerIcon}</th>;
        case "org":
            return <th className="organizationColumn" key="org" onClick={this.onSort.bind(this, "organization")}>Organization {orgIcon}</th>;
        case "comments":
            return <th className="commentsColumn" key="comments">Comments</th>;
        case "status":
            return <th className="statusColumn" key="status" onClick={this.onSort.bind(this, "status")}>Status {statusIcon}</th>;
        case "updated":
            return <th className="updatedColumn" key="updated" onClick={this.onSort.bind(this, "updated")}>Updated {updatedIcon}</th>;
        case "enabled":
            return <th className="enabledColumn" key="enabled" onClick={this.onSort.bind(this, "enabled")}>Enabled {enabledIcon}</th>;
        case "featured":
            return <th className="featuredColumn" key="featured" onClick={this.onSort.bind(this, "featured")}>Featured {featuredIcon}</th>;
        case "exportable":
            return <th className="exportableColumn" key="exportable" onClick={this.onSort.bind(this, "exportable")}>Exportable {exportableIcon}</th>;
        case "actions":
            return <th className="actionsColumn" key="actions">Actions</th>;
        case "buffer":
            return <th className="bufferColumn" key="buffer"/>;
        }
    },

    renderTableRows: function (length) {
        var { children } = this.props;
        if (children && children.length > 0) {
            return {children};
        }
        else {
            return (
                <tr>
                    <td className="tableView-empty" colSpan={length} style={{marginTop: 0}}>No results found!</td>
                </tr>
            );
        }
    },

    render: function () {
        var columns = sessionStorage.getItem(this.props.saveKey);
        if (columns) {
            columns = columns.split(',');
        } else {
            columns = ["name", "owner", "comments", "status", "updated", "enabled", "featured", "exportable", "actions", "buffer"];
            sessionStorage.setItem(this.props.saveKey, columns);
        }

        return (
            <table className="ListingManagement-TableView">
                { this.renderHeaderRow(columns) }
                <tbody>
                    { this.renderTableRows(columns.length) }
                </tbody>
            </table>
        );
    }
});

module.exports = TableView;
