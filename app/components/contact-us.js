import Ember from 'ember';

export default Ember.Component.extend({
  addNewContact: false,
  actions: {
    contactFormShow() {
      this.set('addNewContact', true);
    },
    save() {
      var params = {
        first: this.get('first'),
        last: this.get('last'),
        email: this.get('last'),
        description: this.get('description'),
      };
      this.set('addNewContact', false);
      this.sendAction('save1', params);
    }
  }
});
