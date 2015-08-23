define(['app', 'view'], function(App, View) {
  'use strict';

  var MainView = View.extend({

    el: '#app',

    goto: function(view) {

      var previous = this.currentPage || null;
      var next = view;

      if (previous) {
        previous.transitionOut(function() {
          previous.remove();
        });
      }

      next.render({
        page: true
      });
      this.$el.append(next.$el);
      next.transitionIn();
      this.currentPage = next;

    }

  });

  return (App.Views.Main = MainView);
});