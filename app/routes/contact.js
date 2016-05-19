import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save1() {
      // var addNewContact = this.store.createRecord('contact', params);
      // newContact.save();
      this.transitionTo('contact');
    },
  }
});
