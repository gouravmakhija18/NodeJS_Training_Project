var domain = require('domain');
var fs = require('fs');


var d1 = domain.create();

d1.on('error', function () {

    console.log('Inside Error Handler of domain !');

});


d1.run(function () {
    fs.readFile('AnyFile.txt', function (err, data) {
        //try {
            if (err) {
                throw err;
            }
        //}
        //catch (ex) {
            //console.log(ex)
        //}
    });
});

console.log('Some more statements..');