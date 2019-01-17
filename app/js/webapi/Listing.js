'use strict';

var $ = require('jquery');
var humps = require('humps');
var _ = require('../utils/_');
var OzpAnalytics = require('../analytics/ozp-analytics');
var PaginatedResponse = require ('./responses/PaginatedResponse');
var { PAGINATION_MAX } = require('ozp-react-commons/constants');
var { API_URL } = require('ozp-react-commons/OzoneConfig');
require('sweetalert');

var FIELDS = [
    'approvedDate', 'id', 'title', 'description', 'descriptionShort', 'screenshots', 'contacts',
    'totalComments', 'avgRate', 'totalRate1', 'totalRate2', 'totalRate3','totalRate4', 'height',
    'width', 'totalRate5','totalVotes', 'totalReviews', 'state', 'tags', 'tagsObject', 'type','uuid', 'usage_requirements', 'system_requirements', 'singleton',
    'versionName', 'imageLargeUrl', 'imageSmallUrl', 'imageMediumUrl', 'imageXlargeUrl',
    'launchUrl', 'company', 'whatIsNew', 'owners', 'agency', 'agencyShort', 'rejection',
    'isEnabled', 'isExportable', 'categories', 'releaseDate', 'editedDate', 'intents', 'docUrls', 'approvalStatus',
    'isFeatured', 'smallIconId', 'largeIconId', 'bannerIconId', 'featuredBannerIconId',
    'currentRejection', 'isPrivate', 'securityMarking', 'smallIconMarking',
    'largeIconMarking', 'bannerIconMarking', 'featuredBannerIconMarking', 'isBookmarked', 'certIssues', 'feedback',
    'customFields'
];

// These don't have the icons, access_control
var SAVE_FORMAT_FIELDS = [
    'agency', 'approval_status', 'approved_date', 'avg_rate', 'categories', 'contacts',
    'description', 'description_short', 'doc_urls', 'id', 'intents', 'is_enabled', 'is_exportable', 'is_featured',
    'is_private', 'last_activity', 'launch_url', 'listing_type', 'owners', 'required_listings',
    'usage_requirements', 'system_requirements', 'screenshots', 'singleton', 'tags', 'title', 'total_comments', 'total_rate1',
    'total_rate2', 'total_rate3', 'total_rate4', 'total_rate5', 'total_votes', 'total_reviews', 'unique_name',
    'version_name', 'what_is_new', 'small_icon', 'large_icon', 'banner_icon', 'large_banner_icon',
    'security_marking', 'is_bookmarked', 'custom_fields'
];

