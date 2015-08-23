define(['underscore', 'app', 'view'], function(_, App, View) {
	'use strict';

	var AboutView = View.extend({
		template: 'about',
		className: 'about'
	});

	return (App.Views.About = AboutView);
});