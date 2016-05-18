import Ember from 'ember';

export default Ember.Route.extend({
  // model() {
  //   return this.store.findAll('project');
  // }
  model: function() {
    return this.store.query('project', {
      orderBy: 'complete',
      equalTo: true
    });
  }
});
