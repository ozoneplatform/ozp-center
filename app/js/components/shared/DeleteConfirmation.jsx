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

var DeleteConfirmation = React.createClass({

    propTypes: {
        errorMessage: React.PropTypes.string,
        onHidden: React.PropTypes.func,
        onCancel: React.PropTypes.func,
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
            onCancel = this.props.onCancel,
            errorMessage = this.props.errorMessage;
        var content = <div>
        <strong>
            Are you sure that you would like to delete the {kind}{title}?
        </strong>
        <button className="btn btn-default" data-dismiss="modal" onClick={onCancel}>Cancel</button>
        <button className="btn btn-danger" onClick={onDelete}>Delete</button></div>;

        if (errorMessage) {
            content = <div>
                <div className="alert alert-danger">{errorMessage}</div>
                <button className="btn btn-default" data-dismiss="modal">OK</button>
            </div>;
        }

        return (
            <Modal ref="modal" className="DeleteConfirmation" size="small" onHidden={this.props.onHidden}>
                {content}
            </Modal>
        );
    },

    close: function () {
        this.refs.modal.close();
    }
});

var ListingDeleteConfirmation = React.createClass({

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
        this.listenTo(ListingActions.deleteListingCompleted, this.onDeleteComplete);
        this.listenTo(ListingActions.deleteListingFailed, this.handleError);
    },

    getState: function () {
        return {
            listing: GlobalListingStore.getById(this.props.listing)
        };
    },

    onStoreChange: function () {
        this.setState(this.getState());
    },

    onDeleteComplete: function () {
        sweetAlert({
            title: "Deletion complete",
            text: "The listing has been deleted.",
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
        var title = ' "' + listing.title + '"';

        return (
            <DeleteConfirmation ref="modal" kind="listing" title={title}
                errorMessage={this.state.errorMessage}
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
        this.transitionTo(this.getActiveRoutePath(), {listingId: this.state.listing.id});
    },

    onDelete: function () {
        var listing = this.getListing();

        ListingActions.deleteListing(listing);
    }
});

module.exports = {
    DeleteConfirmation: DeleteConfirmation,
    ListingDeleteConfirmation: ListingDeleteConfirmation
};
