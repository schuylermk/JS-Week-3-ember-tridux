import Ember from 'ember';

export default Ember.Component.extend({
  isAnswerShowing: false,
  updateAnswerForm: false,
  actions: {
    delete(answer) {
      if (confirm('Are you sure you want to delete this answer?')) {
        this.sendAction('destroyAnswer', answer);
      }
    }
  }
});
