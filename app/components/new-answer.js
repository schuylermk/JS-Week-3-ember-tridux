import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },

    save1() {
      var params = {
        responder: this.get('responder'),
        response: this.get('response'),
        addition: this.get('addition'),
      };
      this.set('addNewAnswer', false);
      this.sendAction('save2', params);
    }
  }
});
