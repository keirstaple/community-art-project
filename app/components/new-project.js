import Ember from 'ember';

export default Ember.Component.extend({
  addNewProject: false,
   actions: {
     projectFormShow() {
       this.set('addNewProject', true);
     },
     save1() {
       var params = {
         title: this.get('title'),
         artist: this.get('artist'),
         image: this.get('image'),
         location: this.get('location'),
         date: this.get('date'),
       };
       this.set('addNewProject', false);
       this.sendAction('save2', params);
     }
   }
});
