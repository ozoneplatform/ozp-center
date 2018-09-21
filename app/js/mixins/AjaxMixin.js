'use strict';

var AjaxMixin = {

    getInitialState: function () {
        return {
            errors: null,
            errorMessage: null,
            errorStatus: null
        };
    },

    handleError: function (jqXHR) {
        var response = jqXHR.responseJSON;
        var status = jqXHR.status;

        this.setState({
            errors: response ? response.errors : null,
            errorStatus: status,
            errorMessage: response ?
                    (response.message || response.responseText || response.detail) :
                    response.responseText
        });
    }

};

module.exports = AjaxMixin;
