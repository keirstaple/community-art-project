import DS from 'ember-data';

export default DS.Model.extend({
  first: DS.attr(),
  last: DS.attr(),
  email: DS.attr(),
  description: DS.attr(),
});
