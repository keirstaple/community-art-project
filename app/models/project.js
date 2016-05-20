import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  host_name: DS.attr(),
  date: DS.attr(),
  time: DS.attr(),
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  contributor: DS.attr(),
  summary: DS.attr(),
  image: DS.attr(),
  complete: DS.attr('boolean', {defaultValue: false}),
  comments: DS.hasMany('comment', {async: true})
});
