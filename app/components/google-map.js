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
    }
  }
});
