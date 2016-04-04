import Ember from 'ember';

  var questions = [{
    author: "Jim",
    content: "How much is it?",
    notes: "per month"
  }, {
    author: "Liina",
    content: "Where is it?",
    notes: "What area"
  }, {
    author: "Jordan",
    content: "What is in it for me?",
    notes: "What do I get?"
  }];

export default Ember.Route.extend({
  model() {
    return questions;
  },
});
