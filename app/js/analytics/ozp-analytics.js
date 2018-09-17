'use strict';
var {PIWIK_ANALYTICS} = require('ozp-react-commons/OzoneConfig');

module.exports = {
    trackEvent: function (label, data, agency) {
        if (PIWIK_ANALYTICS) {
            window._paq.push(['trackEvent', label, data, agency]);
        }
    },

    trackCategorization: function (label, category, total) {
        if (PIWIK_ANALYTICS) {
            window._paq.push(['trackEvent', label, category, total]);
        }
    },

    trackSiteSearch: function (label, query, total) {
        if (PIWIK_ANALYTICS) {
            query = query.toLowerCase();
            window._paq.push(['trackSiteSearch', query, label, total]);
        }
    },

    trackListingCreation: function(listingName, agency){
        if (PIWIK_ANALYTICS) {
            window._paq.push(['trackEvent', 'Listing Creation', listingName, agency]);
        }
    },

    trackListingOrgApproval: function(listingName, agency){
        if (PIWIK_ANALYTICS) {
            window._paq.push(['trackEvent', 'Listing Org Approval', listingName, agency]);
        }
    },
    trackListingApproval: function(listingName, agency){
        if (PIWIK_ANALYTICS) {
            window._paq.push(['trackEvent', 'Listing Approval', listingName, agency]);
        }
    },

    trackListingReview: function(listingName, agency){
        if (PIWIK_ANALYTICS) {
            window._paq.push(['trackEvent', 'Listing Review', listingName, agency]);
        }
    },

    trackListingReviewView: function(listingName, agency){
        if (PIWIK_ANALYTICS) {
            window._paq.push(['trackEvent', 'Listing Review View', listingName, agency]);
        }
    },

    trackRecommender: function(type, application){
        if (PIWIK_ANALYTICS) {
            window._paq.push(['trackEvent', type, application]);
        }
    },

    trackFeedback: function(feedback, application){
        if (PIWIK_ANALYTICS) {
            window._paq.push(['trackEvent', 'Recommender Feedback', feedback, application]);
        }
    }
};
