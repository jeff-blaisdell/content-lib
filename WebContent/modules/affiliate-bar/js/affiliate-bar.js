var JOSTENS = ( function( JOSTENS, $, Handlebars ) {
    var affiliateBar = JOSTENS.affiliateBar = function() {
        var props = {},
            $searchDialog;

        /**
         * Add Affiliate Bar DOM event handlers.
         *
         * @private
         * @param $affiliateBar {jQuery} A jQuery wrapped element.
         */
        function addAffiliateBarEvents( $affiliateBar ) {
            $affiliateBar.on( 'click', barClickEvent );
        }

        /**
         * Handle click event that in turn triggers the display of the affiliate
         * search dialog.
         *
         * @private
         */
        function barClickEvent() {
            props.showSearchDialog();
        }

        /**
         * Add affiliate search dialog event handlers.
         *
         * @private
         */
        function addAffiliateSearchEvents() {
            $searchDialog.on( 'click', '.affiliateItem', affiliateItemClickEvent );
        }

        /**
         * Handle click events for affiliate search result items.
         *
         * @private
         * @param evt
         */
        function affiliateItemClickEvent( evt ) {
            evt.preventDefault();
            affiliateAndClose();
        }

        /**
         * Trigger affiliation and close the affiliate search dialog.
         *
         * @private
         */
        function affiliateAndClose() {
            $( '.affiliate-bar' ).addClass( 'is-affiliated' );
            $searchDialog.dialog('close');
        }

        /**
         * Affiliate bar initializer.
         */
        props.affiliateBar = function() {
            var tmpl = Handlebars.templates['modules/affiliate-bar/templates/affiliateBar']
                , $container = $( 'div[data-role="affiliate-bar"]')
                , model = {affiliateName: "Example Affiliate"};

            if ( tmpl && $container.size() === 1 ) {
                $container.html( tmpl(model) )
                    .addClass("affiliate-bar affiliate-primary-background affiliate-secondary-foreground");
                addAffiliateBarEvents( $container );

                return this;
            }


            throw new Error( 'Bad template or container selection.' );
        }

        /**
         * Triggers the display of a jQuery Mobile based affiliation dialog.
         */
        props.showSearchDialog = function() {
            var tmpl = Handlebars.templates['modules/affiliate-bar/templates/affiliateSearch'];

            if ( !$searchDialog ) { // page does not currently exist in DOM
                $( 'body').append( tmpl() );
                $searchDialog = $( '#affiliate-search' );
                addAffiliateSearchEvents();
            }

            $.mobile.changePage( $searchDialog, {changeHash: false} );
            console.log( 'showing search' );
        }

        return props;
    }();

    affiliateBar.affiliateBar();

    return JOSTENS;
}( JOSTENS || {}, jQuery, Handlebars ) );