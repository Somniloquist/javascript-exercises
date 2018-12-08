const fibonacci = function(n) {
    let fibonacci = [0, 1, 1];
    if (n < 0) return 'OOPS';
    if (n <= 2) return fibonacci[n];

    for (let i = 2; i < n; i++) {
        const previous = fibonacci[i - 1];
        const current = fibonacci[i];
        fibonacci.push(previous + current);
    }

    return fibonacci[n];

}

module.exports = fibonacci
