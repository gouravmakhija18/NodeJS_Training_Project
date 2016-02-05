var count = 10;

var doSomething = function (){
    console.log('doSomething called !');
    return "success";
}

module.exports.SomeMethod = doSomething;
module.exports.anypropertyOntheFly = "Property on the fly";
