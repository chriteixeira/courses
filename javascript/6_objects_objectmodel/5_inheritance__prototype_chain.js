let f = function () {
    this.a = 1;
    this.b = 2;
}
let o = new f();
console.log(o);

f.prototype.b = 3;
f.prototype.c = 4;
console.log(o);

console.log(o.a);
console.log(o.b);
console.log(o.c);






function Polygon(sides) {
    this.sides = sides;

    this.perimeterFunc = function () {
        let p = 0;
        for (let i = 0; i < this.sides.length; i++) {
            p += this.sides[i];
        }
        return p;
    };

    this.from = function () {
        return 'constructor function'
    };
}

Polygon.prototype.perimeter = function () {
    let p = 0;
    for (let i = 0; i < this.sides.length; i++) {
        p += this.sides[i];
    }
    return p;
};

Polygon.prototype.from = function () {
    return 'prototype function'
};


var triangle = new Polygon([2, 1, 2]);
var square = new Polygon([4, 4, 4, 4]);
var rectangle = new Polygon([4, 2, 4, 2]);

console.log(triangle.perimeter());
console.log(square.perimeter());
console.log(rectangle.perimeter());

console.log(triangle.perimeterFunc());
console.log(square.perimeterFunc());
console.log(rectangle.perimeterFunc());

console.log(rectangle.from());







function Rectangle(sides) {
    Polygon.call(this, sides);
};
Rectangle.prototype = Object.create(Polygon.prototype);
Rectangle.prototype.area = function () {
    return this.sides[0] * this.sides[1];
}


var rectangle = new Rectangle([4, 2, 4, 2]);
console.log(rectangle.area());
console.log(rectangle.perimeter());
console.log(rectangle.perimeterFunc());

function Square(sides) {
    Rectangle.call(this, sides);
};
Square.prototype = Object.create(Rectangle.prototype);

var square = new Square([4, 4, 4, 4]);
console.log(square.area());
console.log(square.perimeter());
console.log(square.perimeterFunc());
