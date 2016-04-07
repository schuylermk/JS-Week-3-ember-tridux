import DS from 'ember-data';

export default DS.Model.extend({
  responder: DS.attr(),
  response: DS.attr(),
  addition: DS.attr()
  question: DS.belongsTo('question', {async: true})
});
