'use strict';

var React = require('react');
var t = require('tcomb-form');
var { Str, struct, subtype, maybe } = t;
var Crud = require('../../shared/Crud.jsx');

var { API_URL } = require('ozp-react-commons/OzoneConfig');

// Category Schema
var Category = struct({
    title: subtype(Str, function (s) {
        return s.length <= 50;
    }),
    description: maybe(subtype(Str, function (s) {
        return s.length <= 500;
    }))
});

var Categories = React.createClass({

    getDefaultProps: function () {
        return {
            title: 'Category',
            url: API_URL + '/api/category',
            Schema: Category,
            getDisplayName: function (selectedRecord) {
                return selectedRecord.title;
            },
            form: {
                fields: {
                    title: {
                        help: 'Max. 50 characters'
                    },
                    description: {
                        type: 'textarea',
                        help: 'Max. 500 characters'
                    }
                }
            },
            grid: {
                name: 'category',
                columns: [
                    { field: 'title', caption: 'Title', size: '50%' },
                    { field: 'description', caption: 'Description', size: '50%' }
                ],
                show: {
                    toolbar: true,
                    toolbarAdd: true,
                    toolbarEdit: true,
                    toolbarDelete: true,
                    toolbarValidate: true,
                    toolbarSearch: false,
                    toolbarReload: false,
                    toolbarColumns: false
                },

                onClick: function (event) {
                    event.onComplete = function() {
                        var sel = this.getSelection();
                        var record = this.get( sel["0"])
                        if (this.getSelection().length > 0)
                          { w2ui['category_toolbar'].enable('validate') } 
                        else 
                          { w2ui['category_toolbar'].disable('validate') }
                        }

                    },
                    toolbar:{
                        items: [
                            { type: 'break'},
                            { type: 'button', id :'validate', caption: 'Validate', img: 'icon-folder', hint: w2utils.lang('Validate selected record'), disabled:true }
                        ], 
                        onClick: function (event) {
                            var sel = w2ui["category"].getSelection(); 
                            var record =  w2ui["category"].get(sel["0"]);
                           if (event.target == 'validate') { w2alert('<h4>This feature is coming soon!</h4>'+ '</br></br>Validation information for the <em>' + record.title + '</em> category' , 'Validate Category');}
                        }
                    }

            }
        };
    },

    render: function () {
        return <Crud {...this.props} />;
    }

});

module.exports = Categories;
