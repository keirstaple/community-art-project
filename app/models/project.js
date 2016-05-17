import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  host_name: DS.attr(),
  date: DS.attr(),
  time: DS.attr(),
  location: DS.attr(),
  contributor: DS.attr(),
  summary: DS.attr(),
  image: DS.attr(),
  comments: DS.hasMany('comment', {async: true})
});
