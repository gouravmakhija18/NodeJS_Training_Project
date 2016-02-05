var net = require('net');

var fs = require('fs');

var server = net.createServer(function (connect) { /// connect req/res in http

    var log = fs.createWriteStream('LogMsgs.txt');
    console.log('connection established !');

    connect.on('end', function () {

        console.log('connection terminated !');
    });

    connect.write('Some default msg..');

    connect.pipe(connect).pipe(log);

});

server.listen(6666, function (){
    console.log('server listening at 6666 ');
})