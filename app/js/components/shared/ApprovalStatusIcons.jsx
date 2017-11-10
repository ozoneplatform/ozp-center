'use strict';

var React = require('react');
var Reflux = require('reflux');


function getVariables (status, role, owner){
    var iconClass;
    switch (status) {
        case 'APPROVED':
        iconClass= 'icon-thumbs-up-14';
        break;

        case 'PENDING_DELETION':
        iconClass= 'icon-delete-14-redOrangeDark';
        break;

        case 'IN_PROGRESS':
        iconClass= 'icon-paper-14';
        break;

        case 'DELETED':
        iconClass= 'icon-trash-12-blueDarker';
        break;

        case 'PENDING':
        if (role === "orgSteward" && !owner){
            iconClass= 'icon-exclamation-14';
        }else{
            iconClass= 'icon-loader-14';
        }
        break;

        case 'APPROVED_ORG':
        if (role === "admin" && !owner){
            iconClass= 'icon-exclamation-14';
        }else{
            iconClass= 'icon-loader-14';
        }
        break;

        case 'REJECTED':
        if (role !== null && !owner){
            iconClass= 'icon-reload-14';
        }else{
            iconClass= 'icon-exclamation-14';
        }
        break;
    }

    return {
        iconClass: iconClass
    };
}

var ApprovalStatusIcons = React.createClass({

    propTypes: {
        listing: React.PropTypes.object,//pass listing
        user: React.PropTypes.object,//pass user to determine if admin
        definedStatus: React.PropTypes.string,//pass status to shortcut dynamic creation
        userType: React.PropTypes.string,//pass user type when shortcutting to get correct icon. usertype expects "admin"/"orgSteward"/"user"
    },

    getInitialState: function() {
        return {listing: this.props.listing, user: this.props.object};
    },

    render: function(){
        var role = null,
        owner = false;
        if (this.props.definedStatus != null){
            status = this.props.definedStatus;
            if (this.props.userType) {
                role=this.props.userType;
            }
        }else{
            var listing = this.props.listing,
            user = this.props.user,
            status = listing.approvalStatus;
            if (user.highestRole === 'APPS_MALL_STEWARD') {
                role = "admin";
            }else if(user.highestRole === 'ORG_STEWARD'){
                role = "orgSteward";
            }
            if(listing.owners != undefined && listing.owners[0].id === user.id){
                owner = true;
            }
        }

        var classes = getVariables(status, role, owner);
        return(
            <i className={classes.iconClass}></i>
        );
    }
});

module.exports = ApprovalStatusIcons;
