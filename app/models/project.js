import DS from 'ember-data/model';

export default DS.Model.extend({
  name: DS.attr(),
  host_name: DS.attr(),
  date: DS.attr(),
  time: DS.attr(),
  location: DS.attr(),
  summary: DS.attr(),
  image: DS.attr(),
  contributors: DS.attr(),
  comments: DS.hasMany('comment', {async: true})
});
