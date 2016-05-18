'use strict';

var React = require('react');
var Reflux = require('reflux');
var _ = require('../utils/_');

var ChangeLogs = require('./quickview/ChangeLogs.jsx');
var ListingActions = require('../actions/ListingActions');
var fetchChangeLogs = ListingActions.fetchChangeLogs;
var enableBookmarkedLocal = ListingActions.enableBookmarked;
var disableBookmarkedLocal = ListingActions.disableBookmarked;
var LibraryStore = require('../stores/LibraryStore');
var { addToLibrary, removeFromLibrary } = require('../actions/LibraryActions');
//var browserUrl = window.location.href;

var BookmarkButton = React.createClass({
    mixins: [Reflux.connect(LibraryStore, 'library')],

    propTypes: {
        listing: React.PropTypes.object.isRequired
    },

    getInitialState: function() {
        return {library: [], listing: this.props.listing};
    },

    toggleInLibrary: function (e) {
        var that = this;
        var listing = this.props.listing;

        e.preventDefault();
        e.stopPropagation();

        if (this.inLibrary()) {
            var libId = _.find(this.state.library, function(x) {
                return x.listing.id === that.props.listing.id;
            }).id;

            removeFromLibrary(this.props.listing, libId);
            var newData = {isBookmarked: false};
            this.setState({listing: newData});
            disableBookmarkedLocal.bind(null, listing);
        }
        else {
            addToLibrary(this.props.listing);
            var newData2 = {isBookmarked: true};
            this.setState({listing: newData2});
            enableBookmarkedLocal.bind(null, listing);
        }
    },

    inLibrary: function() {
      if(this.props.listing.id == this.getParameterByName("listing")){
        var testLibrary = !!_.find(this.state.library, e => e.listing.id === this.props.listing.id);
        if(testLibrary || this.props.listing.id.isBookmarked){
          return true;
        }else{
          return false;
        }
      }else{
        return !!_.find(this.state.library, e => e.listing.id === this.props.listing.id);
      }
    },

    getParameterByName: function(name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    },

    componentDidMount: function(){
      $(this.refs.tooltipped.getDOMNode()).tooltip({
        delay: 400
      });
    },

    render: function() {
        var bookmarkBtnStyles = React.addons.classSet({
            'btn btn-default btn-bookmark': true,
            'bookmarked': this.inLibrary()
        });
        var bookmarkIcon =  React.addons.classSet({
            'icon-ribbon-grayDark': !this.inLibrary(),
            'icon-ribbon-filled-yellow': this.inLibrary()
        });

        return (
          <button
            ref="tooltipped"
            data-toggle="tooltip"
            data-placement="top"
            title="Bookmark"
            type="button"
            aria-label={(this.inLibrary()) ? 'This app is Bookmarked' : 'Click to bookmark this app'}
            className={bookmarkBtnStyles}
            onClick={this.toggleInLibrary}>
              <i className={bookmarkIcon}/><span className="hidden-span">Bookmark</span>
          </button>
        );
      }
    });

module.exports = BookmarkButton;
