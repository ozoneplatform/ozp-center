'use strict';

var { ListingApi } = require('../webapi/Listing');
var _ = require('../utils/_');
var { PAGINATION_MAX } = require('ozp-react-commons/constants');
var OzpAnalytics = require('../analytics/ozp-analytics');
var ListingActions = require('../actions/ListingActions');
var PaginatedListingsStore = require('../stores/PaginatedListingsStore');
var UnpaginatedListingsStore = require('../stores/UnpaginatedListingsStore');

require('sweetalert');

function updateListingProperty(propName, value, listing) {
    var data = _.cloneDeep(listing);
    data[propName] = value;
    ListingActions.save(data);
}

var setEnabled = updateListingProperty.bind(null, 'isEnabled');
var setEnabledBookmarked = updateListingProperty.bind(null, 'isBookmarked');

ListingActions.fetchAllListings.listen(function (filter) {
    var paginatedList = PaginatedListingsStore.getListingsByFilter(filter),
        opts = {},
        nextLink;

    if (paginatedList) {
        paginatedList.expectPage();
        nextLink = paginatedList.nextLink;
    }
    else {
        // remove undefined values
        _.forOwn(filter || {}, function (value, key) {
            if(value !== null) {
                opts[key] = value;
            }
        });

        _.assign(opts, {
            offset: 0,
            limit: PAGINATION_MAX
        });
    }

    var tmpPartial = _.partial(ListingActions.fetchAllListingsCompleted, _.clone(filter));
    ListingApi
        .getAllListings(nextLink, opts)
        .then(tmpPartial);
});

ListingActions.fetchAllListingsAtOnce.listen(function (filter) {
    var unpaginatedList = UnpaginatedListingsStore.getListingsByFilter(filter),
        opts = {},
        nextLink;

    if (unpaginatedList) {
        unpaginatedList.expectPage();
        nextLink = unpaginatedList.nextLink;
    }
    else {
        // remove undefined values
        _.forOwn(filter || {}, function (value, key) {
            if(value !== null) {
                opts[key] = value;
            }
        });

        _.assign(opts, {
            offset: filter.offset || 0,
            limit: filter.limit || 999
        });
    }

    var tmpPartial = _.partial(ListingActions.fetchAllListingsAtOnceCompleted, _.clone(filter));
    ListingApi
        .getAllListings(nextLink, opts)
        .then(tmpPartial);
});

ListingActions.fetchCounts.listen(function () {
    ListingApi
        .getCounts()
        .then(_.partial(ListingActions.fetchCountsCompleted));
});

ListingActions.fetchAllChangeLogs.listen(function (profile, filter) {

    var PaginatedChangeLogStore = require('../stores/PaginatedChangeLogStore');

    var paginatedList = PaginatedChangeLogStore.getChangeLogs(),
        opts = {},
        nextLink;

    if (paginatedList) {
        paginatedList.expectPage();
        nextLink = paginatedList.nextLink;
    }
    else {
        _.assign(opts, {
            offset: 0,
            limit: PAGINATION_MAX
        });
    }

    ListingApi
        .getAllChangeLogs(profile, nextLink, opts)
        .then(function (response) {
            ListingActions.fetchAllChangeLogsCompleted(filter, response);
        });
});

ListingActions.fetchStorefrontListings.listen(function() { //depricated
    ListingApi.getStorefrontListings().then(ListingActions.fetchStorefrontListingsCompleted);
});

ListingActions.fetchFeaturedListings.listen(function() {
    ListingApi.getFeaturedListings()
        .then(ListingActions.fetchFeaturedListingsCompleted)
        .fail(ListingActions.fetchFeaturedListingsFailed);
});

ListingActions.fetchRecentListings.listen(function() {
    ListingApi.getRecentListings()
        .then(ListingActions.fetchRecentListingsCompleted)
        .fail(ListingActions.fetchRecentListingsFailed);
});

