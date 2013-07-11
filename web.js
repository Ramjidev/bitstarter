var express = require('express');

var app = express.createServer(express.logger());

var buf = new Buffer(256);
var buflength = buf.write("Hello World from index.html", "utf-8");
var bufText = buf.toString("utf-8", 0, buflength);

fs.writeFileSync('index.html', bufText);

app.get('/', function(request, response) {
  response.send(index.html);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


