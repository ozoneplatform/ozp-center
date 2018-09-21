'use strict';

var React = require('react');
var Reflux = require('reflux');

var ErrorActions = require('ozp-react-commons/actions/ErrorActions');
var ErrorStore = require('ozp-react-commons/stores/ErrorStore');
var ErrorWindow = require('ozp-react-commons/components/error/ErrorWindow.jsx');

var TagSubscriptionActions = require('ozp-react-commons/actions/TagSubscriptionActions');
var TagSubscriptionStore = require('ozp-react-commons/stores/TagSubscriptionStore');

var DetailedQuery = React.createClass({
    mixins: [Reflux.connect(ErrorStore, "errorStoreData"), Reflux.connect(TagSubscriptionStore, "tagSubscriptionStore"), Reflux.listenerMixin],

    getInitialState: function(){
        ErrorActions.fetchEsStatus();
        TagSubscriptionActions.fetchSubscriptions();

      return {
      };
    },

    removeQueryString: function(){
        this.props.reset();
    },

    getQueryString: function(){
      if(this.props.data.queryString){
        var prettyQuery = this.props.data.queryString.split(' ').map((string, i)=>{
          return (
            <span key={`getQueryString.${i}`} className="label label-default">
              {string}
            </span>
          );
        });
        return (
          <span>
            for listings matching&nbsp;
            { this.props.data.queryString &&
               <span>
                 {prettyQuery}
               </span>
            }
          </span>
        );
      }
    },

    getTypes: function(){
      if(this.props.data.type.length){
        var prettyTypes = this.props.data.type.map((type, i)=>{
          /*
          <i className="icon-cross-14-white" onClick={()=>{
            var types = this.props.data.type;
            types.splice(types.indexOf(type), 1);
            this.props.onTypeChange(types);
          }}></i>*/
          return (
            <span key={`getTypes.${i}`}>
              <span className="label label-default">
                {type}
              </span>
              {(i !== this.props.data.type.length -1) &&
                <span>&#32;or&#32;</span>
              }
            </span>
          );
        });
        return (
          <span>
            &nbsp;with the type {prettyTypes}
          </span>
        );
      }else{
        return false;
      }
    },
    getOrgs: function(){
      if(this.props.data.agency.length){
        var prettyOrgs = this.props.data.agency.map((agent, i)=>{
          /*
          <i className="icon-cross-14-white" onClick={()=>{
            var orgs = this.props.data.agency;
            orgs.splice(orgs.indexOf(agent), 1);
            this.props.onOrganizationChange(orgs);
          }}></i>*/
          return (
            <span key={`getOrgs.${i}`}>
              <span className="label label-default">
                {agent}
              </span>
              {(i !== this.props.data.agency.length -1) &&
                <span>&#32;or&#32;</span>
              }
            </span>
          );
        });
        return (
          <span>
            &nbsp;in the organization {prettyOrgs}
          </span>
        );
      }else{
        return false;
      }
    },

    getTags: function(){

      if(this.props.data.tags.length){
        var prettyTags;
        if(this.props.data.tags.length > 1){
          prettyTags = this.props.data.tags.map((tag, i)=>{
            return (
              <span key={`getTags.${i}`}>
                <span  className="label label-default">
                  {tag}
                </span>
                {(i !== this.props.data.tags.length -1) &&
                  <span>&#32;or&#32;</span>
                }
              </span>
            );
          });
        }else{
          prettyTags = this.props.data.tags.map((tag)=>{
              var me = this;
              var subscribeLink = null;
              var divider = null;
              if (this.state.tagSubscriptionStore)  {
                  let foundSubscription = false;
                  this.state.tagSubscriptionStore.forEach(function(element) {
                      if (element.entity_id == me.props.data.tagId && me.props.data.tagId.length > 0) {
                          foundSubscription = true;
                          divider = <span className="divider"> | </span>;
                          subscribeLink = <a className="tag_subscribe" onClick={(e) => {me.unsubscribeToTag(e, element)}} >Unsubscribe</a>;
                      }
                  });
                  //last conditional is a fix for subscription store not being null even if it hasn't loaded yet
                  if(this.props.data.tagId.length > 0 && (this.state.tagSubscriptionStore.length === 0 || (!foundSubscription && this.state.tagSubscriptionStore[0].entity_id))){
                      divider = <span className="divider"> | </span>;
                      subscribeLink = <a className="tag_subscribe" onClick={(e) => {this.subscribeToTag(e)}} >Subscribe</a>;
                  }
              }

            return (
              <span key="getTags" className="label label-default">
                {tag} {divider} {subscribeLink}
              </span>
            );
          });
        }
        return (
          <span>
            &nbsp;with the {(this.props.data.tags.length > 1) ? 'tags' : 'tag'} {prettyTags}
          </span>
        );
      }else{
        return false;
      }
    },

    getCategories: function(){
      if(this.props.data.categories.length){
        var prettyCats;
        if(this.props.data.categories.length > 1){
          prettyCats = this.props.data.categories.map((cat, i)=>{
            return (
              <span key={`getCategories.${i}`}>
                <span  className="label label-default">
                  {cat}
                </span>
                {(i !== this.props.data.categories.length -1) &&
                  <span>&#32;or&#32;</span>
                }
              </span>
            );
          });
        }else{
          prettyCats = this.props.data.categories.map((cat)=>{
            return (
              <span key="getCategories" className="label label-default">
                {cat}
              </span>
            );
          });
        }
        return (
          <span>
            &nbsp;with the {(this.props.data.categories.length > 1) ? 'categories' : 'category'} {prettyCats}
          </span>
        );
      }else{
        return false;
      }
    },

    subscribeToTag: function(event) {
        TagSubscriptionActions.subscribeToTag(this.props.data.tagId[0]);
        event.stopPropagation();
    },

    unsubscribeToTag: function(event, tag) {
        var me = this;

        this.state.tagSubscriptionStore.forEach(function(element) {
            if (element.entity_id == me.props.data.tagId && element.entity_type === "tag") {
                TagSubscriptionActions.unsubscribeToTag(element);
            }
        });
        event.stopPropagation();
    },

    render() {
        var subscribeLink = null;
        var me = this;



        if (this.state.errorStoreData) {
            return (
              <div>
                <ErrorWindow errorMessage="Search is currently unavailable. Please try again in a few minutes."/>
              </div>
          );
        } else {
            return (
              <div className="resultsDiv">
                {this.getQueryString()}
                {this.getTypes()}
                {this.getOrgs()}
                {this.getCategories()}
                {this.getTags()}
                {subscribeLink}
              </div>
          );
        }

    }

});

module.exports = DetailedQuery;
