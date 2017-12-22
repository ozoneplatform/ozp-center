'use strict';

var React = require('react');
var Router = require('react-router');

var PaginatedListingsStore = require('../../../stores/PaginatedListingsStore');
var UnpaginatedListingsStore = require('../../../stores/UnpaginatedListingsStore');
var Sidebar = require('../shared/Sidebar.jsx');
var ApprovalStatusFilter = require('../shared/ApprovalStatusFilter.jsx');
var SystemStateMixin = require('../../../mixins/SystemStateMixin');
var SelfStore = require('ozp-react-commons/stores/SelfStore');
var _ = require('../../../utils/_');
var LoadMore = require('../shared/LoadMore.jsx');
var TableView = require('../shared/TableView.jsx');

var MyListings = React.createClass({

    mixins: [
        SystemStateMixin,
        Router.State
    ],

    componentWillMount: function () {
        this.addOwnerToFilter();
    },

    getInitialState: function () {
        var useTableView = JSON.parse(sessionStorage.getItem('myListings-toggleView'));
        return {
            counts: {},
            filter: this.getQuery(),
            tableView: useTableView
        };
    },

    onFilterChanged: function (key, value) {
        this.state.filter[key] = value;
        this.setState({
            filter: this.state.filter
        });
        if(this.refs.loadMore) {
            this.refs.loadMore.clear();
            this.refs.loadMore.initLoad();
        }
        if(this.state.tableView){
            this.state.filter.offset = 0;
            w2ui.grid.offset = 0;
            UnpaginatedListingsStore.filterChange(this.state.filter);
        } else {
            PaginatedListingsStore.filterChange(this.state.filter);
        }
    },

    onViewToggle: function (event) {
        event.preventDefault();
        sessionStorage.setItem("myListings-toggleView", !this.state.tableView);
        this.setState({
            tableView: !this.state.tableView
        });
    },

    onCountsChanged: function (counts) {
        this.setState({
            counts: counts
        });
    },

    onSortChanged: function (sortOption) {
        this.onFilterChanged('ordering', sortOption.searchParam);
    },

    addOwnerToFilter: function(){
        var profile = SelfStore.getDefaultData().currentUser;
        this.state.filter['owners_id'] = profile.id;
        this.setState({
            filter: this.state.filter
        });
    },

    renderListings: function () {
        if (this.state.tableView === true) {
            return (
                <TableView className="ListingsManagement__TableView"
                    filter={this.state.filter} onCountsChanged={this.onCountsChanged} tableName="MyListings_Listings"
                    isAdmin={false} showOrg={false}></TableView>
            );
        } else {
            return (
                <LoadMore ref="loadMore" className="ListingsManagement__LoadMore col-xs-9 col-lg-10 all"
                    filter={this.state.filter} onCountsChanged={this.onCountsChanged}
                    onSortChanged={this.onSortChanged}></LoadMore>
                );
            }
        },

        render: function () {
            var sidebarFilterOptions = {
                tab: "MyListings",
                value: this.state.filter,
                counts: this.state.counts,
                onFilterChanged: this.onFilterChanged,
                organizations: this.state.system.organizations || []
            };
            var toggleSwitch = (this.state.tableView===true) ?
            <span className="switchBox" onClick={this.onViewToggle}>
                <span className="switch-white" title="Grid view">
                    <i className="icon-grid-grayDark"/>
                </span>
                <span className="switch-blueDark" title="Table view">
                    <i className="icon-align-justify-white"/>
                </span>
            </span> :
            <span className="switchBox" onClick={this.onViewToggle}>
                <span className="switch-blueDark" title="Grid view">
                    <i className="icon-grid-white"/>
                </span>
                <span className="switch-white" title="Table view">
                    <i className="icon-align-justify-grayDark"/>
                </span>
            </span> ;
            return this.transferPropsTo (
                <div className="AllListings row">
                    <div className="Listings__Sidebar col-xs-3 col-lg-2">
                        <Sidebar>
                            {toggleSwitch}
                            <ApprovalStatusFilter { ...sidebarFilterOptions } />
                        </Sidebar>
                    </div>
                    { this.renderListings() }
                </div>
            );
        }
});

module.exports = MyListings;
