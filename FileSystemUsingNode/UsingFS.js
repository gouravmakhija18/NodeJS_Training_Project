var fs = require('fs');

if (fs.existsSync('temp')) {    
    console.log('Directory exist !');
    

    if (fs.existsSync('temp/newText.txt')) {
        fs.unlinkSync('temp/newText.txt');
    }

    fs.rmdirSync('temp');
}

fs.mkdirSync('temp');

if (fs.existsSync('temp')) {


    process.chdir('temp');
    fs.writeFileSync('test.txt', 'this is some test data for the file.. !');
    fs.renameSync('test.txt', 'newText.txt');
    console.log('File has size : ' + fs.statSync('newText.txt').size + ' bytes !');
    console.log('File Contents : ' + fs.readFileSync('newText.txt').toString());

}
