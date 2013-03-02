(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['site-nav'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<nav class=\"account-nav\">\r\n	<ul>\r\n		<li class=\"signin-nav-item\">\r\n			<span>\r\n				<a href=\"#\" class=\"ui-link\">\r\n					Sign In\r\n				</a>\r\n			</span>\r\n		</li>\r\n		<li class=\"signout-nav-item is-hidden\">\r\n			<span>\r\n				<a href=\"#\" class=\"ui-link\">\r\n					Sign Out\r\n				</a>\r\n			</span>\r\n		</li>\r\n		<li class=\"account-nav-item is-hidden\">\r\n			<span>\r\n				<a href=\"#\" class=\"ui-link\">\r\n					Account\r\n				</a>\r\n			</span>\r\n		</li>			\r\n		<li class=\"myorders-nav-item\">\r\n			<span>\r\n				<a href=\"#\" class=\"ui-link\">\r\n					My Orders\r\n				</a>\r\n			</span>\r\n		</li>						\r\n	</ul>\r\n</nav>\r\n<div id=\"mobileHeader\" class=\"clearfix\">\r\n	<div class=\"nav\">\r\n		<ul>\r\n			<li class=\"user rounded\" style=\"display: block; visibility: visible;\">\r\n				<span id=\"cart\" class=\"cart\">\r\n					<a id=\"cartLinkIcon\" href=\"#\" class=\"cartlink cartHover noRewrite ui-link\">Cart\r\n						<span class=\"cartQty\">(<span class=\"psuedo-link\">&nbsp;</span>)</span>\r\n						<span class=\"cartSpinner\" style=\"display: none;\"></span>\r\n					</a>\r\n				</span>\r\n			</li>\r\n		</ul>\r\n	</div>\r\n</div>";
  });
})();