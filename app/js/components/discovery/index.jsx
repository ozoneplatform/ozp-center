'use strict';

var React = require('react');
var Reflux = require('reflux');
var { Navigation } = require('react-router');
var _ = require('../../utils/_');
var {CENTER_URL, API_URL} = require('ozp-react-commons/OzoneConfig');
var { PAGINATION_MAX } = require('ozp-react-commons/constants');
var { listingMessages } = require('ozp-react-commons/constants/messages');

// actions
var ListingActions = require('../../actions/ListingActions');

// component dependencies
var NavBar = require('../NavBar/index.jsx');
var Header = require('../header/index.jsx');
var Sidebar = require('./Sidebar.jsx');
var ListingTile = require('./ListingTile.jsx');
var RecommendedListingTileStorefront = require('./RecommendedListingTileStorefront.jsx');
var FeaturedListings = require('./FeaturedListings.jsx');
var Carousel = require('../carousel/index.jsx');
var Types = require('./Types.jsx');
var Organizations = require('./Organizations.jsx');
var DetailedQuery = require('./DetailedQuery.jsx');
var ActiveStateMixin = require('../../mixins/ActiveStateMixin');

var SelectBox = require('../shared/SelectBox.jsx');
var LoadIndicator = require('../shared/LoadIndicator.jsx');

var $ = require('jquery');
require('../../utils/typeahead.js');

// store dependencies
var DiscoveryPageStore = require('../../stores/DiscoveryPageStore');
var GlobalListingStore = require('../../stores/GlobalListingStore');
var timeout;


var FILTERS = ['categories', 'type', 'agency', 'tags'];
var sortOptions = [
    {option: 'Newest', searchParam: '-approved_date'},
    {option: 'Title: A to Z', searchParam: 'title'},
    {option: 'Title: Z to A', searchParam: '-title'},
    {option: 'Rating: Low to High', searchParam: ['avg_rate', 'total_votes']},
    {option: 'Rating: High to Low', searchParam: ['-avg_rate', '-total_votes']}
];

var areFiltersApplied = (state) => {
    return _.reduce(FILTERS, function (memo, filter) {
        return memo || !!state[filter].length;
    }, false);
};

