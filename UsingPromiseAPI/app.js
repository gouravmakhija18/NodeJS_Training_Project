var promise = require('bluebird');

var fs = promise.promisifyAll(require('fs'));

fs.readFileAsync('test.txt').then(function (fileData) {
       
    return fs.mkdirAsync('directory/new-Directory');

}, function () { 

    console.log('Something went wrong..');

});