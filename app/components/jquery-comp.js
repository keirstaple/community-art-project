import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    menuPressed: function(){
      $('nav').addClass("mainNav-opened");
      $('nav').removeClass("mainNav-closed");
    },
    closeMenu: function(){
      $('nav').addClass("mainNav-closed");
      $('nav').removeClass("mainNav-opened");
    }
  }
});
