var COM = ( function( COM, $) {
    var CustomerClient = COM.CustomerClient = function() {
        var props = {};

        props.findCustomer = function(params, callback) {
          var url = '/app/product/customer/{customerId}';
          url = url.replace('{customerId}', params.customerId);
          $.getJSON(url + '?callback=?', null, callback);
        };

        props.CustomerClient = function() {

        };

        return props;
    }();

    CustomerClient.CustomerClient();

    return COM;
}( COM || {}, jQuery) );