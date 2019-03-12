import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('index');
  this.route('widgets');
  this.route('twitter' , {path:'/'});
  this.route('general-ui');
  this.route('comingsoon');
  this.route('ui-icons');
  this.route('ui-buttons');
  this.route('ui-timeline');
  this.route('ui-modals');
  this.route('login');
  this.route('users', function() {
    this.route('show', {path: ':user_id'});
  });
});
