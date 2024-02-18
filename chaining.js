const balance = [100, -50, 2, -45, 28, -10];

const remaining = balance
    .filter(function (curr) {
        return curr > 0;
    })
    .map(function (curr) {
        return curr * 1.5;
    })
    .reduce(function (acc, curr) {
        return acc + curr;
    }, 0);

console.log(remaining);