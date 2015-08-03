// Load the http module to create an http server.
require('http').createServer(function (request, response) {
  response.setHeader('Access-Control-Allow-Origin', process.env['allow_origin']);
  response.writeHead(200, {"Content-Type": "text/plain"});
  console.log("Page view from " + request.connection.remoteAddress);
  response.end("Success.\n");
}).listen(process.env.PORT || 8000);

console.log("Server running at http://127.0.0.1:8000/");
