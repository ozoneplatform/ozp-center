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

            if(_.find(that.state.library, e => e.listing.id === that.props.listing.id)){
              var newData = {id: that.props.listing.id, isBookmarked: false, ttt: false};
              that.setState({listing: newData});
              disableBookmarkedLocal.bind(null, listing);

              var libId = _.find(that.state.library, function(x) {
                  return x.listing.id === that.props.listing.id;
              }).id;
              removeFromLibrary(that.props.listing, libId);
            }else{
              //if(that.props.listing.isEnabled === true && this.state.library2.responseJSON){
              if(that.props.listing.isEnabled === true && library3.responseJSON){
                if(library3.responseJSON){
                //if(this.state.library2.responseJSON){
                  var newData2 = {id: that.props.listing.id, isBookmarked: false, ttt: false};
                  that.setState({listing: newData2});
                  disableBookmarkedLocal.bind(null, listing);

                  //var libId2 = _.find(that.state.library2.responseJSON, function(x) {
                  var libId2 = _.find(library3.responseJSON, function(x) {
                      return x.listing.id === that.props.listing.id;
                  }).id;
                  removeFromLibrary(that.props.listing, libId2);
                  //this.state.library2 = LibraryApi.getLibrary();
                  library3 = LibraryApi.getLibrary();
                }
              }
            }
          }
          else {
              var newData3 = {id: this.props.listing.id, isBookmarked: true, ttt: true};
              this.setState({listing: newData3});
              enableBookmarkedLocal.bind(null, listing);

              addToLibrary(this.props.listing);
          }
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
      var userMngmt = url.includes("user-management/all-listings");
      if(this.props.listing.id == this.getParameterByName("listing")){
        //this.state.library2 = LibraryApi.getLibrary();
        library3 = LibraryApi.getLibrary();
      }
      //console.log(this.state.library2);
    },

    componentWillMount: function(){
      if(this.props.listing.isBookmarked){
      var newData0 = {id: this.props.listing.id, isBookmarked: true, ttt: true};
      this.setState({listing: newData0});
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
