

var http = require('http');
var socketio = require('socket.io');
var fs = require('fs');

var handler = function (req, res){

    fs.readFile(__dirname + "/Client.html", function (err, data) {
        
        if (err) {
            res.writeHead(500);
            return res.end('Error occurred loading Client.html !');
        }
        else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }

    });
}

var app = http.createServer(handler);
var io = socketio.listen(app);


io.sockets.on('connection', function (socket) {

    setInterval(function () {
        var timeStamp = new Date();// some data

        console.log('Emmitted : ' + timeStamp);
        socket.emit('timer', timeStamp);

    }, 2000);

    socket.on('submit', function (data){

        console.log('Submitted : ' + data);

    })


});







app.listen(8888, "127.0.0.1");
console.log('Server runnning..');
