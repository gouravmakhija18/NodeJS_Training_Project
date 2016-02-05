var http = require('http');

var PORT = 4444;

var server = http.createServer(function (req, res) {
    
    res.writeHead(200, { 'Content-Type' : 'text/plain' });
    res.end('This is debugging ');
});

server.listen(PORT);
console.log('Running..')