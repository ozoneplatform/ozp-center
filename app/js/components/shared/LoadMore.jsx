'use strict';

var React = require('react');
var { PropTypes } = React;

var LoadIndicator = require('../shared/LoadIndicator.jsx');

var LoadMore = React.createClass({

    propTypes: {
        // The following results in "Invalid prop `0` supplied" warning.
        // No callers explicitly pass a children prop.
        // children: PropTypes.arrayOf(PropTypes.element).isRequired,
        hasMore: PropTypes.bool.isRequired,
        onLoadMore: PropTypes.func.isRequired
    },

    getInitialState: function () {
        return {
            loading: false,
            loadingError: false
        };
    },

    render: function () {
        return (
            <div className="LoadMore" {...this.props}>
                { this.renderList() }
                { (this.state.loading || this.state.loadingError) &&
                    <LoadIndicator showError={this.state.loadingError}
                        errorMessage="Error Loading Listings"/>
                }
                { this.renderLoadMoreButton() }
            </div>
        );
    },

    renderList: function () {
        var children = false;
        if ( this.props && this.props.children.length ) {
            children = this.props.children;
        }

        if (children && children.length > 0 && !this.state.loadingError) {
            return <ol className="list-unstyled">{ this.props.children }</ol>;
        }
        else if(!this.state.loading) {
            return <h5 style={{marginTop: "0"}}>No results found!</h5>;
        }
    },

    renderLoadMoreButton: function () {
        if (this.props.hasMore && !this.state.loading) {
            return (
                <div className="text-center LoadMore__Toolbar">
                    <button className="btn btn-default LoadMore__Button" onClick={this.props.onLoadMore}>Load More</button>
                </div>
            );
        }
    },

    initLoad() {
        this.setState({
            loading: true,
            loadingError: false
        });
    },

    loadSuccess() {
        this.setState({
            loading: false,
            loadingError: false
        });
    },

    loadError() {
        this.setState({
            loading: false,
            loadingError: true
        });
    }

});

module.exports = LoadMore;
