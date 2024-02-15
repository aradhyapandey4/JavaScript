/* Write your code below. Good luck! 🙂 */
const massMark = 78, heightMark = 1.68;
const massJohn = 92, heightJohn = 1.95;

let BMIMark, BMIJohn;

BMIMark = massMark / (heightMark * heightMark);
BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);

let markHigherBMI;

markHigherBMI = BMIJohn > BMIMark;

console.log(markHigherBMI);