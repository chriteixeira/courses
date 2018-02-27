function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
};



var john = new Person('John', 27, 'male');

console.log(john);
console.log(john.name);
