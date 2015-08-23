define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["about"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var alias1=this.escapeExpression;

  return "<h1>About</h1>\n"
    + alias1(Handlebars.r(helpers,'link_to').call(depth0,"Go to Home","",{"name":"link_to","hash":{},"data":data}))
    + "\n"
    + alias1(Handlebars.r(helpers,'link_to').call(depth0,"Go to Blog","blog",{"name":"link_to","hash":{},"data":data}));
},"useData":true});

this["JST"]["blog"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var alias1=this.escapeExpression;

  return "<h1>Blog</h1>\n"
    + alias1(Handlebars.r(helpers,'link_to').call(depth0,"Go to Home","",{"name":"link_to","hash":{},"data":data}))
    + "\n"
    + alias1(Handlebars.r(helpers,'link_to').call(depth0,"Go to About","about",{"name":"link_to","hash":{},"data":data}));
},"useData":true});

this["JST"]["home"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var alias1=this.escapeExpression;

  return "<h1>Home</h1>\n"
    + alias1(Handlebars.r(helpers,'link_to').call(depth0,"Go to Blog","blog",{"name":"link_to","hash":{},"data":data}))
    + "\n"
    + alias1(Handlebars.r(helpers,'link_to').call(depth0,"Go to About","about",{"name":"link_to","hash":{},"data":data}));
},"useData":true});

return this["JST"];

});