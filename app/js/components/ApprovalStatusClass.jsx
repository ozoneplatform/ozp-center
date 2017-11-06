'use strict';

var React = require('react');
var Reflux = require('reflux');
var { UserRole } = require('ozp-react-commons/constants');
var listingStatus = require('ozp-react-commons/constants').approvalStatus;

var getRenderingVariables = {

    getVariables: function(listing, status, role){
        var controls, statusClass, iconClass;
        switch (status) {
            case 'APPROVED':
                statusClass = 'published';
                iconClass= 'icon-thumbs-up-14';
                break;

            case 'PENDING_DELETION':
                statusClass = 'label-pending';
                iconClass= 'icon-delete-14-redOrangeDark';
                break;

            case 'IN_PROGRESS':
                statusClass = 'label-draft';
                iconClass= 'icon-paper-14';
                break;


            case 'DELETED':
                statusClass = 'label-deleted';
                iconClass= 'icon-trash-12-blueDarker';
                break;

            case 'PENDING':
                 if (role === "orgSteward"){
                    statusClass = 'label-needs-action';
                    iconClass= 'icon-exclamation-14';
                }else{
                    statusClass = 'label-pending';
                    iconClass= 'icon-loader-14';
                }
                break;


            case 'APPROVED_ORG':
                if (role === "admin"){
                    statusClass = 'label-needs-action';
                    iconClass= 'icon-exclamation-14';
                }else{
                    statusClass = 'label-pending';
                    iconClass= 'icon-loader-14';
                }
                break;

            case 'REJECTED':
                statusClass = 'label-needs-action';
                iconClass= 'icon-exclamation-14';
                break;
        }

        return {
            statusClass: statusClass,
            iconClass: iconClass
        };
    }
}



var ApprovalStatusClass = React.createClass({

    propTypes: {
        listing: React.PropTypes.object,
        user: React.PropTypes.object,
        style: React.PropTypes.object
    },

    getInitialState: function() {
        return {listing: this.props.listing, user: this.props.object};
    },

    render: function(){
        var listing = this.props.listing,
        user = this.props.user,
       status = listing.approvalStatus,
       statusText = listingStatus[listing.approvalStatus],
       isAdmin = true,
       role = null;
       var lockStyle = this.props.style;
       if (user.isOrgSteward(listing.agencyShort)) {
           role = "orgSteward";
       }else if(user.isAdmin()){
           role = "admin";
       }
       var classes = getRenderingVariables.getVariables(listing, status, role);
        return(
            <i className={classes.iconClass} style={lockStyle}></i>
        );
    }

});

module.exports = ApprovalStatusClass;
