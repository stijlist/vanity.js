var http = require('http'),
    fs   = require('fs');

http.createServer(function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', process.env.allow_origin);
  if (req.url === '/client.js') {
    fs.readFile(__dirname + req.url, function (err, data) {
      if (err) {
        res.writeHead(500);
      } else {
        res.writeHead(200, {"Content-Type": "text/javascript"});
        res.end(data);
      }
    });
  } else {
    res.writeHead(200, {"Content-Type": "text/plain"});
    console.log("Hit from " + req.connection.remoteAddress + " on " + req.url);
    res.end("Success.\n");
  }
}).listen(process.env.PORT || 8000);

console.log("Server running at http://127.0.0.1:8000/, allowing requests from " + process.env.allow_origin);
