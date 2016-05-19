import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('project', {path:'/:project_id'});
  this.route('about');
  this.route('contact');
  this.route('completed-projects');
  this.route('upcoming-projects');
});

export default Router;
