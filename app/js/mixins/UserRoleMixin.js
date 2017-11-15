'use strict';

var SelfStore = require('ozp-react-commons/stores/SelfStore');

var SystemStore = require('../stores/SystemStore');

var currentUser;
SelfStore.listen((profileData) => {
    currentUser = profileData.currentUser;
});

var transitionToHome = (transition) => {
    window.alert('You are not authorized to view this page.');
    transition.redirect('/');
};

var Admin = {
    statics: {
        willTransitionTo(transition) {
            if (!(currentUser && currentUser.isAdmin())) {
                transitionToHome(transition);
            }
        }
    }
};

var OrgSteward = {
    statics: {

        /* eslint-disable no-unused-vars */
        willTransitionTo(transition, params, query) {
        /* eslint-enable no-unused-vars */
            var { org } = params;
            if (org){
                var organization = SystemStore.getSystem().organizations.filter(function(organization) {
                    return organization.title === org;
                })[0];
                if (organization == undefined){
                    organization = org;
                }else{
                    organization = organization.shortName;
                }
                if (!currentUser.isOrgSteward(organization)) {
                    transitionToHome(transition);
                }
            }
        }
    }
};

module.exports.Admin = Admin;
module.exports.OrgSteward = OrgSteward;
