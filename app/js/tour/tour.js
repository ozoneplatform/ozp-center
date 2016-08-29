'use strict';
var ProfileSearchActions = require('../actions/ProfileSearchActions');
var $ = require('jquery');

var ObjectDB = require('object-db');
var tourDB = new ObjectDB('ozp_tour').init();
console.log(tourDB);

// Setup our LocalstorageDB we will use this to talk between Center,
// Webtop and Hud tours.
//var tourDB = new ObjectDB('ozp_tour').init({
if (typeof tourDB.db.data.center === 'undefined') {
  tourDB.set({
    center: {
      ran: false,
      startCenterTour: false
    }
  });
}
console.dir(tourDB);


var { globalTour, centerTour } = require('./');
var centerStatus = tourDB.get('center');
console.dir(centerStatus);

var initTour = function() {
  // If tour has never run before, start it.
  if(!centerStatus.ran) {
    centerTour.init();
    centerTour.start();
  }
};

ProfileSearchActions.tourCheck.listen(() => {
  // If we close the tour, remember to not show the tour again.
  $(document).on('click', '#end-tour-btn', function() {
    tourDB.set({
      center: {
        ran: true
      },
      center_ran:true
    });
  });

  initTour();
});

$(document).on('click', '#tour-start', function(e){
  e.preventDefault();
  centerTour.restart().goTo(0);
});
