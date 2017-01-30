'use strict';

var UnpaginatedListingsStore = require('../../../stores/UnpaginatedListingsStore');
var ListingActions = require('../../../actions/ListingActions');

var React = require('react');
var Reflux = require('reflux');
var { PropTypes } = React;

var { Navigation } = require('react-router');
var ActiveState = require('../../../mixins/ActiveStateMixin');

var moment = require('moment');

var TableView = React.createClass({

    mixins: [
        Reflux.listenTo(UnpaginatedListingsStore, 'onStoreChanged'),
        Reflux.listenTo(ListingActions.listingChangeCompleted, 'onListingChangeCompleted'),
        Navigation,
        ActiveState
    ],

    propTypes: {
        filter: PropTypes.object.isRequired,
        onCountsChanged: PropTypes.func.isRequired,
        tableName: PropTypes.string.isRequired,
        isAdmin: PropTypes.bool,
        showOrg: PropTypes.bool
    },

    render: function () {
         var props = this.props;
         return (<div ref="grid" {...props} ></div>);

    },

    componentWillUnmount: function () {
        this.grid.destroy();
    },

    componentDidMount: function () {
        this.props.filter.limit = 24;
        this.props.filter.offset = 0;
        var thisTable = this;
        this.grid = $(this.refs.grid.getDOMNode()).w2grid({
            name: 'grid',
            fixedBody: true,
            multiSelect : false,
            show: {
                toolbar: true,
                toolbarAdd: false,
                toolbarEdit: false,
                toolbarDelete: false,
                toolbarSearch: true,
                toolbarReload: false,
                toolbarColumns: true,
                toolbarSave: false
            },

            buttons: {
                save : {
                    caption: w2utils.lang('Export to csv'),
                    icon: 'icon-save-grayDark'
                }
            },
            limit:this.props.filter.limit,
            url:'placeholder',
            onRequest: function(event){
                var more = $('#grid_'+ this.name +'_rec_more');
                if (this.autoLoad === true) {
                    more.show().find('td').html('<div><div style="width: 20px; height: 20px;" class="w2ui-spinner"></div></div>');
                } else {
                    more.find('td').html('<div>'+ 'Load ' + this.limit + ' More...</div>');
                }
                event.preventDefault();
                if(event.postData.cmd === 'get-records' &&
                    (this.total === 0 || thisTable.props.filter.offset + thisTable.props.filter.limit < this.total)){
                    thisTable.props.filter.offset += thisTable.props.filter.limit;
                    UnpaginatedListingsStore.filterChange(thisTable.props.filter);
                }
                return;
            },
            onSort: function(event){

                thisTable.props.filter.offset = 0;
                this.offset = 0;
                var sortData = this.sortData[0];
                var ascending = true;

                if(sortData){
                    ascending = sortData.direction === 'asc' ? false:true;
                }
                thisTable.props.filter.ordering = thisTable.convertToServerPropName(event.field, ascending);
                UnpaginatedListingsStore.filterChange(thisTable.props.filter);
            },
            onSearch: function (event){

                thisTable.props.filter.offset = 0;
                thisTable.props.filter.search = event.searchValue;
                if(!event.searchValue || (event.searchData && event.searchData.length > 0 &&( event.searchData[0].value.replace(/\s/g, '').length === 0
                  || event.searchData[0].value === '' )))
                    delete thisTable.props.filter.search;
                UnpaginatedListingsStore.filterChange(thisTable.props.filter);
            },
            onLoad: function(event){
                this.url = 'placeholder'
                event.preventDefault();
            },
            columns: this.getColumns(),
            records: [],

            /* eslint-disable no-unused-vars */
            onSubmit: function (event) {
                event.preventDefault();
            /* eslint-enable no-unused-vars */
                var records = this.records.map( function (record) {
                    var owners = '';
                    record.owners.forEach( function (owner,index) {
                        if (index) {
                            owners += '; ';
                        }
                        owners += owner.displayName;
                    });
                    var updatedDate = moment(record.updated).format('MM/DD/YY');
                    return {
                        Id: record.recid,
                        Title: record.title,
                        Owners: owners,
                        Organization: record.organization,
                        Status: thisTable.convertStatus(record.status),
                        Updated: updatedDate,
                        Enabled: record.enabled,
                        Featured: record.featured,
                        Comments: record.comments
                    };
                });
                thisTable.JSONToCSVConvertor(records,thisTable.props.tableName, "false");
            },

            onClick: function (event) {
                event.preventDefault();
                event.stopPropagation();
                var target = event.originalEvent.target;
                if (this.columns[event.column].field==="featured") {
                    if (target.type==='checkbox') {
                        if(thisTable.props.isAdmin && thisTable.props.isAdmin===true){
                            var listing = thisTable.getUnpaginatedList().data.filter(
                                function (listing) {
                                    return parseInt(listing.id) === parseInt(event.recid);
                                }
                            )[0];
                            ListingActions.setFeatured(target.checked, listing);
                        }
                    }
                }
            }
        });

        if(this.grid && !this.grid.records.length){
            this.props.filter.offset = 0;
            this.grid.offset = 0
            UnpaginatedListingsStore.filterChange(this.props.filter);
        }
    },

    getColumns: function () {
        var thisTable = this;
        var columns = [];

        columns.push(
            { field: 'securityMarking', caption: 'Security Marking', size: '15%',
              render: function (record) {
                  return record.securityMarking;
              }
            },
            { field: 'title', caption: 'Title', sortable: true, size: '10%',
                render: function (record) {
                    var overview = thisTable.makeHref(thisTable.getActiveRoutePath(), thisTable.getParams(), {
                        listing: record.recid,
                        action: 'view',
                        tab: 'overview'
                    });
                    var title = record.title;
                    if(record.status !== 'DELETED'){
                      return '<a href='+encodeURI(overview)+'>'+title+'</a>';
                    }
                    else{
                      return title;
                    }
                }
            },
            { field: 'owners', caption: 'Owners', sortable: true, size: '10%',
                render: function (record) {
                    var ownerArray = _.pluck(record.owners,'displayName').sort();
                    var owners = ownerArray.join('; ');
                    return owners;
                }
            });

        if (this.props.showOrg===true) {
            columns.push({ field: 'organization', caption: 'Organization', sortable: true, size: '10%' });
        }

        columns.push(
            { field: 'private', caption: 'Private', sortable: true, size: '10%',
              render: function (record) {
                  if (record.private) {
                      return '<i class="icon-lock-blue"></i> Private';
                  } else {
                      return 'Public';
                  }
              }
            },
            { field: 'comments', caption: 'Comments', size: '20%' },
            { field: 'status', caption: 'Status', sortable: true, size: '5%',
                render: function (record) {
                    return thisTable.convertStatus(record.status);
                }
            },
            { field: 'updated', caption: 'Updated', sortable: true, size: '5%',
                render: function (record) {
                    return moment(record.updated).format('MM/DD/YY');
                }
            },
            { field: 'enabled', caption: 'Enabled', sortable: true, size: '5%'},
            { field: 'featured', caption: 'Featured', sortable: false, size: '5%',
                render: function (record) {
                    if (thisTable.props.isAdmin===true) {
                      if(record.featured !== null){
                        if (record.featured) {
                            return '<input type="checkbox" checked/>';
                        } else {
                            return '<input type="checkbox" />';
                        }
                    } else {
                        if (record.featured) {
                            return '<input type="checkbox" disabled="true" checked/>';
                        } else {
                            return '<input type="checkbox" disabled="false" />';
                        }
                    }
                  }
                  else{
                    return '<input type="checkbox" style= "display:none" disabled="true" checked/>';
                  }
                }

            },
            { field: 'actions', caption: 'Actions', size: '5%',
                render: function (record) {
                    var activeRoutePath = thisTable.getActiveRoutePath();
                    var editHref = "#/edit/" + record.recid,
                        overviewHref = thisTable.makeHref(activeRoutePath, thisTable.getParams(), {
                            listing: record.recid,
                            action: 'view',
                            tab: 'overview'
                        }),
                        deleteHref = thisTable.makeHref(activeRoutePath, thisTable.getParams(), {
                            listing: record.recid,
                            action: 'delete'
                        }),
                        feedbackHref = thisTable.makeHref(activeRoutePath, thisTable.getParams(), {
                            listing: record.recid,
                            action: 'feedback'
                        });

                    var status = record.status,

                        actions = '<label class="AdminOwnerListingTable__actionMenu">';

                    if(status === 'DELETED'){
                      return null;
                    }
                    actions += '<a key="link" href="'+editHref+'" title="Edit"><i class="icon-pencil-12-blueDark"/></a>';
                    if (status === 'APPROVED' || status === 'PENDING_DELETION') {
                        actions += '<a key="view" href="'+overviewHref+'" title="View"><i class="icon-eye-12-blueDark"/></a>';
                    } else {
                        actions += '<a key="prev" href="'+overviewHref+'" title="Preview"><i class="icon-eye-12-blueDark"/></a>';
                    }

                    if (status === 'REJECTED') {
                        actions += '<a key="feedback" href="'+feedbackHref+'" title="Feedback"><i class="icon-feedback-12-blueDark"/></a>';
                    }
                    if (status !== 'PENDING_DELETION'){
                        actions += '<a key="del" href="'+deleteHref+'" title="Delete"><i class="icon-trash-12-blueDark"/></a>';
                    }
                    actions += '</label>';
                    return actions;
                  }
            }
        );
        return columns;
    },

    convertStatus: function (status) {
        var displayStatus="";
        if (status === "APPROVED") {
            displayStatus = "Published";
        } else if (status === "APPROVED_ORG") {
            displayStatus = "Org Approved";
        } else if (status === "PENDING") {
            displayStatus = "Pending, Org";
        } else if (status === "IN_PROGRESS") {
            displayStatus = "Draft";
        } else if (status === "REJECTED") {
            displayStatus = "Returned";
        }else if (status === "DELETED") {
            displayStatus = "Deleted";
        }else if (status === "PENDING_DELETION") {
            displayStatus = "Pending Deletion";
        }
        return displayStatus;
    },

    getUnpaginatedList: function () {
        var results = UnpaginatedListingsStore.getListingsByFilter(this.props.filter);
        return results;
    },

    onStoreChanged: function () {
        var unpaginatedList = this.getUnpaginatedList();
        if (!unpaginatedList) {
            return;
        }

        var {data, counts } = unpaginatedList;

        var records = data.map( function (listing) {
            var result = {
                  recid: listing.id,
                  title: listing.title,
                  owners: listing.owners,
                  organization: listing.agency ? listing.agency : '',
                  comments: listing.whatIsNew ? listing.whatIsNew : '',
                  status: listing.approvalStatus,
                  updated: listing.editedDate,
                  enabled: listing.isEnabled ? "Enabled" : "Disabled",
                  featured: listing.isFeatured,
                  actions: null,
                  private: listing.isPrivate,
                  securityMarking: listing.securityMarking
              };
            if(listing.approvalStatus === 'DELETED'){
              result.enabled = null;
              result.featured = null;
            }

            return result;

        });
        if (this.grid) {
            this.grid.requestComplete('success','get-records', function(){});
            this.grid.records = records;
            if(counts.total !== this.grid.total)
              this.grid.total = counts.total;

            this.grid.refresh();
        }else{
            "warn";
        }

        this.props.onCountsChanged(counts);
    },

    onListingChangeCompleted: function () {
       this.onStoreChanged();
    },

    JSONToCSVConvertor: function (JSONData, ReportTitle, ShowLabel) {

        var arrData = typeof JSONData !== 'object' ? JSON.parse(JSONData) : JSONData;

        var CSV = '',
            row = '';
        CSV += ReportTitle + '\r\n\n';

        if (ShowLabel) {
            row = "";
            for (var index in arrData[0]) {
                row += index + ',';
            }
            row = row.slice(0, -1);
            CSV += row + '\r\n';
        }

        arrData.forEach( function (data, i) {
            row = "";
            for (var index in arrData[i]) {
                row += '"' + arrData[i][index] + '",';
            }
            row.slice(0, row.length - 1);
            CSV += row + '\r\n';
        });

        if (CSV === '') {
            alert("Invalid data");
            return;
        }

        var fileName = "ListingReport_" + ReportTitle.replace(/ /g,"_");

        var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

        var link = document.createElement("a");
        link.href = uri;
        link.style.visibility = "hidden";
        link.download = fileName + ".csv";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    },
    convertToServerPropName: function(prop, ascending){
        var prefix = '';
        if(!ascending){
            prefix = '-';
        }
        switch (prop){
            case 'recid': return prefix + 'id';
            case 'organization': return prefix + 'agency__title'
            case 'status': return prefix + 'approval_status';
            case 'enabled': return prefix + 'is_enabled';
            //case 'featured': return prefix + 'is_featured';
            case 'private': return prefix + 'is_private';
            case 'owners': return prefix + 'owners__display_name';
            case 'securityMarking': return prefix + 'security_marking';
            case 'updated': return prefix + 'edited_date';
            default: return prefix + prop;
        }
    }
});

module.exports = TableView;
