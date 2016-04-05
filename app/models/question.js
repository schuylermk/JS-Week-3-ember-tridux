import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  subject: DS.attr(),
  content: DS.attr()
});
