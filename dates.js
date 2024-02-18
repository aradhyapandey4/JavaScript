// create a date

//constructor syntax:
// new Date(year,month,day,hours,minutes,seconds,ms)

const date = new Date(2037, 10, 19, 15, 23);
console.log(date);

// methods related to Date()

const yy = date.getFullYear();
const dd = date.getDay(); // sunday is 0
const mm = date.getMonth(); // january is 0

console.log(dd, mm, yy);

console.log(date.toISOString());
console.log(date.getTime());