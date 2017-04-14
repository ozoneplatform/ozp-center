'use strict';

var Reflux = require('reflux');
var PaginatedList = require('../utils/PaginatedList');
var ListingActions = require('../actions/ListingActions');

var _paginatedList;

var PaginatedChangeLogByIDStore = Reflux.createStore({

    /**
    * Update local cache when new data is fetched
    **/
    init: function () {
        this.listenTo(ListingActions.fetchAllChangeLogsByIDCompleted, this.onFetchAllChangeLogsByIDCompleted);
    },

    resetChangeLogByIDStore: function () {
        _paginatedList = null;
    },

    onFetchAllChangeLogsByIDCompleted: function (filter, response) {
        var paginatedList = _paginatedList;
        if(paginatedList) {
            paginatedList.receivePage(response);
        } else {
            _paginatedList = new PaginatedList(response);
        }

        this.trigger();
    },

    getChangeLogsByID: function () {
        return _paginatedList;
    }

});

module.exports = PaginatedChangeLogByIDStore;
