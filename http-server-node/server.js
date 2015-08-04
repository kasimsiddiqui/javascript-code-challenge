var http = require('http');
var fs = require('fs');
var port = process.env.PORT || 5000;
var server = http.createServer();

server.listen(port);
console.log('Server running on port ' + port);

server.on('request', requestHandler);

function requestHandler(request, response) {
  var statusCode = 200;
  fs.readFile('./index.html', function(error, data) {
    writeResponse(request, response, statusCode, data);
  });
}

function writeResponse(request, response, statusCode, file) {
  response.writeHead(statusCode, {'Content-Type': 'text/html'});
  response.write(file);
  response.end();
}
