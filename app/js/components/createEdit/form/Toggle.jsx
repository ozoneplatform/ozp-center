'use strict';

var React = require('react');

var Toggle = React.createClass({
  getInitialState: function(){
    return {
      value: this.props.value || false
    };
  },
  render: function () {
      var isEnabled = this.props.value ? 'Enabled ' : 'Disabled ';
      var fullExplanation = isEnabled + this.props.explanation[1];
      if (!this.props.value) {
          fullExplanation = isEnabled + this.props.explanation[0];
      }

      if(!this.props.setCb) {
          this.props.setCb = this.handleToggle;
      }

      return (
          <div id={this.props.id}>
              <label className="switchLabel">{this.props.label}</label><br />
              <p className="small">{this.props.description}</p>

                  <input ref="checkbox" type="checkbox" className="switch-checkbox" id={this.props.toggleId} defaultChecked={this.props.value} onChange={this.props.setCb}/>
                  <label className=" switch switch-label" htmlFor={this.props.toggleId}>
                      <span className="switch-inner"></span>
                      <span className="switch-slider"></span>
                  </label>

              <p className="switchExplain">{fullExplanation}</p>
          </div>
      );
  },
  handleToggle: function(){
    var items = this.refs.checkbox.getDOMNode().checked || false;
    this.props.setter(items);
    this.setState({value: this.refs.checkbox.getDOMNode().checked || false});
  }
});

module.exports = Toggle;
