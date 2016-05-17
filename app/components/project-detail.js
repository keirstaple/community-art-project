import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
  delete(project) {
    if (confirm('Are you sure you want to delete this project?')) {
      this.sendAction('destroyProject', rental);
    }
  }
}
});
