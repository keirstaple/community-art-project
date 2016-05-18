import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('project', params.project_id);
  },

  actions: {
    destroyProject(project) {
      project.destroyRecord();
      this.transitionTo('index');
    },
    completedProject(complete){
      console.log(complete);
      this.store.findRecord('project', complete).then(function(project){
        project.toggleProperty('complete');
        project.save();
      });
    }
  }
});
