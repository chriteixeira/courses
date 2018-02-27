function fun(a) {
    setTimeout(function () {
        console.log(a);
    }, (a + 1) * 1000);
}

fun(1);
fun(2);
fun(3);


function outer(n) {
    for (var i = 0; i < 3; i++) {
        inner(i);
    }

    function inner(a) {
        setTimeout(function () {
            console.log(a);
            console.log(n);
        }, (a + 1) * 1000);
    }
}

outer(0);
outer(1);
outer(3);