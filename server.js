var http   = require('http'),
    static = require('node-static'),
    argv   = require('optimist'),
    port   = argv.port || 8081,
    file = new(static.Server)('./WebContent');

http.createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    });
}).listen(port, function() {
	console.log("Deployment Services listening on port " + port);
});