'use strict';

var React = require('react');
var UserNotificationDropdown = require('ozp-react-commons/components/notification/UserNotificationDropdown.jsx');
var HelpModal = require('./helpmodal.jsx');
var NotificationWindow = require('../notification/NotificationWindow.jsx');
var ProfileLink = require('../profile/ProfileLink.jsx');
var ModalLink = require('../ModalLink.jsx');
var { HUD_URL, METRICS_URL, WEBTOP_URL, DEVELOPER_RESOURCES_URL, LOGOUT_URL } = require('ozp-react-commons/OzoneConfig');
var CreateEditActions = require('../../actions/CreateEditActions');
var ProfileSearchActions = require('../../actions/ProfileSearchActions');

var SystemStateMixin = require('../../mixins/SystemStateMixin');

var ActiveState = require('../../mixins/ActiveStateMixin');
var { Navigation } = require('react-router');
var NavBar = React.createClass({

    mixins: [ SystemStateMixin, ActiveState, Navigation ],

    getInitialState: function() {
        return {
            showHelp: false
        };
    },

    componentDidMount: function(){
      $(this.refs.hastooltips.getDOMNode()).find('.tooltiped').each(function(){
        $(this).tooltip({
          delay: 400
        });
      });

      // TODO: Move this to a backend request checking profile for tour status.
      ProfileSearchActions.tourCheck();

    },

    render: function () {
        var Metrics = (this.isAdmin() || this.isOrgSteward()) ?
            <li><a href={METRICS_URL} target="_blank"><i className="icon-bar-graph-2-grayLightest"></i>Metrics</a></li> : '';

        var contactHref = this.makeHref( this.getActiveRoutePath(), this.getParams(), {
            contacts:true
        });
        var secondParty = this.state.currentUser.secondPartyUser;
        return (
            <nav ref="hastooltips" className="navbar navbar-inverse navbar-fixed-top" id="globalNav">
                <div className="container-fluid" id="centered">
                    <div className="navbar-left">
                        <ul className="nav navbar-nav">
                            <li id="tourstop-hud" className="tooltiped" data-toggle="tooltip" data-placement="bottom" title="HUD"><a className="lrg" href={HUD_URL}><i className="icon-home-grayLightest"></i><span className="hidden-span">HUD</span></a></li>
                            <li id="tourstop-center" className="active tooltiped" data-toggle="tooltip" data-placement="bottom" title="Center"><a className="lrg" href='' ><i className="icon-shopping-grayLightest activeIcon"></i><span className="hidden-span">Center</span></a></li>
                            { !secondParty &&
                              <li id="tourstop-webtop" className="tooltiped" data-toggle="tooltip" data-placement="bottom" title="Webtop"><a className="lrg" href={WEBTOP_URL}><i className="icon-layout-grayLightest"></i><span className="hidden-span">Webtop</span></a></li>
                            }
                        </ul>
                    </div>

                    <div className="navbar-right">
                        <ul className="nav navbar-nav">
                            <UserNotificationDropdown moreNotifications={this.showNotificationsModal}/>
                            <li className="tooltiped" data-toggle="tooltip" data-placement="bottom" title="Help">
                                <a href="#" id="tourstop-help" onClick={this.showHelpModal}><i className="icon-question-grayLightest"></i><span className="hidden-span">Help</span></a>
                            </li>
                            <li data-toggle="tooltip" id="tourstop-global-menu" data-placement="bottom" title="Menu" className="dropdown user-menu-dropdown tooltiped">
                                <a href="#" className="lrg" data-toggle="dropdown"><i className="icon-menu-grayLightest"></i><span className="hidden-span">Menu</span></a>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-header">Account</li>
                                    <li><a href={HUD_URL}><i className="icon-ribbon-grayLightest"></i>Bookmarks</a></li>
                                    <li>
                                        <ProfileLink profileId="self">
                                            <i className="icon-head-grayLightest"/>Profile
                                        </ProfileLink>
                                    </li>
                                    { (LOGOUT_URL && LOGOUT_URL !== "") &&
                                        <li><a href={LOGOUT_URL}><i className="icon-rewind-grayLightest"></i>Logout</a></li>
                                    }
                                    { !secondParty &&
                                        <li className="divider"></li>
                                    }
                                    { !secondParty &&
                                        <li className="dropdown-header">Create</li>
                                    }
                                    { !secondParty &&
                                        <li><a href={'#/edit'} onClick={()=>{
                                              CreateEditActions.resetForm();
                                          }}><i className="icon-square-plus-grayLightest"></i>Submit a Listing</a></li>
                                    }
                                    { !secondParty &&
                                        <li><a href={DEVELOPER_RESOURCES_URL} target="_blank"><i className="icon-cloud-grayLightest"></i>Developer Resources</a></li>
                                    }
                                    {!secondParty &&
                                      <li className="divider"></li>
                                    }
                                    { !secondParty &&
                                      <li className="dropdown-header">Manage</li>
                                    }
                                    { !secondParty &&
                                      <li><a href={'#/user-management/my-listings'}><i className="icon-layers-grayLightest"></i>Listing Management</a></li>
                                    }
                                    { this.isAdmin() &&
                                        <li><a href={'#/mall-management/categories'}><i className="icon-shopping-settings-grayLightest"></i>Center Settings</a></li>
                                    }
                                    { Metrics }
                                    <li><a href={contactHref} className="caboose" ><i className="icon-speech-bubble-grayLightest"></i>Contact</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                {
                    this.state.showHelp && <HelpModal onHidden={this.onModalHidden} />
                }
                {
                    this.state.showNotifications && <NotificationWindow onHidden={this.onModalHidden} />
                }
            </nav>
        );
    },

    isOrgSteward: function(){
        return (this.state.currentUser.highestRole === "ORG_STEWARD") ? true : false;
    },

    isAdmin: function() {
        return this.state.currentUser.isAdmin();
    },

    showHelpModal: function () {
        this.setState({ showHelp: true });
        return false;
    },

    showNotificationsModal: function () {
        this.setState({ showNotifications: true });
    },

    onModalHidden: function () {
        this.setState({ showHelp: false, showNotifications: false });
    },


});

module.exports = NavBar;
