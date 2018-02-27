class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    perimeter() {
        let p = 0;
        for (let i = 0; i < this.sides.length; i++) {
            p += this.sides[i];
        }
        return p;
    };
}

class Rectangle extends Polygon {
    constructor(sides) {
        super(sides);
    }
    area() {
        return this.sides[0] * this.sides[0];
    }
}


class Square extends Rectangle {
    constructor(sides) {
        super(sides);
    }
}

var triangle = new Polygon([2, 1, 2]);
var square = new Square([4, 4, 4, 4]);
var rectangle = new Rectangle([4, 2, 4, 2]);

console.log(triangle.perimeter());
console.log(square.perimeter());
console.log(rectangle.perimeter());


console.log(square.area());
console.log(rectangle.area());


