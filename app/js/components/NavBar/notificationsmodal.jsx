'use strict';

var React = require('react');
var Reflux = require('reflux');
var SystemStateMixin = require('../../mixins/SystemStateMixin');
var ProfileActions = require('../../actions/ProfileActions.js');
var NotificationActions = require('../../actions/NotificationActions.js');
var SelfActions = require('ozp-react-commons/actions/ProfileActions.js');

var marked = require('marked');
var renderer = new marked.Renderer();

// Disable heading tags
renderer.heading = function (text, level) {
  return '<span>' + text + '</span>';
};

renderer.link = function (href, title, text) {
  return `<a href="${href}" target="_blank">${text}</a>`;
};


var NotificationsModal = React.createClass({
    mixins: [ Reflux.ListenerMixin ],

    getInitialState: function() {
      return {
        notificationList: [],
        activeNotification: 0,
      };
    },

    componentDidMount: function() {
        this.listenTo(NotificationActions.fetchOwnNotificationsCompleted, n => {
          this.setState({
            notificationList: n
          });
        });

        this.listenTo(SelfActions.dismissNotificationCompleted, () => {
          NotificationActions.fetchOwnNotifications();
        });
        NotificationActions.fetchOwnNotifications();

        $(this.getDOMNode())
            .one('shown.bs.modal', () => {
                if (this.props.onShown) {
                    this.props.onShown();
                }
            })
            .one('hidden.bs.modal', () => {
                if (this.props.onHidden) {
                    this.props.onHidden();
                }
            })
            .modal({
                backdrop: 'static',
                keyboard: false,
                show: true
            });
    },

    makeSidebar: function() {
      var notis = this.state.notificationList.slice();

      return notis.map((n, i) => {
        var date = new Date(n.createdDate);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        var formattedDate = (months[date.getMonth() + 1]) + ' ' + date.getDate() + ', ' +  date.getFullYear();
        return (
          <li role="presentation" alt={`Notification ${i + 1} from ${n.author.user.username}`} tabIndex={i} onClick={() => {
              this.setState({
                activeNotification: i
              });
            }}>
            <a href="#" onClick={(e) => {e.preventDefault()}}>
              {n.author.user.username} <small>{formattedDate}</small>
            </a>
          </li>
        );
      });
    },

    makeNotification: function(n) {
      var createNotificationText = function() {
        return {__html: marked(n.message, { renderer: renderer })};
      };
      var date = new Date(n.createdDate);
      var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
      var formattedDate = (months[date.getMonth() + 1]) + ' ' + date.getDate() + ', ' +  date.getFullYear();
      return (
        <div>
          <div className="row" tabIndex={0}>
            <h4>{n.author.user.username} <small>{formattedDate}</small></h4>
            <p>
              <div dangerouslySetInnerHTML={createNotificationText()} />
              <br /><br />
              <button className="btn btn-danger right" aria-label={`Remove notification from ${n.author.user.username}`} onClick={() => {
                  this.onDismiss(
                    this.state.notificationList[this.state.activeNotification]
                  );
                }}>
                Remove Notification
              </button>
            </p>
          </div>
        </div>
      );
    },

    onDismiss(notification) {
      SelfActions.dismissNotification(notification);
    },

    render: function () {
        return (
            <div className="modal fade" role="dialog" aria-hidden="true">
                <div className="modal-dialog  modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">
                          <span aria-hidden="true"><i className="icon-cross-16"></i></span><span className="sr-only">Close</span>
                        </button>
                        <h3 className="modal-title">Notifications</h3>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                              <div className="col-xs-4">
                                <ul className="nav nav-pills nav-inverse nav-stacked">
                                  {this.makeSidebar()}
                                </ul>
                              </div>
                              <div className="col-xs-8">
                                { this.state.notificationList.length &&
                                  <div>
                                    {
                                      this.makeNotification(
                                        this.state.notificationList[this.state.activeNotification]
                                      )
                                    }
                                  </div>
                                }

                                { !this.state.notificationList.length &&
                                  <span>Loading...</span>
                                }
                              </div>
                            </div>
                            {/*
                            <div className="row">
                              <div className="col-xs-12 form-inline">
                                <fieldset className="form-group">
                                  <label for="exampleSelect1">Sort By: &nbsp;</label>
                                  <select className="form-control" id="exampleSelect1">
                                    <option>Date</option>
                                  </select>
                                  &nbsp;&nbsp;
                                  <label for="exampleSelect1">From Sender: &nbsp;</label>
                                  <select className="form-control" id="exampleSelect1">
                                    <option>Apps Mall</option>
                                  </select>
                                </fieldset>
                              </div>
                            </div>
                            */}

                        </div>
                    </div>
                </div>
            </div>
        );
    }

});

module.exports = NotificationsModal;
