'use strict';

var Reflux = require('reflux');
var ListingActions = require('../actions/ListingActions');

var _newArrivals = [];
var _mostPopular = [];
var _featured = [];
var _searchResults = [];
var _recommended = [];
var _nextOffset = 0;
var _totalSearchResults = 0;

function getParameterByName(url, name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(url);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var DiscoveryPageStore = Reflux.createStore({

    /**
    * Update local cache when new data is fetched
    **/
    init: function () {
        this.listenTo(ListingActions.fetchStorefrontListingsCompleted,
                this.onStorefrontListingsFetched);

        this.listenTo(ListingActions.searchCompleted, this.onSearchCompleted);

        this.listenTo(ListingActions.deleteListingCompleted, this.removeListing)
    },

    onStorefrontListingsFetched: function (storefrontListings) {
        _newArrivals = storefrontListings.newArrivals;
        _mostPopular = storefrontListings.mostPopular;
        _featured = storefrontListings.featured;
        _recommended = storefrontListings.recommended;

        this.trigger();
    },

    getRecommended: function () {
        return _recommended;
    },

    getNewArrivals: function () {
        return _newArrivals;
    },

    getMostPopular: function () {
        return _mostPopular;
    },

    getFeatured: function () {
        return _featured;
    },

    getNextOffset: function () {
        return _nextOffset;
    },

    sortAlphabetically(arr, order) {
        arr.sort(function (a, b) {
            return (a.title.toUpperCase() < b.title.toUpperCase()) ? -1 : 1;
        });

        if (order == "desc") {
            arr.reverse();
        }

        return arr;
    },

    sortNewest(arr) {
        arr.sort(function (a,b) {
            return new Date(b.approvedDate) - new Date(a.approvedDate);
        });
        return arr;
    },

    sortRating(arr, order) {
        arr.sort(function (a, b) {
            if (a.avgRate == b.avgRate) {
                return (a.totalVotes > b.totalVotes) ? -1 : 1;
            } else {
                if (order == "desc") {
                    return (a.avgRate > b.avgRate) ? -1 : 1;
                } else {
                    return (a.avgRate < b.avgRate) ? -1 : 1;
                }
            }
        });

        return arr;
    },

    sortMostPopular(order) {
        switch (order) {
            case "titleAZ":
                _mostPopular = this.sortAlphabetically(_mostPopular, "asc");
                break;
            case "titleZA":
                _mostPopular = this.sortAlphabetically(_mostPopular, "desc");
                break;
            case "newest":
                _mostPopular = this.sortNewest(_mostPopular);
                break;
            case "ratingLoHi":
                _mostPopular = this.sortRating(_mostPopular, "asc");
                break;
            case "ratingHiLo":
                _mostPopular = this.sortRating(_mostPopular, "desc");
                break;
            default:
        }

        this.trigger();
    },

    onSearchCompleted: function (searchResults) {
        var items = searchResults.getItemAsList();
        _totalSearchResults = searchResults.total();

        // FIXME:  Makes the ugly, but currently accurate, assumption
        // that if a previous link exists then these new results should
        // be appended to the old results.
        if (searchResults.prevLink()) {
            _searchResults.push.apply(_searchResults, items);
        } else {
            _searchResults = items;
        }
        _nextOffset = (searchResults.nextLink()) ?
            getParameterByName(searchResults.nextLink(), "offset") : 0;

        this.trigger();
    },

    getSearchResults: function () {
        return _searchResults;
    },

    getTotalSearchResults: function () {
        return _totalSearchResults;
    },

    removeListing: function(listing) {
        _newArrivals =  _newArrivals.filter(function (item) {
                    return item.id !== listing.id;
                });
        _mostPopular = _mostPopular.filter(function (item) {
                    return item.id !== listing.id;
                });
        _featured = _featured.filter(function (item) {
                    return item.id !== listing.id;
                });
        _recommended = _recommended.filter(function (item) {
                    return item.id !== listing.id;
        })
    }

});

module.exports = DiscoveryPageStore;