function Listing (json) {
    if (!(this instanceof Listing)) {
        throw new Error("This object must be created with new");
    }
    //if object is already listing do not try to map listing again
    if (json instanceof Listing)
        return json;
    if (json.isExistingListing ){
        for(var i in json)
            this[i] = json[i];
        return this;
    }

    json = json || {};
    json = humps.camelizeKeys(json);

    FIELDS.forEach((key) => {
        this[key] = json[key];
    });

    function viewingExistingListing(json) {
        // This data comes from the API/listing endpoint
        return json && json.id;
    }

    if (viewingExistingListing(json)) {
        this.isExistingListing = true;
        this.type = json.listingType ? json.listingType.title : "";
        this.categories = _.map(json.categories, 'title') || [];
        this.tags = _.map(json.tags, 'name') || [];
        this.tagsObject = _.map(json.tags) || [];
        this.customFields = _.map(json.customFields) || [];
        this.agency = json.agency ? json.agency.title : json.agencyTitle || "";
        this.agencyShort = json.agency ? json.agency.shortName : json.agencyShortName || "";
        this.owners = _.map(json.owners, function (o) {
            return {displayName: o.displayName,
                    id: o.id,
                    username: o.user ? o.user.username : o.username};
        }) || [];
        this.intents = _.map(this.intents, x => x.action);
        _.map(this.contacts, x => x.type = x.contactType.name);

        this.smallIconId = json.smallIcon ? json.smallIcon.id : "";
        this.imageSmallUrl = json.smallIcon ? json.smallIcon.url : "";
        this.smallIconMarking = json.smallIcon ? json.smallIcon.securityMarking : "";

        this.largeIconId = json.largeIcon ? json.largeIcon.id : "";
        this.imageMediumUrl = json.largeIcon ? json.largeIcon.url : "";
        this.largeIconMarking = json.largeIcon ? json.largeIcon.securityMarking : "";

        this.bannerIconId = json.bannerIcon ? json.bannerIcon.id : "";
        this.imageLargeUrl = json.bannerIcon ? json.bannerIcon.url : "";
        this.bannerIconMarking = json.bannerIcon ? json.bannerIcon.securityMarking : "";

        this.featuredBannerIconId = json.largeBannerIcon ? json.largeBannerIcon.id :  "";
        this.imageXlargeUrl = json.largeBannerIcon ? json.largeBannerIcon.url : "";
        this.featuredBannerIconMarking = json.largeBannerIcon ? json.largeBannerIcon.securityMarking :  "";

        _.map(this.screenshots, x => {
            x.smallImageId = x.smallImage.id;
            x.smallImageUrl = x.smallImage.url;
            x.smallImageMarking = x.smallImage.securityMarking;
            x.largeImageId = x.largeImage.id;
            x.largeImageUrl = x.largeImage.url;
            x.largeImageMarking = x.largeImage.securityMarking;
            delete x.smallImage;
            delete x.largeImage;
        });

        this.uuid = json.uniqueName;

    } else  {
        this.owners = _.map(json.owners, function (o) {
            return {displayName: o.displayName,
                    id: o.id,
                    username: o.username};
        }) || [];
        this.categories = json.categories || [];
        this.tags = json.tags || [];
        this.tagsObject = json.tags || [];
        this.customFields = json.customFields || [];
        this.agency = json.agency || "";
        this.agencyShort = json.agencyShort || "";
        this.intents = json.intents || [];
        this.contacts = this.contacts || [];
        this.type = json.type || "";
        this.title = json.title || "";
    }

    this.customFieldsObject = mapCustomFields(json.customFields);
    this.listingType = json.listingType;

    this.screenshots = this.screenshots || [];
    this.docUrls = this.docUrls || [];
    this.changeLogs = [];
    this.similar = [];
    this.isPartialListing = true;
    this.usage_requirements = json.usageRequirements;
    this.system_requirements = json.systemRequirements;

    return this;
}

function mapCustomFields(customFields) {
    return _.map(customFields, function (obj) {
        return {
            displayName: obj.customField.displayName,
            id: obj.customField.id,
            value: obj.value,
            description: obj.customField.description
        };
    }) || [];
}

