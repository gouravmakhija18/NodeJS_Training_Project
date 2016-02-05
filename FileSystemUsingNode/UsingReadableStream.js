var fs = require('fs');


var data = "";

var i = 0;

var readable = fs.createReadStream("Data.txt");


readable.on('data', function (chunk) {
    i++;
    data += chunk;
    console.log("%d bytes",chunk.length); 
   // console.log(data);

   // some logic 

    readable.pause();

    setTimeout(function () {
        console.log('Now data will resume..');
        readable.resume();
    },2000);
});

readable.on('end', function () {
   
    console.log(data);


});