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
        //depricated
        this.listenTo(ListingActions.fetchStorefrontListingsCompleted,
                this.onStorefrontListingsFetched);
        this.listenTo(ListingActions.fetchFeaturedListingsCompleted,
                (listings)=>{_featured = listings; this.trigger();});
        this.listenTo(ListingActions.fetchMostPopularListingsCompleted,
                (listings)=>{_mostPopular = this.sortRating(listings,"desc"); this.trigger();});
        this.listenTo(ListingActions.fetchRecentListingsCompleted,
                (listings)=>{_newArrivals = listings; this.trigger();});
        this.listenTo(ListingActions.fetchRecommendedListingsCompleted,
                (listings)=>{_recommended = listings; this.trigger();});
        this.listenTo(ListingActions.searchCompleted, this.onSearchCompleted);
        this.listenTo(ListingActions.giveFeedbackCompleted, this.giveFeedbackCompleted);
        this.listenTo(ListingActions.deleteFeedbackCompleted, this.giveFeedbackCompleted);

        this.listenTo(ListingActions.deleteListingCompleted, this.removeListing);
    },

    onStorefrontListingsFetched: function (storefrontListings) {
        _newArrivals = storefrontListings.newArrivals;
        _mostPopular = this.sortRating(storefrontListings.mostPopular,"desc");
        _featured = storefrontListings.featured;
        _recommended = storefrontListings.recommended;

        this.trigger();
    },

    resetMostPopular: function() {
        _mostPopular = this.sortRating(_mostPopular,"desc");
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
        // Sort array alphabetically to keep dataset in the same order each time prior to ordering by ratings
        arr = this.sortAlphabetically(arr);
        arr.sort(function (a, b) {
            if (a.avgRate == b.avgRate) {
                return (a.totalReviews < b.totalReviews) ? -1 : 1;
            } else {
                return (a.avgRate < b.avgRate) ? -1 : 1;
            }
        });

        if (order == "desc") {
            arr.reverse();
        }

        return arr;
    },

    sortMostPopular(order) {
        var me = this;
        var sortOptions = [
            {option: 'Newest', searchParam: '-approved_date', sortMethod: function(){me.sortNewest(_mostPopular);}},
            {option: 'Title: A to Z', searchParam: 'title', sortMethod: function(){me.sortAlphabetically(_mostPopular);}},
            {option: 'Title: Z to A', searchParam: '-title', sortMethod: function(){me.sortAlphabetically(_mostPopular, "desc");}},
            {option: 'Rating: Low to High', searchParam: ['avg_rate', '-total_votes'], sortMethod: function(){me.sortRating(_mostPopular);}},
            {option: 'Rating: High to Low', searchParam: ['-avg_rate', '-total_votes'], sortMethod: function(){me.sortRating(_mostPopular, "desc");}}
        ];

        sortOptions.forEach(function(element) {
            if (order == element.option) {
                element.sortMethod();
            }
        });

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

    giveFeedbackCompleted: function() {
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
        });
    }

});

module.exports = DiscoveryPageStore;
