// write your code here
//http
const http = require('http');

// Create the server object
const server = http.createServer(function(req, res) {
  // Log the request path
  console.log('Received' + req.method + 'request for: ' + req.url);
  
  // Send headers
  res.writeHead(200, { 'Content-Type': 'text/plain'});
  
  // Send body response
  res.end('Hello World');
});


// Add a listener for the server
server.listen(8080, 'localhost', null, function() {
  // Log a message when the server starts
  console.log('Server is listening on localhost:8080');
});


