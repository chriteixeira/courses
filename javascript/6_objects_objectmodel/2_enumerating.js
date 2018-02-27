var object = {
    name: 'John',
    age: 28,
    sex: 'male'
};



for (var prop in object) {
    console.log(prop);
}


console.log(Object.keys(object));


console.log(Object.getOwnPropertyNames(object));