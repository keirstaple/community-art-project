import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      completed: this.store.query('project', {
        orderBy: 'complete',
        equalTo: true,
      }),
      uncompleted: this.store.query('project', {
        orderBy: 'complete',
        equalTo: false,
      })
    });
  },
  actions: {
    save(params) {
      var newProject = this.store.createRecord('project', params);
      newProject.save();
      this.transitionTo('index');
    },
    destroyProject(project) {
      project.destroyRecord();
      this.transitionTo('index');
    }
  }
});