Listing.prototype.saveFormat = function() {


    var saveFormat = humps.decamelizeKeys(this);

    // Improperly decamelized
    saveFormat.total_rate1 = saveFormat.total_rate_1;
    saveFormat.total_rate2 = saveFormat.total_rate_2;
    saveFormat.total_rate3 = saveFormat.total_rate_3;
    saveFormat.total_rate4 = saveFormat.total_rate_4;
    saveFormat.total_rate5 = saveFormat.total_rate_5;

    // Differing structure between API and Center
    saveFormat.approved_date = saveFormat.release_date;
    saveFormat.listing_type = {};
    saveFormat.listing_type.title = saveFormat.type;
    saveFormat.categories = _.map(saveFormat.categories, x => { return {"title": x}; });
    saveFormat.custom_fields = _.map(saveFormat.custom_fields, x => { return x; });
    saveFormat.tags = _.map(saveFormat.tags, x => { return {"name": x}; });
    saveFormat.unique_name = saveFormat.uuid;

    saveFormat.owners = _.map(saveFormat.owners, function (o) {
        return {display_name: o.display_name,
                id: o.id,
                user: {username: o.username}};
    });

    if (saveFormat.agency !== "") {
        var agencyTitle = saveFormat.agency;
        saveFormat.agency = {};
        saveFormat.agency.short_name = saveFormat.agency_short;
        saveFormat.agency.title = agencyTitle;
    } else {
        saveFormat.agency = {};
    }

    saveFormat.intents = _.map(saveFormat.intents, x => { return {"action": x}; });

    _.map(saveFormat.contacts, x => {
        x.contact_type = {"name": x.type};
        delete x.type;
    });


    if (saveFormat.image_small_url) {
        saveFormat.small_icon = {};
        saveFormat.small_icon.url = saveFormat.image_small_url;
        saveFormat.small_icon.id = saveFormat.small_icon_id;
        saveFormat.small_icon.security_marking = saveFormat.small_icon_marking;
    }

    if (saveFormat.image_medium_url) {
        saveFormat.large_icon = {};
        saveFormat.large_icon.url = saveFormat.image_medium_url;
        saveFormat.large_icon.id = saveFormat.large_icon_id;
        saveFormat.large_icon.security_marking = saveFormat.large_icon_marking;
    }

    if (saveFormat.image_large_url) {
        saveFormat.banner_icon = {};
        saveFormat.banner_icon.url = saveFormat.image_large_url;
        saveFormat.banner_icon.id = saveFormat.banner_icon_id;
        saveFormat.banner_icon.security_marking = saveFormat.banner_icon_marking;
    }

    if (saveFormat.image_xlarge_url) {
        saveFormat.large_banner_icon = {};
        saveFormat.large_banner_icon.url = saveFormat.image_xlarge_url;
        saveFormat.large_banner_icon.id = saveFormat.featured_banner_icon_id;
        saveFormat.large_banner_icon.security_marking = saveFormat.featured_banner_icon_marking;
    }

    _.map(saveFormat.screenshots, x => {
        if (x.small_image_url) {
            x.small_image = {};
            x.small_image.id = x.small_image_id;
            x.small_image.url = x.small_image_url;
            x.small_image.security_marking = x.small_image_marking;
            delete x.small_image_id;
            delete x.small_image_url;
            delete x.small_image_marking;
        }

        if (x.large_image_url) {
            x.large_image = {};
            x.large_image.id = x.large_image_id;
            x.large_image.url = x.large_image_url;
            x.large_image.security_marking = x.large_image_marking;
            delete x.large_image_id;
            delete x.large_image_url;
            delete x.large_image_marking;
        }
    });

    // New data (to Center) - TODO: Have Center add it for real
    saveFormat.last_activity = { action: 'APPROVED' };
    saveFormat.required_listings = null;

    // Clean up lingering Center-only keys (and impromperly decamelized keys)
    var lingering = _.difference(_.keys(saveFormat), SAVE_FORMAT_FIELDS);
    lingering.map(key => delete saveFormat[key]);

    return saveFormat;
};

function parseList (response) {
    return new PaginatedResponse(response, Listing).getResponse();
}

function parseListToPaginatedResponse (response) {
    return new PaginatedResponse(response, Listing);
}

