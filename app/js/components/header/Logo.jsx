'use strict';

var React = require('react');
var logo  = './images/marketplace-logo.png';
var {CENTER_URL} = require('ozp-react-commons/OzoneConfig');
CENTER_URL = `/${CENTER_URL.match(/http.?:\/\/[^/]*\/(.*?)\/?$/)[1]}/`;

var Logo = React.createClass({

    render() {
        return (
            <a href={CENTER_URL} id="marketplace-logo" className="col-xs-3 col-lg-2">
                <img alt="marketplace logo click to go home" src={logo} />
            </a>
        );
    }

});

module.exports = Logo;
