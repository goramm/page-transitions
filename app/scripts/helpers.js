(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['underscore', 'handlebars', 'app'], factory); // AMD
    } else if (typeof module.exports === 'object') {
       module.exports = factory(); // Node
    } else {
        factory(window.helpers); // Browser global
    }
}(function (_, Handlebars, App){
  'use strict';

  var safe = function(str){
    return new Handlebars.SafeString(str);
  };

  var Helpers = {

    debug: function(what){
      console.log(what);
      return null;
    },

    link_to: function(title, route){
      return safe('<a href="#/'+route+'" title="'+title+'">'+title+'</a>');
    }

  };

  return Helpers;

  })
);