var delaySearch = (function(){
    var timer = 0;
    return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();

var ListingApi = {

    newListing: function(listingData) {
        return new Listing(listingData);
    },

    getStorefrontListings: function() { //depricated
        return $.getJSON(API_URL + '/api/storefront/').then(
            resp => ({
                featured: _.map(resp.featured, this.newListing),
                newArrivals: _.map(resp.recent, this.newListing),
                mostPopular: _.map(resp.most_popular, this.newListing),
                recommended: _.map(resp.recommended, this.newListing)
            }));
    },

    getFeaturedListings: function() {
        return $.getJSON(API_URL + '/api/storefront/featured/').then(
            resp => {
                return _.map(resp.featured, this.newListing);
            });
    },

    getExportableListings: function() {
        return $.getJSON(API_URL + '/api/storefront/exportable/').then(
            resp => {
                return _.map(resp.exportable, this.newListing);
            });
    },

    getRecentListings: function() {
        return $.getJSON(API_URL + '/api/storefront/recent/').then(
            resp => {
                return _.map(resp.recent, this.newListing);
            });
    },

    getMostPopularListings: function() {
        return $.getJSON(API_URL + '/api/storefront/most_popular/').then(
            resp => {
                return _.map(resp.most_popular, this.newListing);
            });
    },

    getRecommendedListings: function() {
        return $.getJSON(API_URL + '/api/storefront/recommended/').then(
            resp => {
                return _.map(resp.recommended, this.newListing);
            });
    },

    search: function (options) {
        var params = $.param(options, true);
        return $.getJSON(API_URL + '/api/listings/essearch/?' + params).then(
            (response) => {
                if (options.category && options.category.length > 0) {
                    for(var index = 0; index < options.category.length; index++) {
                        OzpAnalytics.trackCategorization('Categorization', options.category[index], response.count);
                    }
                }
                if (options.tag && options.tag.length > 0) {
                    for(var tagIndex = 0; tagIndex < options.tag.length; tagIndex++) {
                        OzpAnalytics.trackCategorization('Tags', options.tag[tagIndex], response.count);
                    }
                }

                delaySearch(function(){
                    if (options.search) {
                        var queryStringNoStar = options.search.replace(/[*]$/,"");
                        if ((options.type && options.type.length > 0) ||
                            (options.category && options.category.length > 0) ||
                            (options.tag && options.tag.length > 0) ||
                            (options.agency && options.agency.length > 0)) {
                            queryStringNoStar = queryStringNoStar + ' (+)';
                        }
                        OzpAnalytics.trackSiteSearch('Application Search', queryStringNoStar, response.count);
                    }
                }, 800);
                response.results = _.map(response.results, this.newListing);
                return response;

            })
            .then(parseListToPaginatedResponse);
    },

    getById: function (id) {
        return $.getJSON(API_URL + '/api/listing/' + id + '/').then(
            (resp) => this.newListing(resp));
    },

    save: function (data) {

        var listing = new Listing(data);
        data = listing.saveFormat();


        var method = data.id ? 'PUT' : 'POST';
        var url = API_URL + '/api/listing/';
        url = data.id ? url + data.id + '/' : url;

        return $.ajax({
            type: method,
            url: url,
            data: JSON.stringify(data),
            dataType: 'json',
            contentType: 'application/json'
        }).then(
            (response) => this.newListing(response)
        ).fail(response => {
            sweetAlert({
              title: "Could not modify listing!",
              text: "This listing requires attention, please continue to the edit page to fix errors!",
              type: "error",
              confirmButtonColor: "#DD6B55",
              confirmButtonText: "close",
              closeOnConfirm: true,
              html: false
            });
        });
    },

    del: function (id, description) {
        return $.ajax({
            type: 'DELETE',
            data: { description: description },
            url: API_URL + '/api/listing/' + encodeURIComponent(id) + '/'
        });
    },

    getChangeLogs: function (id, url, options) {
        if(!_.isString(url)) {
                url = API_URL + '/api/listing/' + id + '/activity/?' + $.param(options);
        }

        return $.getJSON(url).then(
            (response) => new PaginatedResponse(humps.camelizeKeys(response)));
    },

    fetchReviews: function (id) {
        return $.getJSON(API_URL + '/api/listing/' + id + '/review/?offset=0&limit=' + PAGINATION_MAX).then(
            (response) => new PaginatedResponse(humps.camelizeKeys(response)).getItemAsList());
    },

    saveReview: function (listingId, review) {
        var url = `${API_URL}/api/listing/${listingId}/review/`,
            method = 'POST';
        if (review.id) {
            method = 'PUT';
            url += `${review.id}/`;
            review.author = undefined;
        }
        // default rate to 1 if not specified
        if (!review.rate) {
            review.rate = 1;
        }
        review.listing= listingId;

        return $.ajax({
            type: method,
            url: url,
            data: JSON.stringify(review),
            dataType: 'json',
            contentType: 'application/json'
        });
    },

    deleteReview: function (listingId, reviewId) {
        return $.ajax({
            type: 'DELETE',
            url: `${API_URL}/api/listing/${listingId}/review/${reviewId}/`,
            dataType: 'json',
            contentType: 'application/json'
        });
    },

    saveReviewResponse: function (parentId, review) {
        var url = `${API_URL}/api/listing/${review.listing.id}/review/`,
            method = 'POST';

        // default rate to 1 if not specified
        if (!review.rate) {
            review.rate = 1;
        }

        review.review_parent = review.review.id;
        review.listing = review.listing.id;

        if (review.parentReview) {
            method = 'PUT';
            url += `${review.reviewId}/`;
            review.review_parent = review.parentReview.id;
        }

        return $.ajax({
            type: method,
            url: url,
            data: JSON.stringify(review),
            dataType: 'json',
            contentType: 'application/json'
        });
    },

    getOwnedListings: function (profile) {
        var url = API_URL + '/api/self/listing/';

        if (profile) {
            url = url + profile.id + '/';
        }
        return $.getJSON(url).then(
            (resp) => parseList(_.map(resp, this.newListing)));
    },

    rejectListing: function (id, description) {
        return $.ajax({
            type: 'POST',
            url: API_URL + '/api/listing/' + id + '/rejection/',
            data: JSON.stringify({description: description}),
            dataType: 'json',
            contentType: 'application/json'
        });
    },

    pendDeleteListing: function (id, description) {
        return $.ajax({
            type: 'POST',
            url: API_URL + '/api/listing/' + id + '/pendingdeletion/',
            data: JSON.stringify({description: description}),
            dataType: 'json',
            contentType: 'application/json'
        });
    },

    getAllListings: function (url, options) {
        if (!_.isString(url)) {
            url = API_URL + '/api/listing/?' + $.param(options);
        }

        return $.getJSON(url).then(
            (response) => {
                response.results = _.map(response.results, this.newListing);
                return new PaginatedResponse(response, Listing);
            });
    },

    getCounts: function () {
        var url = API_URL + '/api/metadata/';
        return $.getJSON(url).then((response) => {
            var counts = _.reduce(response.agencies,
                                  (result, o) => {
                                      result[o.id] = o.listing_count;
                                      return result;
                                  }, {});
            return counts;
        });
    },

    getAllChangeLogs: function (profile, url, options) {
        if(!_.isString(url)) {
            if (profile.isAdmin() || profile.highestRole === 'ORG_STEWARD' ){
                url = API_URL + '/api/listings/activity/?' + $.param(options);
            } else {
                url = API_URL + '/api/self/listings/activity/?' + $.param(options);
            }
        }
        return $.getJSON(url).then(
            (response) => new PaginatedResponse(humps.camelizeKeys(response)));
    },

    getSimilarListings: function(listingId) {
        var url =`${API_URL}/api/listing/${listingId}/similar/`;

        return $.getJSON(url).then(
            (resp) => _.map(resp, this.newListing));
    },

    giveFeedback: function(id, thumbs) {
        return $.ajax({
            type: 'POST',
            url: API_URL + '/api/listing/' + id + '/feedback/',
            data: JSON.stringify({feedback: thumbs}),
            dataType: 'json',
            contentType: 'application/json'
        });
    },

    deleteFeedback: function(id) {
        return $.ajax({
            type: 'DELETE',
            url: API_URL + '/api/listing/' + id + '/feedback/' + id + '/',
            contentType: 'application/json'
        });
    },

    getCustomFieldsForType: function(type_id) {
        return $.ajax({
            type: 'GET',
            url: API_URL + '/api/listingtype/' + type_id + '/',
            contentType: 'application/json'
        });
    }
};

module.exports = {
    Listing: Listing,
    ListingApi: ListingApi,
    FIELDS: FIELDS,
    SAVE_FORMAT_FIELDS: SAVE_FORMAT_FIELDS
};
