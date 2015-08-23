define(['underscore', 'app', 'view'], function(_, App, View) {
	'use strict';

	var BlogView = View.extend({
		template: 'blog',
		className: 'blog'
	});

	return (App.Views.Blog = BlogView);

});