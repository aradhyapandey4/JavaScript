// without parameter
let ok = () => {
    console.log("inside arrow function\n");
    return "yes";
}


// with parameter
let ok1 = (val) => {
    console.log("val is " + val);
    return "yoo";
}

ok1(111);