'use strict';

var React = require('react');
var Reflux = require('reflux');
var Modal = require('ozp-react-commons/components/Modal.jsx');
var Router = require('react-router');
var Navigation = Router.Navigation;
var AjaxMixin = require('../../mixins/AjaxMixin');
var ActiveStateMixin = require('../../mixins/ActiveStateMixin');

var GlobalListingStore = require('../../stores/GlobalListingStore');
var ListingActions = require('../../actions/ListingActions');

var _ = require('../../utils/_');

var UndeleteConfirmation = React.createClass({

    propTypes: {
        errorMessage: React.PropTypes.string,
        onHidden: React.PropTypes.func,
        onDelete: React.PropTypes.func.isRequired
    },

    getDefaultProps: function () {
        return {
            onHidden: _.noop
        };
    },

    getInitialState: function () {
        return {};
    },

    render: function () {
        var kind = this.props.kind,
            title = this.props.title,
            onDelete = this.props.onDelete,
            errorMessage = this.props.errorMessage;

        return (
            <Modal ref="modal" className="DeleteConfirmation" size="small" onHidden={this.props.onHidden}>
                <button className="close corner" data-dismiss="modal"><i className="icon-cross-16"></i></button>
                {
                    errorMessage && <div className="alert alert-danger">{errorMessage}</div>
                }
                <strong>
                    Are you sure that you would like to return the {kind} &quot;{title}&quot; to the center listing store?
                </strong>
                <button className="btn btn-default" data-dismiss="modal">Cancel</button>
                <button className="btn btn-danger" onClick={onDelete}>Undelete</button>
            </Modal>
        );
    },

    close: function () {
        this.refs.modal.close();
    }
});

var ListingUndeleteConfirmation = React.createClass({

    propTypes: {
        /**
         * Listing ID
         */
        listing: React.PropTypes.string.isRequired
    },

    mixins: [ Reflux.ListenerMixin, Navigation, AjaxMixin, ActiveStateMixin ],

    getInitialState: function () {
        return this.getState();
    },

    componentDidMount: function() {
        this.listenTo(GlobalListingStore, this.onStoreChange);
        this.listenTo(ListingActions.undeleteCompleted, this.onUndeleteComplete)
    },

    getState: function () {
        return {
            listing: GlobalListingStore.getById(this.props.listing)
        };
    },

    onStoreChange: function () {
        this.setState(this.getState());
    },

    onUndeleteComplete: function () {
      sweetAlert({
          title: "Undelete complete",
          text: "The listing has been returned to the Agency's content steward for approval.",
          type: "info",
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "ok",
          closeOnConfirm: true,
          html: false
      });
        this.close();
    },

    render: function () {
        var listing = this.getListing();
        if (!listing) {
            return null;
        }
        var title = listing.title;

        return (
            <UndeleteConfirmation ref="modal" kind="listing" title={title}
                errorMessage={this.state.errorMessage}
                onHidden={this.onHidden} onDelete={this.onUndelete}/>
        );
    },

    getListing: function () {
        return this.state.listing;
    },

    close: function () {
        if(this.refs.modal)
            this.refs.modal.close();
        if (this.getActiveRoute().name === 'edit') {
            this.transitionTo('my-listings');
        }
    },

    onHidden: function () {
      if(this.getActiveRoute().name ==='org-listings'){
        var url = document.URL
        var urlSplit = url.split("?");
        location.replace(urlSplit[0])
      }
      else if (this.getActiveRoute().name === 'edit'){
        url = document.URL
        urlSplit = url.split("?");
        location.replace(urlSplit[0])
      }
      else{
        this.transitionTo('my-listings');
      }
    },

    onUndelete: function () {
        var listing = this.getListing();
        ListingActions.undelete(listing);
        //this.close()
    }
});

module.exports = {
    UndeleteConfirmation: UndeleteConfirmation,
    ListingUndeleteConfirmation: ListingUndeleteConfirmation
};