ListingActions.fetchMostPopularListings.listen(function() {
    ListingApi.getMostPopularListings()
        .then(ListingActions.fetchMostPopularListingsCompleted)
        .fail(ListingActions.fetchMostPopularListingsFailed);
});

ListingActions.fetchRecommendedListings.listen(function() {
    ListingApi.getRecommendedListings()
    .then(ListingActions.fetchRecommendedListingsCompleted)
    .fail(ListingActions.fetchRecommendedListingsFailed);
});

ListingActions.fetchById.listen(function (id) {
    ListingApi.getById(id).then(ListingActions.fetchByIdCompleted);
});

(function() {
    var mostRecentSearch;

    /**
     * Add *'s to all of the non-quoted terms that don't already end in a *
     */
    function processQuery(queryString) {
        var matches = queryString && queryString.match(/"[^"]*"|\S+/g),
            processedMatches = matches && matches.map(
                m => /[""\*]$/.test(m) ? m : m + '*'
            );

        return processedMatches && processedMatches.join(' ');
    }

    ListingActions.search.listen(function (options) {
        var apiOptions = Object.assign({}, options);

        mostRecentSearch = apiOptions;

        ListingApi.search(apiOptions)
            .then(function(searchResults) {
                //drop out-of-order results
                if (_.isEqual(mostRecentSearch, apiOptions)) {
                    ListingActions.searchCompleted(searchResults);
                }
        });
    });
})();

ListingActions.fetchChangeLogs.listen(function (listingId, filter) {
  var PaginatedChangeLogByIDStore = require('../stores/PaginatedChangeLogByIDStore');

  var paginatedList = PaginatedChangeLogByIDStore.getChangeLogsByID(),
      opts = {},
      nextLink;

  if (paginatedList) {
      paginatedList.expectPage();
      nextLink = paginatedList.nextLink;
  }
  else {
      _.assign(opts, {
          offset: 0,
          limit: PAGINATION_MAX
      });
  }

  ListingApi
      .getChangeLogs(listingId, nextLink, opts)
      .then(function (response) {
          ListingActions.fetchAllChangeLogsByIDCompleted(filter, response);
      });
});


ListingActions.fetchOwnedListings.listen(function (profile) {
    ListingApi.getOwnedListings(profile).then(ListingActions.fetchOwnedListingsCompleted);
});

ListingActions.fetchSimilar.listen(function (listingId) {
    ListingApi.getSimilarListings(listingId)
        .then(ListingActions.fetchSimilarCompleted.bind(null, listingId));
})


ListingActions.fetchReviews.listen(function (listing) {
    ListingApi.fetchReviews(listing.id)
        .then(ListingActions.fetchReviewsCompleted.bind(null, listing.id));
});

ListingActions.saveReview.listen(function (listing, review) {
    ListingApi.saveReview(listing.id, review)
        .then(function (response) {
            ListingActions.fetchById(listing.id);
            ListingActions.fetchReviews(listing);
            ListingActions.saveReviewCompleted(listing, response);
            OzpAnalytics.trackListingReview(listing.title, listing.agencyShort);
        })
        .fail(ListingActions.saveReviewFailed);
});

ListingActions.deleteReview.listen(function (listing, review) {
    ListingApi.deleteReview(listing.id, review.id)
        .then(function () {
            ListingActions.fetchById(listing.id);
            ListingActions.fetchReviews(listing);
            ListingActions.deleteReviewCompleted(listing, review);
        })
        .fail(_.partial(ListingActions.deleteReviewFailed, listing, review));
});

ListingActions.saveReviewResponse.listen(function (listing, review) {
    ListingApi.saveReviewResponse(listing.id, review)
        .then(function (response) {
            ListingActions.fetchById(listing.id);
            ListingActions.fetchReviews(listing);
            ListingActions.saveReviewResponseCompleted(listing, response);
            OzpAnalytics.trackListingReview(listing.title, listing.agencyShort);
        })
        .fail(function(response) {
            ListingActions.saveReviewResponseFailed(response);
        });
});

