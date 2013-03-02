(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['affiliate-search'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div id=\"affiliate-search\" data-role=\"dialog\" data-theme=\"e\">\r\n    <div data-role=\"header\">\r\n        <h1>Find Your Group To Shop For Your Custom Products</h1>\r\n    </div>\r\n    <div  data-role=\"content\">\r\n\r\n        <form id=\"affiliate-search-form\" data-ajax=\"false\" >\r\n            <label for=\"search-basic\" style=\"font-weight: bold;\" class=\"ui-hidden-accessible\">Find Your Group To Shop For Your Custom Products</label>\r\n            <input type=\"search\" name=\"search\" id=\"affiliate-search\" placeholder=\"Group Name, City or State\" data-theme=\"c\" />\r\n            <input type=\"submit\" data-ajax=\"false\" name=\"search-go\" data-theme=\"a\" value=\"Search\"/>\r\n        </form>\r\n\r\n        <div id=\"searchResults\">\r\n            <ul data-role=\"listview\" id=\"affiliateList\" data-inset=\"true\">\r\n                <li><a href=\"#\" class=\"affiliateItem\">ABC Company</a></li>\r\n            </ul>\r\n        </div>\r\n\r\n        <a href=\"#\" data-role=\"button\" style=\"display:none;\" id=\"searchAffiliateShowMoreBtn\" data-theme=\"a\">Show more..</a>\r\n        <div id=\"noResultsFound\" style=\"display:none;margin-top:10px;\">\r\n            <p>No results found.</p>\r\n            <p>Suggestions:</p>\r\n            <ul>\r\n                <li>Check your spelling.</li>\r\n                <li>Use fewer words.</li>\r\n                <li>Call 1-999-999-9999 for assistance.</li>\r\n            </ul>\r\n        </div>\r\n        <p id=\"searchAffiliateDisplayCount\" style=\"text-align:right;\"></p>\r\n    </div>\r\n</div>";
  });
})();