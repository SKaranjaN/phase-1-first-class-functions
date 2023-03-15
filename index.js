function receivesAFunction(spy) {
    return spy();
}
function returnsANamedFunction() {
    return function spy2() {
        fn = returnsANamedFunction();
    };
}
function returnsAnAnonymousFunction() {
    return function() {
        fn = returnsAnAnonymousFunction();
    };
}