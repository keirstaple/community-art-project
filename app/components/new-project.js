import Ember from 'ember';

export default Ember.Component.extend({
  addNewProject: false,
   actions: {
     projectFormShow() {
       this.set('addNewProject', true);
     },
     save() {
       var params = {
         title: this.get('title'),
         host_name: this.get('host'),
         date: this.get('date'),
         time: this.get('time'),
         location: this.get('location'),
         contributor: this.get('contributor'),
         summary: this.get('summary'),
         image: this.get('image')
       };
       this.set('addNewProject', false);
       this.sendAction('save', params);
     }
   }
});
