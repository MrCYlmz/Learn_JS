// function calcAge1(birthYear) {
//     return 2024 - birthYear;
// }

// const age1 = calcAge1(1999);
// console.log(age1);

// const calcAge2 = function (birthYear) {
//     return 2024 - birthYear;
// }

// const age2 = calcAge2(1999);

// console.log(age1, age2);

// const calcAge3 = birthYear => 2024 - birthYear;

// const age3 = calcAge3(1999);
// console.log(age3);

// const yearsUntilRetirement = birthYear => {
//     const age = 2024 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }
// console.log(yearsUntilRetirement(1999));
// const friend1 = "a";
// const friend2 = "b";
// const friend3 = "c";
// const friends = [friend1, friend2, friend3];

// // const years = new Array(1991,1984,2008,2020);

// // console.log(years[2]);
// // console.log(friends.length);
// //add elements
// pushedElement = friends.push("d");
// console.log(pushedElement);
// console.log(friends);
// friends.unshift("x");
// console.log(friends);

// poppedElement = friends.pop();
// console.log(friends);
// console.log(poppedElement);
// shifedElment = friends.shift();
// console.log(shifedElment);
// console.log(friends);

// console.log(friends.indexOf("a"));
// console.log(friends.includes('c'));

// const jonasArray = ["jonas",
//     "yilmaz",
//     2024 - 1999,
//     "frontend dev",
//     ["c", "b", "a"]
// ];

// const celal = {
//     firstName: "Celal",
//     lastName: "Yilmaz",
//     age: 2024 - 1999,
//     job: "frontend dev",
//     friends: ["a", "b", "v"]
// };
// console.log(celal.lastName);
// console.log(celal['lastName']);

// const interstedIn = prompt("what do you want to know about Celal? Choose between firstName, lastName, age, job and friends");

// console.log(celal[interstedIn])

// console.log(`${celal.firstName} has  ${celal.friends.length} and his best friend is called ${celal.friends[0]}`)

// const celal = {
//     firstName: "Celal",
//     lastName: "Yilmaz",
//     birthYear: 1999,
//     job: "frontend dev",
//     friends: ["a", "b", "v"],
//     hasDriverLicense: false,
//     calcAge: function (birthYear) {
//         return 2024 - birthYear;
//     }
// };

// console.log(celal.calcAge(1999));
// console.log(celal['calcAge'](1999));

// const celal2 = {
//     firstName: "Celal",
//     lastName: "Yilmaz",
//     birthYear: 1999,
//     job: "frontend dev",
//     friends: ["a", "b", "v"],
//     hasDriverLicense: false,
//     calcAge: function () {
//         return 2024 - this.birthYear;
//     }
// };

// console.log(celal2.calcAge())

const celal3 = {
    firstName: "Celal",
    lastName: "Yilmaz",
    birthYear: 1999,
    job: "frontend dev",
    friends: ["a", "b", "v"],
    hasDriverLicense: false,
    calcAge: function () {
        this.age = 2024 - this.birthYear;
    }
};

console.log(celal3.calcAge());
console.log(celal3.age);

const celal4 = {
    firstName: "Celal",
    lastName: "Yilmaz",
    birthYear: 1999,
    job: "frontend dev",
    friends: ["a", "b", "v"],
    hasDriverLicense: false,

    calcAge: function () {
        return 2024 - this.birthYear;
    },
};

console.log(celal4.age);

