function outputTheOutput(err,arg){

    if (err) {
        console.log("Back in CallBack : " + err);
    }
    else {
        console.log(arg);
    }
};

function initArray(size, callBack){
    console.log('Started..');
    try {
        var arr = new Array();
        for (var i = 0; i < size; i++) {
            arr[i] = i;
            if (i == 300) {
                throw new Error('Some Thing went wrong !');
            }
            callBack(null, i);
        }
    }
    catch (ex) {
        callBack(ex, null);
    }

}


initArray(1000, outputTheOutput);