function receivesAFunction(callback){
    callback();
}
function whatever(){
    return function wow(){};
}
function returnsANamedFunction(){
    return whatever();
}
function returnsAnAnonymousFunction(){
    return (function (){});
}