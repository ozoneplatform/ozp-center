'use strict';

var React = require('react');
var Reflux = require('reflux');
var Modal = require('ozp-react-commons/components/Modal.jsx');
var Router = require('react-router');
var Navigation = Router.Navigation;
var AjaxMixin = require('../../mixins/AjaxMixin');
var ActiveStateMixin = require('../../mixins/ActiveStateMixin');
var CurrentListingStore = require('../../stores/CurrentListingStore');
var GlobalListingStore = require('../../stores/GlobalListingStore');
var SystemStore = require('../../stores/SystemStore');
var ListingActions = require('../../actions/ListingActions');

var _ = require('../../utils/_');

var PendingDeleteConfirmation = React.createClass({

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
        return {
            showJustificationError: false
        };
    },

    render: function () {
        var kind = this.props.kind,
            title = this.props.title,
            onDelete = this.props.onDelete,
            errorMessage = this.props.errorMessage,
            requireJustification = this.props.requireJustification,
            showJustificationError = this.state.showJustificationError;

        return (
            <Modal ref="modal" className="DeleteConfirmation" size="small" onHidden={this.props.onHidden}>
                <button className="close corner" data-dismiss="modal"><i className="icon-cross-16"></i></button>
                {
                    errorMessage && <div className="alert alert-danger">{errorMessage}</div>
                }
                { !requireJustification &&
                    <strong>
                        Are you sure that you would like to pend the {kind} &quot;{title}&quot; for deletion ?
                    </strong>
                }
                { requireJustification &&
                    <div>
                        <strong>
                            Please enter a reason for pending the {kind} &quot;{title}&quot; for deletion
                        </strong>
                        <div className="form-group">
                            <textarea ref="justification" name="description" className="form-control" placeholder="Description" rows="4"></textarea>
                        </div>
                    </div>
                }
                { showJustificationError &&
                    <p className="text-danger">You must enter a reason</p>
                }
                <button className="btn btn-default" data-dismiss="modal">Cancel</button>
                <button className="btn btn-danger" onClick={this.onDeleteClick}>Pend for deletion</button>
            </Modal>
        );
    },

    onDeleteClick: function() {
        var onDelete = this.props.onDelete,
            requireJustification = this.props.requireJustification;

        if (requireJustification) {
            var justification = $(this.refs.justification.getDOMNode()).val();

            if (justification) {
                onDelete(justification);
                this.setState({ showJustificationError: false });
            }
            else {
                this.setState({ showJustificationError: true });
            }
        }
        else {
            onDelete();
        }
    },

    close: function () {
        this.refs.modal.close();
    }
});

var ListingPendingDeleteConfirmation = React.createClass({

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
        this.listenTo(ListingActions.pendingDeleteCompleted, this.onPendingDeleteComplete)
    },

    getState: function () {
        return {
            listing: GlobalListingStore.getById(this.props.listing)
        };
    },

    onStoreChange: function () {
        this.setState(this.getState());
    },

    onPendingDeleteComplete: function () {
        sweetAlert({
          title: "Pended for Deletion",
          text: "Your listing has been pended for deletion and is awaiting review from a content steward.",
          type: "info",
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Ok",
          closeOnConfirm: true,
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
            <PendingDeleteConfirmation ref="modal" kind="listing" title={title}
                errorMessage={this.state.errorMessage} requireJustification={true}
                onHidden={this.onHidden} onDelete={this.onDelete}/>
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

    onDelete: function (justification) {
        var listing = this.getListing();

        if (justification) {
            ListingActions.pendingDelete(listing, justification);
            //this.close()
        }
    }
});

module.exports = {
    PendingDeleteConfirmation: PendingDeleteConfirmation,
    ListingPendingDeleteConfirmation: ListingPendingDeleteConfirmation
};
