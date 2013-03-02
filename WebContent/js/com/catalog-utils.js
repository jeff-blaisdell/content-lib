var COM = ( function( COM, $) {
    var CatalogUtils = COM.CatalogUtils = function() {
        var props = {};

        props.findProduct = function(params, callback) {
          var url = '/app/product/product/{productId}/customer/{customerId}/catalog/{catalogType}';
          url = url.replace('{productId}', params.productId)
                   .replace('{customerId}', params.customerId)
                   .replace('{catalogType}', params.catalogType);
          $.getJSON(url + '?callback=?', null, callback);
        };

        props.CatalogUtils = function() {

        };

        return props;
    }();

    CatalogUtils.CatalogUtils();

    return COM;
}( COM || {}, jQuery) );