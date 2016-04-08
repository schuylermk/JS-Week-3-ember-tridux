import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('question', {path: '/questions/:question_id'});
  this.route('answer', {path: '/answers/:answer_id'});
});

export default Router;
