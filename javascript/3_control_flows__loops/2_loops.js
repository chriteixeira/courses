//FOR
for (var i = 0; i < 5; i++) {
    console.log(i);
}

//WHILE
var ii = 0;
while (ii < 5) {
    console.log(ii);
    ii++;
}

// DO...WHILE
do {
    console.log(ii);
    ii--;
} while (ii > 0)


//BREAK
while (ii < 5) {
    console.log(ii);
    break;
}

//CONTINUE
while (ii < 5) {
    if (ii == 2) {
        ii++;
        continue;
    }
    console.log(ii);
    ii++;
}

// FOR...IN
var arr = ['a', 'b', 'c'];
var obj = {
    id: '1',
    name: 'test'
}

for (var item in obj) {
    console.log(item);
    console.log(obj[item]);
}

for (var item in arr) {
    console.log(item);
    console.log(arr[item]);
}

//For...of 
//just for iterables
for (var item of arr) {
    console.log(item);
}
/*
for(var item of obj){
    console.log(item);
    console.log(obj[item]);
}
*/