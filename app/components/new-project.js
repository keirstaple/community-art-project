import Ember from 'ember';

export default Ember.Component.extend({
  addNewProject: false,
   actions: {
     projectFormShow() {
       this.set('addNewProject', true);
     },
     cancelNewProjectForm() {
       this.set('addNewProject', false);
     },
     save() {
       var params = {
         title: this.get('title') ? this.get('title') : " ",
         host_name: this.get('host') ? this.get('host') : " ",
         date: this.get('date') ? this.get('date') : " ",
         time: this.get('time') ? this.get('time') : " ",
         location: this.get('location') ? this.get('location') : " ",
         contributor: this.get('contributor') ? this.get('contributor') : " ",
         summary: this.get('summary') ? this.get('summary') : " ",
         image: this.get('image') ? this.get('image') : " "
       };
       this.set('addNewProject', false);
       this.sendAction('save', params);
     }
   }
});
