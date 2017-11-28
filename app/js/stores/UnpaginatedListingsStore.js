'use strict';

var Reflux = require('reflux');
var PaginatedList = require('../utils/PaginatedList');
var ListingActions = require('../actions/ListingActions');

var _unpaginatedListByFilter = {};
var filterKey = function (filter) {
    //sort filter keys for accurate comparison
    var props = [];
    var result = {};
    for(var propName in filter){
        if (filter.hasOwnProperty(propName)){
            props.push(propName);
        }
    }
    props.sort();
    for (var index in props){
        var key = props[index];
        result[key] = filter[key];
    }
    return JSON.stringify(result);
};

var UnpaginatedListingsStore = Reflux.createStore({

    /**
    * Update local cache when new data is fetched
    **/
    init: function () {
        this.listenTo(ListingActions.fetchAllListingsAtOnceCompleted, this.onFetchAllListingsAtOnceCompleted);
        this.listenTo(ListingActions.listingChangeCompleted, this.onListingChangeCompleted);
    },

    onFetchAllListingsAtOnceCompleted: function (filter, response) {
        var key = filterKey(filter);
        var page = new PaginatedList (response);
     
        _unpaginatedListByFilter[key] = page;
        this.trigger();
    },

    onListingChangeCompleted: function (data) {
        for (var key in _unpaginatedListByFilter){
            var list = _unpaginatedListByFilter[key].data;
            for (var listing in list){
                var entry = list[listing];
                if (entry.id == data.id){
                    list[listing] = data;
                    this.trigger();
                    return;
                }
            }
        }
    },

    filterChange: function (filter) {
        var listings = this.getListingsByFilter(filter);
        if ( listings){
            this.trigger();
        } else {
            ListingActions.fetchAllListingsAtOnce(filter);
        }
    },

    getListingsByFilter: function (filter) {
        //consolidate paged results into one big list!
        var shouldContinue = true;
        var clonedFilter = JSON.parse(JSON.stringify(filter));
        var offset = 0;
        var data = [];
        var currentPage = _unpaginatedListByFilter[filterKey(filter)];
        while (shouldContinue && offset <= filter.offset){
            clonedFilter.offset = offset;
            offset += filter.limit;
            var key = filterKey(clonedFilter);
            var results = _unpaginatedListByFilter[key];
            if(results && results.data.length){
                data = data.concat(results.data);
            }
            else{
                shouldContinue = false;
            }
        }
        var clonedResult;
        if(currentPage)
            clonedResult = JSON.parse(JSON.stringify(currentPage));

        if(clonedResult && data.length){
            clonedResult.data = data;
        }
        return clonedResult;
    }
});

module.exports = UnpaginatedListingsStore;
