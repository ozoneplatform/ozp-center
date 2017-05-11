'use strict';

var { Link, State } = require('react-router');

var TabMixin = {

    mixins: [ State ],

    getInitialState: function() {
        return {
            tabLimit: 6, //Current artibtrary limit
            tabIndex: 0,
            tabTotal: this.props.tabs.length
        }
    },

    handleBeginArrowClick: function(event) {
        if(this.state.tabIndex != 0) {
            var decrease = (this.state.tabIndex - this.state.tabLimit < 0 ? 0 : this.state.tabIndex - this.state.tabLimit);
            this.setState({tabIndex : decrease});
        }

        event.preventDefault();
    },

    handleEndArrowClick: function(event) {
        if(this.state.tabIndex != this.state.tabTotal){
            var increase = (this.state.tabIndex + this.state.tabLimit*2 > this.state.tabTotal ? this.state.tabTotal-this.state.tabLimit : this.state.tabIndex + this.state.tabLimit);
            this.setState({tabIndex : increase});
        }

        event.preventDefault();
    },

    renderTabs: function (LINKS, params) {
        var me = this;
        var tabLimit = this.state.tabLimit;
        var tabTotal = this.state.tabTotal;
        var tabIndex = this.state.tabIndex;

        var beginArrow = null, endArrow = null;
        if(LINKS.length > tabLimit){
            var beginDisabled = (tabIndex == 0 ? true : false);
            var beginClass = beginDisabled ? 'arrowDisabled' : 'arrow';
            var moreTabText = tabIndex == 1 ? 'tab' : 'tabs';
            var beginTitle = beginDisabled ? '' : tabIndex + ' more ' + moreTabText + '...';
            var beginClick = beginDisabled ? null : this.handleBeginArrowClick;
            beginArrow = (<li title={beginTitle} className={beginClass} onClick={beginClick} key='begin_arrow'>
                <a href='#'> &lt; </a>
              </li>);

            var endDisabled = (tabTotal == tabIndex + tabLimit ? true : false);
            var endClass = endDisabled ? 'arrowDisabled' : 'arrow';
            moreTabText = (tabTotal - tabLimit - tabIndex) == 1 ? 'tab' : 'tabs';
            var endTitle = endDisabled ? '' : (tabTotal - tabLimit - tabIndex) + ' more ' + moreTabText + '...';
            var endClick = endDisabled ? null : this.handleEndArrowClick;
            endArrow = (<li title={endTitle} className={endClass} onClick={endClick} key='end_arrow'>
                    <a href='#'> &gt; </a>
                  </li>);
        }

        var linkComponents = LINKS.map(function (link, i) {
            var isActive = me.isActive(link.to, link.params);
            var className = isActive ? 'active' : '';
            var style = (i < tabIndex || tabLimit <= i-tabIndex) ? {display: 'none'} : {};

            return (
                    <li key={i} title={ link.name } className={ className } style={style}>
                    <Link to={ link.to } params={ link.params || params }>{ link.name }</Link>
                </li>
            );
        });

        return (
            <ul className="nav nav-tabs" role="tablist">
                { beginArrow }
                { linkComponents }
                { endArrow }
            </ul>
        );
    }

};

module.exports = TabMixin;
