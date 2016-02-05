var fs = require('fs');

var writer = fs.createWriteStream('GenerateDataFile.txt');


var someData = 300;
writer.write('Hello some sample text..');
writer.write(someData.toString());
writer.end('end of the world !');

writer.on('finish', function () { 
    console.log('Finished writing..');
});