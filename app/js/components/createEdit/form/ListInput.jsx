'use strict';

var React = require('react');
var { classSet } = React.addons;
var _ = require('../../../utils/_');

var ListInput = React.createClass({
    contextTypes: {
        lastUpdate: React.PropTypes.string.isRequired
    },

    render: function () {
        var items = this.props.value || [];

        var itemForms = items.map(function (item, index) {
            var formProps = _.pick(this.props, ['requestChange', 'messages', 'errors',
                        'warnings', 'forceError', 'imageErrors']),
                imageErrors = (this.props.imageErrors ? this.props.imageErrors[index] : null) ||
                    {},
                props = Object.assign(formProps, {
                    value: item,
                    imageErrors: imageErrors,
                    removeHandler: this.onDelete.bind(null, index),
                    key: `${index}.${this.context.lastUpdate}`,
                    path: this.props.path.concat(index),
                    count: index,
                    total: items.length,
                    baseKey: `${index}`,
                    reorderDownHandler: this.onReorderDown.bind(null, index),
                    reorderUpHandler: this.onReorderUp.bind(null, index)
                });

            return <this.props.itemForm {...props} />;
        }, this);

        var labelClasses = classSet({'input-optional': this.props.optional});
        return (
            <div id={this.props.id}>
                <div className={this.getClasses()}>
                    <label className={labelClasses}>{this.props.label}</label>
                    <p className="small">{this.props.description}</p>
                    <p className="help-block small">{this.props.help}</p>
                </div>
                <div>
                    {itemForms}
                </div>
                <div className="clear"></div>
                { (itemForms.length < 10) &&
                  <button className="btn btn-sm btn-primary addNew" onClick={this.handleNew}><i className="icon-plus-14-white"></i> Add New</button>
                }
            </div>
        );
    },

    onDelete: function (key, event) {
        event.preventDefault();
        var items = this.props.value;
        items.splice(key, 1);
        this.props.setter(null);
        this.props.setter(items);
    },

    onReorderUp: function (key, direction) {
        var items = this.props.value;

        if (key-1 >= 0) {
            this.props.setter(null);
            var temp = items[key-1];
            items[key-1] = items[key];
            items[key] = temp;
            this.props.setter(items);
        }
    },

    onReorderDown: function (key, direction) {
        var items = this.props.value;

        if (key+1 < items.length ) {
            this.props.setter(null);
            var temp = items[key+1];
            items[key+1] = items[key];
            items[key] = temp;
            this.props.setter(items);
        }
    },

    getClasses: function () {
        return classSet({
            'form-group': true,
            'has-error': this.showError()
        });
    },

    showError: function () {
        return this.props.error && this.props.forceError;
    },

    handleNew: function (event) {
        event.preventDefault();
        var items = this.props.value || [];
        items.push({});
        this.props.setter(items);
    }
});

module.exports = ListInput;
