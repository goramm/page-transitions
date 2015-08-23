define(['backbone', 'app', 'router', 'views/main'], function(Backbone, App, Router, MainView) {
  'use strict';

  $.extend(App, Backbone.Events, {
    init: function() {
      this.instance = new MainView();

      App.Router = new Router();
      Backbone.history.start();
    }
  });

  return App;

});