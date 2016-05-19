import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    window.scrollTo(0,0);
  },
  model: function() {
    return this.store.query('project', {
      orderBy: 'complete',
      equalTo: false
    });
  },
  actions: {
    save(params) {
      var newProject = this.store.createRecord('project', params);
      newProject.save();
      this.transitionTo('index');
    }
  }
});
