import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    saveAnswer() {
      var params = {
        responder: this.get('responder'),
        response: this.get('response'),
        addition: this.get('addition'),
        question: this.get('question')
      };
      console.log(params.question);
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