ListingActions.launch.listen(function (listing) {
    var application;

    OzpAnalytics.trackEvent('Applications', listing.title, listing.agencyShort);

    setTimeout(function() {
        application = window.open(listing.launchUrl);

        if (application == null || typeof(application) == 'undefined') {
            swal({
                title: "Pop-up blocked",
                text: "Click launch to open application manually.",
                type: "warning",
                showCancelButton: true,
                confirmButtonText: "Launch Application",
                cancelButtonText: "Cancel",
                closeOnConfirm: true,
                closeOnCancel: true
            },
            function(isConfirm){
                if (isConfirm) {
                    console.log("Confirmed");
                    window.open(listing.launchUrl);
                }
            });
            console.log("popup blocked");
        }
    }, 3000);
});

ListingActions.save.listen(function (data) {
    var isNew = !data.id;

    if (isNew) { OzpAnalytics.trackListingCreation(data.title, data.agency); }

    if (/\s/g.test(data.launchUrl)) { data.launchUrl = data.launchUrl.replace(/ /g,"%20"); }

    ListingApi
        .save(data)
        .then(ListingActions.saveCompleted.bind(null, isNew))
        .then(ListingActions.listingChangeCompleted(data))
        .fail(ListingActions.saveFailed);
});

ListingActions.reject.listen(function (listingId, description) {
    ListingApi.rejectListing(listingId, description)
        .then(ListingActions.rejectCompleted)
        .then(ListingActions.listingChangeCompleted);
});

ListingActions.enable.listen(setEnabled.bind(null, true));
ListingActions.disable.listen(setEnabled.bind(null, false));

ListingActions.enableBookmarked.listen(setEnabledBookmarked.bind(null, true));
ListingActions.disableBookmarked.listen(setEnabledBookmarked.bind(null, false));

ListingActions.pendingDelete.listen(function (listing) {
    //OzpAnalytics.trackListingApproval(listing.title, listing.agencyShort);
    var data = _.cloneDeep(listing);
    data.approvalStatus = "PENDING_DELETION";
    data.isEnabled=false;
    ListingApi.save(data)
    .then(ListingActions.pendingDeleteCompleted.bind(null, data))
    .then(ListingActions.listingChangeCompleted(data))
    .fail(ListingActions.pendingDeleteFailed)
});

ListingActions.approve.listen(function (listing) {
    OzpAnalytics.trackListingApproval(listing.title, listing.agencyShort);
    updateListingProperty('approvalStatus', 'APPROVED', listing);
});

ListingActions.approveByOrg.listen(function (listing) {
    OzpAnalytics.trackListingOrgApproval(listing.title, listing.agencyShort);
    updateListingProperty('approvalStatus', 'APPROVED_ORG', listing);
});

ListingActions.undelete.listen(function (listing) {
    //OzpAnalytics.trackListingApproval(listing.title, listing.agencyShort);
    //updateListingProperty('approvalStatus', 'PENDING', listing);
    var data = _.cloneDeep(listing);
    data.approvalStatus = "PENDING";
    data.isEnabled=true;
    ListingApi.save(data)
    .then(ListingActions.undeleteCompleted.bind(null, data))
    .then(ListingActions.listingChangeCompleted(data))
    .fail(ListingActions.pendingDeleteFailed)
});

ListingActions.deleteListing.listen(function (listing) {
    listing.isEnabled = false;
    listing.status = 'DELETED';
    listing.approvalStatus = 'DELETED';
    ListingApi.del(listing.id)
        .then(ListingActions.deleteListingCompleted.bind(null, listing))
        .then(ListingActions.listingChangeCompleted(listing))
        .fail(ListingActions.deleteListingFailed);

});

ListingActions.setFeatured.listen(updateListingProperty.bind(null, 'isFeatured'));
