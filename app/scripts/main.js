/*global require*/
'use strict';

require.config({
 
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    velocity: '../bower_components/velocity/velocity.min',
    backbone: '../bower_components/backbone/backbone',
    underscore: '../bower_components/underscore/underscore',
    bootstrap: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap',
    handlebars: '../bower_components/handlebars/handlebars',
    register_helpers: './register_helpers',
    templates: './templates',
    app: './app',
    view: 'views/view'
  },
  shim: {
    bootstrap: {
      deps: ['jquery'],
      exports: 'jquery'
    },

    velocity: {
      deps: ['jquery']
    },

    handlebars: {
      exports: 'Handlebars',

      init: function() {
        this.Handlebars = Handlebars; /*jshint ignore:line */
        return this.Handlebars;
      }
    },
    templates: {
      deps: ['register_helpers']
    }
  }
});

require(['init', 'jquery', 'register_helpers', 'templates', 'velocity'], function(App) {

  $(function() {
    App.init();
  });

});