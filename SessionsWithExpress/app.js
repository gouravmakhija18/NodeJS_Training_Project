var express = require('express');
var session = require('express-session');
var ckparser = require('cookie-parser');

var app = express();
app.use(ckparser());
app.use(session({
    secret: 'anyStringData',
    saveUninitialized: true,
    resave: true
}));

app.use('/', function (req,res) {

    res.send('Our first cookie and Session Mgmt !');

    console.log(req.cookies);
    console.log('--------------');
    console.log(req.session);

    var sessionState = req.session;

    sessionState.SomeValue = "ActualValue !"; // session data stored on the server !

    sessionState.destroy(function (err) {
        // session can't be access
    });
    

});

app.listen(9090);
console.log('Running..');

