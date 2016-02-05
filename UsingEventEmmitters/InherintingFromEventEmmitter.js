var Resource = require('./Resource.js');

var res = new Resource(5);

res.on('data', function (currData) {
    console.log('I recieved -> ' + currData);
});


res.on('error', function (err) {
    console.log('Error -> ' + err);
});

res.on('start', function () {
    console.log('I have started ! ');
});

res.on('end', function (currData) {
    console.log('I have ended with final count : ' + currData);
});