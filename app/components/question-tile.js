import Ember from 'ember';

export default Ember.Component.extend({
  isQuestionShowing: false,
  updateQuestionForm: false,
  actions: {
    questionShow: function() {
      this.set('isQuestionShowing', true);
    },
    questionHide: function() {
      this.set('isQuestionShowing', false);
    },
    update(question, params) {
      this.sendAction('update', question, params);
    },
    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
console.log('hey');
