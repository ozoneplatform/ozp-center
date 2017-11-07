'use strict';

var React = require('react');
var Reflux = require('reflux');
var { UserRole } = require('ozp-react-commons/constants');
var listingStatus = require('ozp-react-commons/constants').approvalStatus;

var getRenderingVariables = {

    getVariables: function(status, role, owner){
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
                 if (role === "orgSteward"){
                    iconClass= 'icon-exclamation-14';
                }else{
                    iconClass= 'icon-loader-14';
                }
                break;


            case 'APPROVED_ORG':
                if (role === "admin"){
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
}



var ApprovalStatusClass = React.createClass({

    propTypes: {
        listing: React.PropTypes.object,//pass listing
        user: React.PropTypes.object,//pass user to determine if admin
        style: React.PropTypes.object,//pass style to format icon
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
            status = listing.approvalStatus,
            lockStyle = this.props.style;
            if (user.isOrgSteward(listing.agencyShort)) {
                role = "orgSteward";
            }else if(user.isAdmin()){
                role = "admin";
            }
            if(listing.owners[0].id === user.id){
                owner = true;
            }
        }


        var classes = getRenderingVariables.getVariables(status, role, owner);
        return(
            <i className={classes.iconClass} style={lockStyle}></i>
        );
    }

});

module.exports = ApprovalStatusClass;
