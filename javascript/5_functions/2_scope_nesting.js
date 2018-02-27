var text = 'this is a text';

function1();
//console.log(insideVar);

function function1() {
    var insideVar = 10;
    console.log(text);
}



function2();
function function2() {
    var insideVar2 = 100;
    console.log(text);
    function21();
    //console.log(insideVar);
    console.log(insideVar2);
    //console.log(insideVar3);

    function function21() {
        var insideVar3 = 100;
        console.log(text);
        console.log(insideVar2);
    }
}