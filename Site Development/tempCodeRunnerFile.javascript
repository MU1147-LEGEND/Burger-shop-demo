function sum(n) {
    let add = (n * (n + 1)) / 2;
    console.log("Sum = "+add);
}

function forLoop(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    console.log("Sum = " + total);
}

sum(9999999999);
forLoop(9999999999);