function receivesAFunction(callback) {
    return callback();
}
console.log(receivesAFunction(function () { return 'Hello, world!'}));


function returnsANamedFunction(){
    const greeting = () => "Hi!";
    return greeting;
}
console.log(returnsANamedFunction());

function returnsAnAnonymousFunction(){
    return () => "Hello!";
}
console.log(returnsAnAnonymousFunction());