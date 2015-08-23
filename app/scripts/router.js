define(['backbone', 'app', 'views/main', 'views/home', 'views/blog', 'views/about'], function(Backbone, App, MainView, HomeView, BlogView, AboutView) {
	'use strict';

	return Backbone.Router.extend({

		routes: {
			'': 'home',
			'home': 'home',
			'blog': 'blog',
			'about': 'about'
		},

		home: function() {
			var view = new HomeView();
			App.instance.goto(view);
		},

		blog: function() {
			var view = new BlogView();
			App.instance.goto(view);
		},

		about: function() {
			var view = new AboutView();
			App.instance.goto(view);
		}

	});

});