var log = function (x) {
    console.log(x);
};

var logArrow = (x) => {
    console.log(x);
};
var n = 10;

log(n);
logArrow(n);

var add10 = function (x) {
    return x + 10;
}

var add10Arrow = (x) => x + 10;

console.log(add10(n));
console.log(add10Arrow(n));


//THIS



function Person() {
    this.age = 10;

    execute(function () {
        console.log(this.age);
    });

    execute(() => {
        console.log(this.age);
    });

    var logThis = function() {
        console.log(this.age)
    };

    var logThisArrow = () => {
        console.log(this.age)
    };

    //execute(logThis);
    //execute(logThisArrow);
    //execute(logThis.bind(this));
};


function execute(func) {
    func();
}


new Person();