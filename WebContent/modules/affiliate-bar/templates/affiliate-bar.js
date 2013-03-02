(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['affiliate-bar'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"affiliated-content\">\r\n    <ul data-role=\"listview\" data-theme=\"d\">\r\n        <li data-icon=\"false\">\r\n            <div class=\"affiliate-controls\">\r\n                <a href=\"#\" data-inline=\"true\">Change</a>\r\n            </div>\r\n\r\n            <a href=\"#\">\r\n                <span class=\"affiliate-logo\">\r\n                    <i class=\"ui-icon-group\"></i>\r\n                </span>\r\n                <span class=\"affiliate-name\">";
  if (stack1 = helpers.affiliateName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.affiliateName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n</div>\r\n\r\n<div class=\"unaffiliated-content\">\r\n    <ul data-role=\"listview\" data-theme=\"a\">\r\n        <li>\r\n            <a href=\"#\">\r\n                <span class=\"affiliate-placeholder\">Shop for the products.</span>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n</div>";
  return buffer;
  });
})();