import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    save1() {
      var params = {
        author: this.get('author'),
        subject: this.get('subject'),
        content: this.get('content'),
      };
      this.set('addNewQuestion', false);
      this.sendAction('save2', params);
    }
  }
});
