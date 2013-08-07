var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

  var fs = require('fs');
  var text = fs.readFileSync('index.html');
  var buf = new Buffer (text, "utf-8");

  response.send(buf.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
