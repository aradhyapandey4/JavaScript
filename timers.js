// syntax : setTimeout(function, milliseconds, param1, param2, ...)

alert("Hello");
const timeOut = setTimeout(() => {
    console.log("after  2s");
}, 3000);

let count = 0;
const timeinterval = setInterval(() => {
    console.log("hi");
    count++;
    if (count > 3) {
        clearInterval(timeinterval);
    }
}, 2000);
