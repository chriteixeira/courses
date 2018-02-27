var personObject = {
    name: 'John',
    age: 28,
    sex: 'male'
};

console.log(personObject);
console.log(typeof personObject);

var personObject2 = new Object();
personObject2.name = 'Jane';
personObject2.age = 30;
personObject2.sex = 'femaly';


console.log(personObject2);
console.log(typeof personObject2);



delete personObject.name;
console.log(personObject);