var Discovery = React.createClass({

    mixins: [ Reflux.ListenerMixin, ActiveStateMixin, Navigation],

    getInitialState() {
        return {
            initCategories: [],
            initTags: [],
            featured: DiscoveryPageStore.getFeatured(),
            newArrivals: DiscoveryPageStore.getNewArrivals(),
            mostPopular: DiscoveryPageStore.getMostPopular(),
            searchResults: DiscoveryPageStore.getSearchResults(),
            recommended: DiscoveryPageStore.getRecommended(),
            mostPopularTiles: 12,
            initialMostPopularTiles: 12,
            queryString: this.state ? this.state.queryString : '',
            categories: this.state ? this.state.categories : [],
            tags: this.state ? this.state.tags : [],
            tagId: this.state ? this.state.tagId : [],
            type: this.state ? this.state.type : [],
            agency: this.state ? this.state.agency : [],
            nextOffset: DiscoveryPageStore.getNextOffset(),
            currentOffset: this.state ? this.state.currentOffset : 0,
            limit: this.state ? this.state.limit : PAGINATION_MAX,
            ordering: this.state ? this.state.ordering : [],
            orderingText: this.state ? this.state.orderingText : 'Sort By',
            loadingMore: false,
            searching: false,
            featuredError: this.state ? this.state.featuredError : false,
            newArrivalsError: this.state ? this.state.newArrivalsError : false,
            mostPopularError: this.state ? this.state.mostPopularError : false,
            recommendedError: this.state ? this.state.recommendedError : false
        };
    },

    onFetchFeaturedListingsFailed: function() {
        this.setState({
            featuredError: true
        });
    },

    onFetchRecentListingsFailed: function() {
        this.setState({
            newArrivalsError: true
        });
    },

    onFetchMostPopularListingsFailed: function() {
        this.setState({
            mostPopularError: true
        });
    },

    onFetchRecommendedListingsFailed: function() {
        this.setState({
            recommendedError: true
        });
    },

    onSearchInputChange(evt) {
        this._searching = true;
        this.setState({
            queryString: evt.target.value,
            orderingText: 'Sort By',
            currentOffset: 0
        });
    },

    ignoreEnterKey(evt) {
        var code = evt.keyCode || evt.which;
        if (code == 13) {
            evt.preventDefault();
            return evt.stopPropagation();
        }
    },

    resetSearchState() {
        this._searching = true;
        this.setState({currentOffset: 0, orderingText: 'Sort By', ordering: []});

        // Need to reset Most Popular in store after search
        DiscoveryPageStore.resetMostPopular();
    },

    onCategoryChange(categories) {
        this.resetSearchState();
        this.setState({ categories });
    },

    onTagsChange(tags) {
        this.resetSearchState();
        this.setState({ tags });
    },

    onTypeChange(type) {
        this.resetSearchState();
        this.setState({ type });
    },

    onOrganizationChange(agency) {
        this.resetSearchState();
        this.setState({ agency });
    },

    onSortChange(order) {
        var me = this;
        if (order != this.state.ordering) {
            sortOptions.forEach(function(element) {
                if (order == element.option) {
                    me.setState({orderingText: element.option, ordering: element.searchParam, currentOffset: 0});
                }
            });
        }
    },

    componentDidUpdate(prevProps, prevState) {
        if (this.state.queryString !== prevState.queryString) {
            this.debounceSearch();
        }
        else if(!_.isEqual(this.state.categories, prevState.categories) ||
            !_.isEqual(this.state.tags, prevState.tags)||
            !_.isEqual(this.state.type, prevState.type) ||
            !_.isEqual(this.state.agency, prevState.agency) ||
            !_.isEqual(this.state.currentOffset, prevState.currentOffset) ||
            !_.isEqual(this.state.ordering, prevState.ordering)) {
            this.search();
        }
    },

    componentWillMount() {
        this.listenTo(DiscoveryPageStore, this.onStoreChange);

        // Notice when a search is finished
        this.listenTo(ListingActions.searchCompleted, this.onSearchCompleted);

        // // Reload when a new review is added
         this.listenTo(ListingActions.saveReviewCompleted, ListingActions.fetchStorefrontListings);
        //this.listenTo(GlobalListingStore, ListingActions.fetchStorefrontListings);

        // fetch data when instantiated
        ListingActions.fetchFeaturedListings();
        ListingActions.fetchRecentListings();
        ListingActions.fetchMostPopularListings();
        ListingActions.fetchRecommendedListings();

        this.listenTo(ListingActions.fetchFeaturedListingsFailed, this.onFetchFeaturedListingsFailed);
        this.listenTo(ListingActions.fetchRecentListingsFailed, this.onFetchRecentListingsFailed);
        this.listenTo(ListingActions.fetchMostPopularListingsFailed, this.onFetchMostPopularListingsFailed);
        this.listenTo(ListingActions.fetchRecommendedListingsFailed, this.onFetchRecommendedListingsFailed);

        if(this.context.getCurrentParams().categories){
          this.setState({initCategories: decodeURIComponent(this.context.getCurrentParams().categories).split('+')});
        }
        if(this.context.getCurrentParams().tags){
          this.setState({initTags: decodeURIComponent(this.context.getCurrentParams().tags).split('+')});
        }
        if(this.context.getCurrentParams().tagId){
            this.setState({tagId: decodeURIComponent(this.context.getCurrentParams().tagId).split('+')});
        }


    },

    componentWillUnmount: function(){
        $(this.refs.form.getDOMNode()).unbind('submit', false);
    },

    render: function () {
        var isSearching = this.isSearching();
        var isBrowsing = this.isBrowsing();

        return (
            <div>
                <NavBar />
                <Header>
                <form id="tourstop-center-search" className="col-xs-9 col-lg-10" ref="form" role="search">
                  <div className="row">
                    <div className="form-group Search col-sm-6 col-xs-4">
                      <i className="icon-search"></i>

                      <input ref="search" type="text" className="form-control"
                        tabIndex="0"
                        placeholder="Search"
                        value={ this.state.queryString || ''}
                        onChange={ this.onSearchInputChange }
                        onKeyPress={this.onSearchTextCompleted }
                        />
                      <i className="icon-cross-14-grayDark clearButton" onClick={this.searchBarReset}></i>
                    </div>
                    <Types value={this.state.type} onChange={this.onTypeChange} />
                    <Organizations value={this.state.agency} onChange={this.onOrganizationChange} />
                  </div>
                </form>
                </Header>
                <div id="discovery" className="row">
                    <Sidebar
			ref="sidebar"
                        isSearching= { isSearching }
                        initCategories = { this.state.initCategories ? this.state.initCategories : false }
                        categories={ this.props.system.categories }
                        onGoHome= { this.refresh }
                        onChange= { this.onCategoryChange } />
                    <section className="content col-xs-9 col-lg-10">
                        {
                            isBrowsing ?
                                this.renderSearchResults() :
                                [
                                    this.renderFeaturedListings(),
                                    this.renderRecommended(),
                                    this.renderNewArrivals(),
                                    this.renderMostPopular()
                                ]
                        }
                    </section>
                </div>
            </div>
        );
    },

    componentDidMount(){

          $(this.refs.search.getDOMNode()).typeahead({
            hint: true,
            highlight: true,
            minLength: 1,
          },
          {
            name: 'listings',
            source: this.suggest,
            async: true,
            display: 'title'
          }).on('typeahead:selected', (evt, item) => {
             this.onSearchInputChange({
               target: {
                 value: item.title
               }
             });
             // when typeahead value is selected, it should open the details of the selected app
            this.transitionTo(this.getActiveRoutePath(), null, {
                listing: item.id,
                action: 'view',
                tab: 'overview'
            });
          });



        $(window).scroll(() => {
           if ($(window).scrollTop() + $(window).height() == $(document).height()) {
             if (!this.state.loadingMore) {
               this.handleLoadMore();
               if (this.state.nextOffset && !this._searching) {
                 this.handleMoreSearch();
               }
             }
           }
        });

        $(this.refs.form.getDOMNode()).submit((e)=>e.preventDefault());

        // If a search string is provided to us, load it into the search feild
        if(this.context.getCurrentParams().searchString){
          this._searching = true;
          this.setState({
            queryString: this.context.getCurrentParams().searchString,
            currentOffset: 0
          });
        }

        // If some categories, types, or orgs are provided, select them.
        if(this.context.getCurrentParams().categories){
          this.onCategoryChange(this.state.initCategories);
        }

        if(this.context.getCurrentParams().type){
          this.onTypeChange(decodeURIComponent(this.context.getCurrentParams().type).split('+'));
        }

        if(this.context.getCurrentParams().org){
          this.onOrganizationChange(decodeURIComponent(this.context.getCurrentParams().org).split('+'));
        }
        if(this.context.getCurrentParams().tags){
          this.onTagsChange(this.state.initTags);
        }
    },


    onStoreChange() {
        if (!this.state.searching) {
            this.setState({orderingText: 'Sort By'});
        }
        this.setState(this.getInitialState());
    },

    isSearching() {
        return !!this.state.queryString;
    },

    isBrowsing() {
        return (this.isSearching() || areFiltersApplied(this.state));
    },

    reset() {
        this._searching = true;
        this.setState({
            queryString: '',
            currentOffset: 0,
            type: [],
            agency: [],
            tags: [],
            tagId: []
        });
    },

    refresh() {
        location.reload();
    },

    searchBarReset() {
	if (this.refs.search.getDOMNode().value.length > 0) {
            this._searching = true;
            this.setState({
                queryString: '',
                currentOffset: 0
            });
        }
    },

    debounceSearch: _.debounce(function () {
        this.search();
    }, 500),

    suggest(q, ab, cb) {
        var { type, agency } = this.state;
        var combinedObj = _.assign(
            { search: q,
              offset: this.state.currentOffset,
              category: this.state.categories,
              limit: this.state.limit
            },
            { type, agency }
        );
        var get= function(){
              if(timeout){
                  clearTimeout(timeout);
              }
              timeout = setTimeout(function(){
                $.get(`${API_URL}/api/listings/essearch/suggest/`,
                    $.param(combinedObj,true),
                    function(result){
                        cb(result);
                    },
                   'json'
                );
            },300);
        };
        get();
    },

    search() {
        var { type, agency } = this.state;
        var combinedObj = _.assign(
            { search: this.state.queryString,
              offset: this.state.currentOffset,
              category: this.state.categories,
              tag: this.state.tags,
              tagId: this.state.tagId,
              limit: this.state.limit
            },
            { type, agency });

        if (this.state.ordering) {
            combinedObj = _.assign(combinedObj, {
                ordering: this.state.ordering
            },{ type, agency });
        }

        ListingActions.search(_.assign(combinedObj));

        this.setState({
          searching: true
        });
    },

    onSearchCompleted() {
        if(this.refs.shareResults){
          $(this.refs.shareResults.getDOMNode()).popover({
            html: true
          });
        }
        this._searching = false;
        this.setState({
            lastSearchCompleted: Date.now(),
            searching: false
        });
    },

    onSearchTextCompleted(e){
        if(e.charCode == 13){
          e.preventDefault();
          e.stopPropagation();
          $(this.refs.searchResults.getDOMNode()).attr("tabindex",-1).focus();
        }

    },

    renderFeaturedListings() {
        if(!this.state.featured.length) {
            return (
                [<h4>Featured</h4>,
                <LoadIndicator showError={this.state.featuredError}
                    errorMessage="Error loading Featured Listings"/>]
            );
        }

        return (
            <section className="FeaturedListings" key="FeaturedListings">
                <FeaturedListings listings={ this.state.featured } />
            </section>
        );
    },

    renderRecommended() {
        if(!this.state.recommended.length) {
            return (
                [<h4>{listingMessages['recommender.recommended']}</h4>,
                <LoadIndicator showError={this.state.recommendedError}
                    errorMessage="Error loading Recommended Listings"/>]
            );
        }

        return (
            <section className="Discovery__Recommended" key="Discovery__Recommended">
                <h4>{listingMessages['recommender.recommended']}</h4>
                <Carousel className="new-arrival-listings" aria-label="Recommended Apps Carousel">
                    { RecommendedListingTileStorefront.fromArray(this.state.recommended, listingMessages['recommender.recommended']) }
                </Carousel>
            </section>
        );
    },

    renderNewArrivals() {
        if(!this.state.newArrivals.length) {
            return (
                [<h4>New Arrivals</h4>,
                <LoadIndicator showError={this.state.newArrivalsError}
                    errorMessage="Error loading New Arrivals Listings"/>]
            );
        }

        return (
            <section className="Discovery__NewArrivals" key="Discovery__NewArrivals">
                <h4>New Arrivals</h4>
                <Carousel className="new-arrival-listings" aria-label="New Arrivals Carousel">
                    { ListingTile.fromArray(this.state.newArrivals) }
                </Carousel>
            </section>
        );
    },

    handleLoadMore() {
        if (this.isMounted()) {
          this.setState({
              mostPopularTiles: this.state.mostPopularTiles += 12
          });
        }

        if (this.state.mostPopularTiles < this.state.limit + this.state.initialMostPopularTiles) {
          if (this.isMounted()) {
            this.setState({
              loadingMore: true
            });
          }

          // Debounce loading more so event is not triggered multiple times while
          // listings are loading in.
          setTimeout(() => {
            if (this.isMounted()) {
              this.setState({
                loadingMore: false
              });
            }
          }, 500);
        }
    },

    sortMostPopular(order) {
        var me = this;
        DiscoveryPageStore.sortMostPopular(order);

        sortOptions.forEach(function(element) {
            if (order == element.option) {
                me.setState({orderingText: element.option});
            }
        });
    },

    renderSortOptions(sortMethod) {
        return (
            <SelectBox className="SelectBox sortBy" label={this.state.orderingText} onChange={sortMethod}>
                <option className="sortBy" value={sortOptions[0].option}>{sortOptions[0].option}</option>
                <option className="sortBy" value={sortOptions[1].option}>{sortOptions[1].option}</option>
                <option className="sortBy" value={sortOptions[2].option}>{sortOptions[2].option}</option>
                <option className="sortBy" value={sortOptions[3].option}>{sortOptions[3].option}</option>
                <option className="sortBy" value={sortOptions[4].option}>{sortOptions[4].option}</option>
            </SelectBox>
        );
    },

    renderMostPopular() {
        if(!this.state.mostPopular.length) {
            return (
                [<h4>Most Popular</h4>,
                <LoadIndicator showError={this.state.mostPopularError}
                    errorMessage="Error loading Most Popular Listings"/>]
            );
        }

        var InfiniTiles = ListingTile.renderLimitedTiles(this.state.mostPopularTiles, this.state.mostPopular);

        return (
            <section className="Discovery__MostPopular" key="Discovery__MostPopular">
                <h4>Most Popular</h4>
                    {this.renderSortOptions(this.sortMostPopular)}
                <ul className="infiniteScroll row clearfix">
                    { InfiniTiles }
                </ul>
                <p className="text-center">
                  { this.state.loadingMore && <LoadIndicator/> }
                </p>
            </section>
        );
    },

    handleMoreSearch() {
        this.setState({
            currentOffset: this.state.nextOffset
        });
    },

    renderSearchResults() {
        var results = '';
        let listingResults;

        if (!this._searching) {
            results = this.state.searchResults.length > 0 ?
                ListingTile.fromArray(this.state.searchResults) :
                <h3 className="col-xs-12">No results found.</h3>;
        }

        if (this.state.searchResults.length != 0) {
            listingResults = <div role="alert" aria-live="polite" aria-label={'Showing ' + this.state.searchResults.length + ' out of ' + DiscoveryPageStore.getTotalSearchResults() + ' listings'}>
                Showing {this.state.searchResults.length} out of {DiscoveryPageStore.getTotalSearchResults()} listings.
            </div>
        }

        var searchLink = `${CENTER_URL}/#/home/${encodeURIComponent(this.state.queryString)}/${(this.state.categories.length) ? encodeURIComponent(this.state.categories.toString()).replace(/%2C/g,'+') : ''}/${(this.state.type.length) ? encodeURIComponent(this.state.type.toString()).replace(/%2C/g,'+') : ''}/${(this.state.agency.length) ? encodeURIComponent(this.state.agency.toString()).replace(/%2C/g,'+') : ''}/${(this.state.tags.length) ? encodeURIComponent(this.state.tags.toString()).replace(/%2C/g,'+') : ''}/${(this.state.tagId.length) ? encodeURIComponent(this.state.tagId.toString()).replace(/%2C/g,'+') : ''}`;

        return (
            <section className="Discovery__SearchResults">
                {this.renderSortOptions(this.onSortChange)}
                <h4 ref="searchResults">Search Results &nbsp;
                  <span tabIndex="0"
                    className="shareLink"
                    ref="shareResults"
                    data-toggle="popover"
                    title={"Share <span style='float: right' onclick=" + '$(this).parent().parent().popover("toggle")' + " class='icon-cross-14-grayDark'></span>"}
                    data-content={"Copy the URL and paste it anywhere to share. <br /><input class='shareResults' onclick='" + '$(this).focus();$(this).select();' + "' style='width: 100%' type='text' value=" + searchLink + "></input>"}>Share
                    &nbsp;<span className="icon-share-10-blueDark"></span>
                  </span>
                </h4>
                {listingResults}
                <div className="resultsDiv">
                    <p>
                        <DetailedQuery
                          onCategoryChange={this.onCategoryChange}
                          onTypeChange={this.onTypeChange}
                          onOrganizationChange={this.onOrganizationChange}
                          reset={this.reset}
                          data={this.state}
                          />
                    </p>
                </div>
                <ul className="list-unstyled listings-search-results row clearfix">
                    { results }
                </ul>
                <div className="list-unstyled listings-search-results row clearfix">
                    { this.state.searching && <LoadIndicator/> }
                </div>
            </section>
        );
    }

});

module.exports = Discovery;
