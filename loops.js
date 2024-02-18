"use strict";

// for loop
/*
let n = prompt("Enter the value of n");
console.log(typeof n);
for (let i = 0; i < n; i++) {
    // console.log(typeof i);
    console.log(i);
}
*/

//for in loop
/*
let obj = {
    mike: 345,
    john: 54,
    joe: 9565,
}

for (let i in obj) {
    console.log("I am " + i + " and my marks are " + obj[i]);
}
*/


// forEach loop
const arr = [1, 2, 3, 4, 5];
let arr1 = [];
arr.forEach(function (value, i, arr1) {
    console.log(value, i);
    arr1.push(value + 1);
    // value = value + 1;

});

console.log(arr1);
console.log(arr);


