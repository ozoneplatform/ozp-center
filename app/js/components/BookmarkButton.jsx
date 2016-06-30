'use strict';

var React = require('react');
var Reflux = require('reflux');
var _ = require('../utils/_');
var $ = require('jquery');

var LibraryApi = require('../webapi/Library');

var ChangeLogs = require('./quickview/ChangeLogs.jsx');
var ListingActions = require('../actions/ListingActions');
var fetchChangeLogs = ListingActions.fetchChangeLogs;
var enableBookmarkedLocal = ListingActions.enableBookmarked;
var disableBookmarkedLocal = ListingActions.disableBookmarked;
var LibraryStore = require('../stores/LibraryStore');
var { addToLibrary, removeFromLibrary, fetchLibrary } = require('../actions/LibraryActions');
var url = window.location.href;
var library3 = '';
var library3Done = true;

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

        if(that.props.listing.isEnabled === true){
          if (that.inLibrary()) {
            var newData = {id: this.props.listing.id, isBookmarked: false, ttt: false};
            that.setState({listing: newData});
            if(_.find(that.state.library, e => e.listing.id === that.props.listing.id)){
              disableBookmarkedLocal.bind(null, listing);
              var libId = _.find(this.state.library, function(x) {
                  return x.listing.id === that.props.listing.id;
              }).id;
              removeFromLibrary(that.props.listing, libId);
            }else if(library3.responseJSON){
                  disableBookmarkedLocal.bind(null, listing);
                  var libId2 = _.find(library3.responseJSON, function(x) {
                      return x.listing.id === that.props.listing.id;
                  }).id;
                  removeFromLibrary(that.props.listing, libId2);
                  library3 = LibraryApi.getLibrary().done(function(library){return library;});
            }
          }
          else {
              var newData3 = {id: that.props.listing.id, isBookmarked: true, ttt: true};
              that.setState({listing: newData3});
              enableBookmarkedLocal.bind(null, listing);
              addToLibrary(that.props.listing);
          }
          library3Done = true;
        }
    },

    inLibrary: function() {
      var testLibrary = !!_.find(this.state.library, e => e.listing.id === this.props.listing.id);
      var url = window.location.href;
      var userMngmt = url.includes("user-management/all-listings");
      if(this.props.listing.id == this.getParameterByName("listing")){
        if( (this.state.listing.isBookmarked && this.state.listing.ttt) |
            (userMngmt && this.props.listing.isBookmarked && this.state.listing.isBookmarked) ||
            testLibrary ){
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

    componentDidUpdate: function(nextProps,nextState){
      if(this.props.listing.id == this.getParameterByName("listing") && this.props.listing.isEnabled === true && library3Done == true){
        library3 = LibraryApi.getLibrary().done(function(library){return library;});
        library3Done = false;
      }
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
