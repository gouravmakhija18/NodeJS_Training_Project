var EventEmmitter = require('events').EventEmitter;

var getResource = function (count){
    var e = new EventEmmitter();    
    
    process.nextTick(function () {
        var cnt = 0;
        e.emit('start'); // emmitting start event !
        var t = setInterval(function () {
            e.emit('data', ++cnt); // emmiting data !            
            if (cnt == 3) {
                e.emit('error', cnt);
                clearInterval(t);
            }

            if (cnt == count) {
                e.emit('end', cnt);
                clearInterval(t);
            }
        }, 1000);  
    });
    return e;
}

var res = getResource(5); // returns an object of EventEmmiter

//listening for start,error ,data,end event from getResource

res.on('data', function (currData) {
    console.log('I recieved -> ' + currData);
});

res.on('error', function (err) {
    console.log('Error -> ' + err);
});

res.on('start', function () {
    console.log('I have started ! ' );
});

res.on('end', function (currData) {
    console.log('I have ended with final count : ' + currData);
});





