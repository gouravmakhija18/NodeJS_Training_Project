

process.on('uncaughtException', function () {
    console.log('Swallows the error silently but not a good practise !')
});


fs.readFile('AnyFile.txt', function (err, data) {
    
    if (err) {
        throw err;
    }
});

////1000