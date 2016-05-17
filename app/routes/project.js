import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('project', params.project_id);
  },

  actions: {
    destroyProject(project) {
      project.destroyRecord();
      this.transitionTo('index');
    }
  }
});
