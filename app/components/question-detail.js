import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    update(question) {
      var params = {
        author: this.get('author'),
        subject: this.get('subject'),
        content: this.get('content'),
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    },
    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    },
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answers', params);
      newAnswer.save();
      this.set('addNewAnswer', false);
      this.transitionTo('index');
    }
  }
});
