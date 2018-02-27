try {
    x - 10;

} catch (e) {
    console.log('Erro: ' + e);
    console.log(typeof e);

} finally {
    console.log('Fim');
}


console.log(divide(10, 5));
//console.log(divide(10, 0));
//console.log(divide2(10, 0));

try {
    console.log(divide(10, 0));
} catch (e) {
    console.log(e);
    console.log(e.name);
    console.log(e.message);
}

try {
    console.log(divide2(10, 0));
} catch (e) {
    console.log(e);
    console.log(e.name);
    console.log(e.message);
}

function divide(q, d) {
    if (d == 0) {
        throw 'Divide by 0';
    }
    return q / d;
}

function divide2(q, d) {
    if (d == 0) {
        throw new Error('Divide by 0 - 2');
    }
    return q / d;
}