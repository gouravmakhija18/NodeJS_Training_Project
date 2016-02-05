var fs = require('fs');
if (fs.existsSync('temp')) {
    console.log('Directory exist !');  
    
    if (fs.existsSync('temp/newText.txt')) {
        fs.unlinkSync('temp/newText.txt');
    }    
    fs.rmdirSync('temp');
}

fs.mkdir('temp', function (err) {
    fs.exists('temp', function (exists) {  
        if (exists) {
            process.chdir('temp');
            fs.writeFile('test.txt', 'this is some test data for the file.. !', function (err) {
                fs.rename('test.txt', 'newTest.txt', function () {
                    fs.stat('newTest.txt', function (err, stats) {
                        console.log('File has size : ' + stats.size + ' bytes !');
                        fs.readFile('newTest.txt', function (err,data) {
                            console.log('File Contents : ' + data);
                        });

                    });
                });

            });
        }

    });

});