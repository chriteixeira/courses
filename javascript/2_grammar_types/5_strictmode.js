strict();
nonStrict();

function nonStrict() {
    x = 10;
    console.log(x);
    function f(a, a, b) {}
}

function strict() {
    'use strict'
    //yy = 10;

    //function f(a, a, b) {}

}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode