'use strict';

var React = require('react');

var LoadIndicator = React.createClass({
    render() {
        var title = this.props.showError ? null : this.props.title;
        var loadIcon = this.props.showError ?
            <span className="icon-exclamation-36 loader"></span> :
            <span className="icon-loader-36 loader loader-animate"></span>;
        var displayMessage = this.props.showError ?
            this.props.errorMessage : this.props.message;

        return (
            <section className="loader">
                { title &&
                    <h5 className="loader-title">{ title }</h5>
                }
                { loadIcon }
                { displayMessage &&
                    <h5 className="loader-message">{ displayMessage }</h5>
                }
            </section>
        );
    },

    shouldComponentUpdate(newProps) {
        return newProps.title !== this.props.title
            || newProps.message !== this.props.message
            || newProps.showError !== this.props.showError
            || newProps.errorMessage !== this.props.errorMessage;
    }
});

module.exports = LoadIndicator;
