import Ember from 'ember';

export default Ember.Component.extend({
  addNewEvent: false,
 actions: {
   eventFormShow() {
     this.set('addNewEvent', true);
   },
   save1() {
     var params = {
       title: this.get('title'),
       artist: this.get('artist'),
       image: this.get('image'),
       location: this.get('location'),
       date: this.get('date'),
     };
     this.set('addNewEvent', false);
     this.sendAction('save2', params);
   }
 }
});
