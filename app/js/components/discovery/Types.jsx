'use strict';

var React = require('react');
var SelectBox = require('../shared/SelectBox.jsx');
var SystemStateMixin = require('../../mixins/SystemStateMixin');

var Types = React.createClass({
    mixins: [SystemStateMixin],

    propTypes: {
        value: React.PropTypes.array.isRequired,
        onChange: React.PropTypes.func.isRequired
    },

    onChange(types) {
        this.props.onChange(types);
    },

    render() {
        return (
            <div>
                <SelectBox className="SelectBox__Types col-sm-3 col-xs-4" tabIndex="0" label="Listing Type" ariaDescribedBy="typeDescription" aria-haspopup="true" onChange={this.onChange} value={this.props.value} multiple>
                    {
                        this.state.system.types.map((x, i) =>
                            <option tabIndex={0} key={`${x.id}.${i}`} value={x.title}>{x.title}</option>
                        )
                    }
                </SelectBox>
                <span id="typeDescription" className="ariaTip">Press tab once and use the arrow keys to filter through different listing types</span>
            </div>
        );
    }
});

module.exports = Types;
