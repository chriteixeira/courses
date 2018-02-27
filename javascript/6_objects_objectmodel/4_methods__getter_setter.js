var jane = {
    name: 'Jane',
    age: 30,
    sex: 'female',

    getYearOfBirth: function () {
        return new Date().getFullYear() - this.age;
    }
};

console.log(jane);
console.log(jane.getYearOfBirth());

function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;

    this.getYearOfBirth = getYearOfBirth;
};

function getYearOfBirth() {
    return new Date().getFullYear() - this.age;
}

var john = new Person('John', 27, 'male');
console.log(john);
console.log(john.getYearOfBirth());






var mary = {
    name: 'Mary',
    age: 22,
    sex: 'female',

    get yearOfBirth() {
        return new Date().getFullYear() - this.age;
    },
    set yearOfBirth(y) {
        this.age = new Date().getFullYear() - y;
    }
};

console.log(mary);
console.log(mary.yearOfBirth);
console.log(typeof mary.yearOfBirth);

mary.yearOfBirth = 2001;
console.log(mary);
console.log(mary.yearOfBirth);
console.log(mary.age);