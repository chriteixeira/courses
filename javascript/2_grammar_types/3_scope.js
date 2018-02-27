var x = 'x-value';
let y = 'y-value';

if (true) {
  var z = 'z-value';
  console.log(x);
  console.log(y);
  console.log(z);
}
if (true) {
  let w = 'w-value';
  console.log(x);
  console.log(y);
  console.log(z);
  console.log(w);
}

console.log(x);
console.log(y);
console.log(z);
//console.log(w);


console.log(i);
//console.log(j);

for (var i = 0; i < 3; i++) {
  console.log(i);
};

console.log(i);
// console.log(j);

for (let j = 0; j < 3; j++) {
  console.log(j);
};

console.log(i);
//console.log(j);