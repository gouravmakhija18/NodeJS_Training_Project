//var exec = require('child_process').exec;


//exec('node -v', function (err, stdout, stdin) {
//    console.log('stdout : ' + stdout);
//    console.log('Error : ' + err);

//});

//exec('systeminfo', function (err, stdout, stdin) {
//    console.log('stdout : ' + stdout);
//    console.log('Error : ' + err);

//});

// 200kb limit of buffer
//---------------------------------



var fs = require('fs');

var child_process = require('child_process');

for (var i = 0; i < 3; i++) {
        
    wProcess = child_process.spawn('node' , ['MyModule.js', i]);// create sub process

    wProcess.stdout.on('data', function (data) {
    
        console.log('stdout : ' + data);
    });
}

wProcess.on('close', function (code){
    console.log('Child process exited with code : ' + code);
})


