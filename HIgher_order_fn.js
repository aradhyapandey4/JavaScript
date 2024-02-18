//1. Map method - used to perform an operation on all array elements and returns new array

const arr = [1, 2, 3, 4, 5];

let change = 2;

const newarr = arr.map(function (value, change) {
    return change + value;
});

console.log(arr);
console.log(newarr);

//2. filter method - performs filteration operation, and keeps remaining ones in new array
const arr1 = [1, -3, 4, -2, 0];

const newarr1 = arr1.filter(function (value) {
    return value >= 0;
});

console.log(arr1);
console.log(newarr1);

//3. reduce method - returns single value generated after performing operation on all elements

const balance = [100, -20, 1000, -45, -30, 20];

const total = balance.reduce(function (acc, curr, i, arr) {
    // console.log(arr, balance);
    // console.log(i);
    return acc + curr;
}, 0);

console.log(total);