import Ember from 'ember';

export default Ember.Component.extend({
  itemCompleted: false,
  actions: {
  delete(project) {
    if (confirm('Are you sure you want to delete this project?')) {
      this.sendAction('destroyProject', project);
    }
  },
  completedProject(complete){
    this.sendAction('completedProject', complete);
    this.set('itemCompleted', true)
  }
}
});
