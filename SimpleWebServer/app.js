var http = require('http');

http.createServer(function (req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello from Server</h1>');

}).listen(7887, "127.0.0.1");

console.log('Server is running !');