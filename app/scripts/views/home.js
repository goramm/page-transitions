define(['underscore', 'app', 'view'], function(_, App, View) {
	'use strict';

	var HomeView = View.extend({
		template: 'home',
		className: 'home'
	});

	return (App.Views.Home = HomeView);

});