define(['underscore', 'backbone', 'app'], function(_, Backbone, App) {
	'use strict';

	var View = Backbone.View.extend({

		initialize: function(){
			this.contenxt = {};
		},

		render: function(options) {
			Backbone.View.prototype.render.apply(this, arguments);

			options = options || {};

			if (options.page === true) {
				this.$el.addClass('page');
			}

			this.renderTemplates();

			return this;

		},

		renderTemplates:function(){
			var template = JST[this.template];
			this.$el.html(template());
		},

		transitionIn: function(callback) {
			this.$el.velocity({left: "0"}, 600, function(){
				if(_.isFunction(callback)){
					callback();
				}
			});
		},

		transitionOut: function(callback) {
			this.$el.velocity({left: "-100%"}, 600, function(){
				if(_.isFunction(callback)){
					callback();
				}
			});
		}

	});

	return (App.Views.View = View);

});