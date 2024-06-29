const massMark = 78;
const heightMark = 1.69;
const BMIMark = massMark / (heightMark ** 2);
const massJohn = 92;
const heightJohn = 1.95;
const BMIJhon = massJohn / (heightJohn ** 2);

console.log(BMIMark);
console.log(BMIJhon);

let markHigherBMI = BMIMark > BMIJhon;
console.log(markHigherBMI);