var COM = ( function( COM, $, Handlebars ) {
    var siteNav = COM.siteNav = function() {
        var props = {};

        /**
         * Site Nav initializer.
         */
        props.siteNav = function() {

            var tmpl = Handlebars.templates['site-nav']
              , $container = $( 'header[data-jos-role="site-nav"]')
              , model = {};

            if ( tmpl && $container.size() === 1 ) {
                $container.html( tmpl(model) );
                return this;
            }
            throw new Error( 'Bad template or container selection.' );
        }

        return props;
    }();

    siteNav.siteNav();

    return COM;
}( COM || {}, jQuery, Handlebars ) );