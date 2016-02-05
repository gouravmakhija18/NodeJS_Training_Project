var util = require('util');
var EventEmmitter = require('events').EventEmitter;

function Resource(count){
    var self = this;
    process.nextTick(function () {
        var cnt = 0;
        self.emit('start'); // emmitting start event !
        var t = setInterval(function () {
            self.emit('data', ++cnt); // emmiting data !            
            if (cnt == 3) {
                //self.emit('error', cnt);
                //clearInterval(t);
            }            
            if (cnt == count) {
                self.emit('end', cnt);
                clearInterval(t);
            }
        }, 1000);
    });
};

util.inherits(Resource, EventEmmitter);

module.exports = Resource;