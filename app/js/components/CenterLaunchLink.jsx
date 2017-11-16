'use strict';

var React = require('react');
var Reflux = require('reflux');
var { Navigation, CurrentPath } = require('react-router');
var State = require('../mixins/ActiveStateMixin');
var SelfStore = require('ozp-react-commons/stores/SelfStore');
var CurrentProfileStore = require('ozp-react-commons/stores/CurrentProfileStore');
var ProfileActions = require('ozp-react-commons/actions/ProfileActions');
var {APP_TITLE} = require('ozp-react-commons/OzoneConfig');

var ListingActions = require('../actions/ListingActions');

var Modal = require('ozp-react-commons/components/Modal.jsx');
var timeout = null, timer = null;

//Launch Notice Dialog timeout, in seconds
var time = 45;

function getState(profileData) {
    var profile = profileData.currentUser,
        launchInWebtop = profile ? profile.launchInWebtop : false;

    return {launchInWebtop: launchInWebtop,
            launchWarning: false,
            timeout: null,
            leavingOzpWarningFlag: true
        };
}

/**
 * A link for launching applications.  Depending on the user's preference,
 * this will either launch into webtop (in a new tab) or just in a new tab
 */
var CenterLaunchLink = React.createClass({
    mixins: [Reflux.listenTo(SelfStore, 'onStoreUpdate'), Reflux.connect(SelfStore), Navigation, CurrentPath, State],

    propTypes: {
        listing: React.PropTypes.object.isRequired
    },

    getInitialState: function() {
        return getState(SelfStore.getDefaultData());
    },

    onStoreUpdate: function(profileData) {
        this.setState(getState(profileData));
    },

    componentDidMount: function(){
      $(this.refs.tooltipped.getDOMNode()).tooltip({
        delay: 400
      });
      this.setState({'timeleft': time});
    },

    launchClick: function(){
        var listingLaunchFn = ListingActions.launch.bind(null, this.props.listing, (this.state.currentUser.leavingOzpWarningFlag));
        listingLaunchFn();

        this.setState({
            'launchWarning': true
        });

        if (this.state.leavingOzpWarningFlag == true && this.state.currentUser.leavingOzpWarningFlag == true) {
            var me = this;

            timeout = setTimeout(function(){
                me.reset();
            }, me.state.timeleft*1000);

            timer = setInterval(function(){
                me.setState({'timeleft':me.state.timeleft-1});
                if(me.state.timeleft <= 0)
                    clearInterval(timer);
            }, 1000);
        }
    },

    modalConfirmation: function(){
        var profile = this.state.currentUser;
        profile.leavingOzpWarningFlag = this.state.leavingOzpWarningFlag;

        ProfileActions.updateProfileFlags(profile);
        ProfileActions.fetchProfile(profile.profileId);

        this.reset();
    },

    optWarning: function(event) {
        if (event.target.value == 'true' || event.target.value == true) {
            this.setState({
                leavingOzpWarningFlag: false,
                showTimeout: false
            });
        } else {
            this.setState({
                leavingOzpWarningFlag: true,
                showTimeout: false
            });
        }
    },

    goToContactOwners: function(){
        this.reset();

        var href = this.makeHref(this.getActiveRoutePath(),this.getParams(), {
            listing: this.props.listing.id,
            action: 'view',
            tab: 'details',
            isResponding: true
        });

        window.location.replace(href);

    },

    goToDetails: function(){
        this.reset();

        var href = this.makeHref(this.getActiveRoutePath(),this.getParams(), {
            listing: this.props.listing.id,
            action: 'view',
            tab: 'details'
        });

        window.location.replace(href);

    },

    cancelTimer : function(e){
        this.setState({'showTimeout': false, 'timeleft': time});
        clearTimeout(timeout);
        clearInterval(timer);
        e.preventDefault();
        e.stopPropagation();
    },

    reset: function(){
        this.setState({
            'launchWarning': false,
            'timeleft': time,
            'showTimeout': undefined
        });
        clearTimeout(timeout);
        clearInterval(timer);
    },

    render: function() {
        var { className, ...otherProps } = this.props,
            linkClassName = className ? className + ' btn' : 'btn';
        var launchWarning = this.state.launchWarning;
        var { listing } = this.getQuery();
        var modalClass = "LaunchConfirmation"
        if(!listing)
            modalClass += ' listingLaunchConfirmation';

        var launchModal = this.state.currentUser && this.state.currentUser.leavingOzpWarningFlag ? (<Modal ref="modal" className={modalClass} size="small" modaltitle={"Notice: You are leaving " + APP_TITLE + "!"} onCancel={this.modalConfirmation}>
                  <strong>
                      <p className="LaunchConfirmation__content">Please review the requirements below if you have problems launching <b>{this.props.listing.title}</b>:</p>
                      <br/>
                      { listing &&
                          <div className="LaunchConfirmation__columns">
                              <h5>Usage Requirements</h5>
                              <p>{this.props.listing.usage_requirements}</p>

                              <h5>System Requirements</h5>
                              <p>{this.props.listing.system_requirements}</p>
                          </div>
                      }
                      {!listing &&
                          <button style={{'marginBottom': '40px'}} className="btn btn-info" onClick={this.goToDetails}>Click Here</button>
                      }
                      <span style={{'clear': 'both'}}>
                          <p>Or contact the owners of {this.props.listing.title} by clicking here:
                          <button className="btn btn-info" onClick={this.goToContactOwners}>Contact Owners</button></p>
                      </span>
                  </strong>
                  {this.state.showTimeout == undefined && <p>This window will close automatically in {this.state.timeleft} second{this.state.timeleft == 1 ? '' : 's'}... <a href="#" onClick={this.cancelTimer}> [cancel]</a></p>}
                  <section>
                      <input type="checkbox" className="checkbox" onChange={this.optWarning} value={this.state.leavingOzpWarningFlag}></input>
                      <p className="checkbox-text">Do not show again</p>
                      <br/>
                  </section>
                  <button className="btn btn-danger" onClick={this.modalConfirmation}>OK</button>
              </Modal>)
          : null;

        return (
            <div style={{float: 'left', marginRight: '-1px'}}>
                <button ref="tooltipped" data-toggle="tooltip" data-placement="top" alt="Click to launch this app" title="Launch" { ...otherProps } className={linkClassName}
                        onClick={this.launchClick}>
                    <i className="icon-open-grayDark" /><span className="hidden-span">Launch</span>
                </button>
                {launchWarning ? launchModal : null}
            </div>
        );
    }
});

module.exports = CenterLaunchLink;
