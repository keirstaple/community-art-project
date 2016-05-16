import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      project: this.store.findAll('event'),
      comment: this.store.findAll('comment')
    });
  },

  actions: {}
});
