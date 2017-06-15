'use strict';

var React = require('react');
var Reflux = require('reflux');
var _ = require('../../utils/_');

var SubscriptionActions = require('../../actions/SubscriptionActions');
var SubscriptionStore = require('../../stores/SubscriptionStore');

var Sidebar = React.createClass({
    mixins: [Reflux.connect(SubscriptionStore, "subscriptionStore"), Reflux.listenerMixin],

    propTypes: {
        isSearching: React.PropTypes.bool.isRequired,
        categories: React.PropTypes.array.isRequired,
        onGoHome: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired
    },

    getInitialState() {
        SubscriptionActions.fetchSubscriptions();

        return {
            categories: [],
            tags: []
        };
    },

    componentWillMount: function(){

      if(this.props.initCategories){
        this.setState({categories: this.props.initCategories});
      }
      if(this.props.initTags){
        this.setState({tags: this.props.initTags});
      }
    },

    onHomeClick() {
        this.state.categories.length = 0;
        this.state.tags.length = 0;
        this.forceUpdate();

        this.props.onGoHome();
    },

    onSubscribeClick(event, category) {
        SubscriptionActions.subscribeToCategory(category.id);
        event.stopPropagation();
    },

    onUnsubscribeClick(event, category) {
        this.state.subscriptionStore.forEach(function(element) {
            if (element.entity_id == category.id && element.entity_type == "category") {
                SubscriptionActions.unsubscribeToCategory(element);
            }
        });
        event.stopPropagation();
    }, 

    onSelect(category) {
        var { categories } = this.state;
        var { title } = category;

        if (_.contains(categories, title)) {
            categories = _.without(categories, title);
        }
        else {
            categories = categories.concat(title);
        }

        var state = {
            categories: categories
        };


        this.setState(state);
        this.props.onChange(categories);
    },

    renderCategories() {
        var me = this;

        return this.props.categories.map(function (category, i) {
            var classes = React.addons.classSet({
                active: _.contains(me.state.categories, category.title),
                'facet-group-item': true
            });

            var categoryLink = <a className="subscribe" onClick={ (e) => {me.onSubscribeClick(e, category)} } >Subscribe</a>;
            if (me.state.subscriptionStore && me.state.subscriptionStore.length > 0) {
                me.state.subscriptionStore.forEach(function(element) {
                    if (element.entity_description == category.title) {
                        categoryLink = <a className="subscribe" onClick={ (e) => {me.onUnsubscribeClick(e, category)} }>Unsubscribe</a>;
                    }
                });
            }

            return (
                <li className={ classes } key={`${category.title}.${i}`} onClick={ me.onSelect.bind(null, category) }>
                    {category.title}
                    {categoryLink}
                </li>
            );
        });
    },

    render() {
        var isBrowsing = this.props.isSearching || this.state.categories.length || this.state.tags.length;

        var homeLinkClasses = React.addons.classSet({
            'active': !isBrowsing,
            'facet-group-item': true
        });

        return (
            <aside className="sidebar col-xs-3 col-lg-2">
                <ul id="tourstop-center-home" className="list-unstyled facet-group">
                    <li className={ homeLinkClasses } id="home" onClick={ this.onHomeClick }><i className="icon-shopping"></i> Center Home</li>
                </ul>
                <h3 className="offscreen"> Application Categories List </h3>
                <ul id="tourstop-center-categories" className="list-unstyled facet-group" tabIndex="0">
                    { this.renderCategories() }
                </ul>
            </aside>
        );
    }

});

module.exports = Sidebar;
