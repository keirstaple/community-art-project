import Ember from 'ember';

export default Ember.Component.extend({
map: Ember.inject.service('google-map'),

actions: {
  showMap(project) {
    var container = this.$('.map-display')[0];
    var options = {
      center: this.get('map').center(project.get('latitude'), project.get('longitude')),
      zoom: 15
    };
    this.get('map').findMap(container, options);
  },
  delete(project) {
    if (confirm('Are you sure you want to delete this project?')) {
      this.sendAction('destroyProject', project);
    }
  },
  completedProject(complete){
    this.sendAction('completedProject', complete);
  }
}
});
