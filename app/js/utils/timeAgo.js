'use strict';

module.exports = function timeAgo (date) {
    var originalDate = date;
    date = date.replace('+0000', 'Z');
    date = new Date(date).getTime();
    var timeDiff = (Date.now() - date) / 1000;
    var timePassed, quantity;

    if(timeDiff < 60) {
        quantity = 'second';
        timePassed = timeDiff;
    }
    timeDiff /= 60;
    if(timeDiff < 60 && !timePassed) {
        quantity = 'minute';
        timePassed = timeDiff;
    }
    timeDiff /= 60;
    if(timeDiff < 24 && !timePassed) {
        quantity = 'hour';
        timePassed = timeDiff;
    }
    timePassed = Math.round(timePassed);

    if (timeDiff > 24) {
        quantity = '';
        var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        timePassed = originalDate.split('T')[0];
        var formattedDate = `${mS[parseInt(timePassed.split('-')[1])]} ${timePassed.split('-')[2]}, ${timePassed.split('-')[0]}`;
        timePassed = formattedDate;
    }


    if(timePassed === 1) {
        if(quantity === 'hour') {
            return 'an ' + quantity + ' ago';
        }
        return 'a ' + quantity + ' ago';
    }

    if (quantity && quantity.length) {
      return timePassed + ' ' + quantity + 's ago';
    } else {
      return timePassed;
    }
};
