import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('near-earth', { path: 'near-earth/page/:page' });
  this.route('aliens-list', { path: 'aliens' });
  this.route('alien-new', { path: 'aliens/new' });
  this.route('alien-edit', { path: 'aliens:id' });
  this.route('cats', { path: 'cats' });
});

export default Router;
