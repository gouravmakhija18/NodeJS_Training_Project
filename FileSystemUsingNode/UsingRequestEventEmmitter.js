var request = require('request');
var fs = require('fs');

var res = request('http://www.google.com');// event emmitter

//res.on('data', function (chunk){

//    console.log('>> data >>>>>>>>>>' + chunk);

//})


var writer = fs.createWriteStream('TextResponse.html');


//res.pipe(writer);

res.pipe(process.stdout);



