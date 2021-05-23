// // function greet(name) {
// //     console.log("Hello - ", name);
// // }
// // greet("alex");
// // console.dir(greet);
// // let counter = 1;
// // const Interval = setInterval(function() {
// //     if (counter === 5) {
// //         clearInterval(Interval);
// //     } else {
// //         console.log(++counter);
// //     }
// // });
// // const arrow = name => console.log("hi - ", name);
// // console.log(arrow("vlad"));
// // const sum = (a = 30, b = a * 2) => a + b;
// // console.log(sum());
// // function sumAll(...all) {
// //     let result = 0;
// //     for (let num of all) {
// //         result += num;
// //     }
// //     return result;
// // }
// // const res = sumAll(1, 5, 6, 8, 3, 8, 253, 5635, 734674, 523723573483, 257);
// // console.log(res);
// const cars = ["Mazda", "Ford", "BMW'];

// const people = [
//     { name: "sanya", budget: 2000 },
//     { name: "ilya", budget: 3124 },
//     { name: "vova", budget: 2043 }
// ];
// const allBudget = people
//     .filter(person => person.budget > 2000)
//     .reduce(function(acc, person) {
//         acc += people.budget;
//         return acc;
//     }, 0);
// console.log(allBudget);

// // const fib = [1, 2, 3, 5, 8, 13, 21];
// // const pow2 = num => num ** 2;
// // const pow2Fib = fib.map(pow2);
// // const filteredNumbers = pow2Fib.filter(num => {
// //     return num > 20;
// // });
// // console.log(pow2Fib);
// // console.log(filteredNumbers);
// // let findedPerson;
// // for (const person of people) {
// //     if ((person.budget = 2000)) {
// //         findedPerson = person;
// //     }
// // }
// // console.log(findedPerson);
// // const person = people.find(person => person.budget === 2000);
// // console.log(person);
// // console.log(cars.includes("Mazda"));

// cars.unshift("Lada");
// const firstItem = cars.shift();
// const lastCar = cars.pop();
// // console.log(cars);
// // console.log(firstItem);
// // console.log(cars.reverse());
// // const text = "Привет, мы изучаем JS";
// // console.log(
// //     text
// //     .split("")
// //     .reverse()
// //     .join("")
// //     .reverse()
// // );
// // cars.push("Aist");
// // cars.unshift("Lada");
// // const index = cars.indexOf("BMW");
// // console.log(cars[index])

// function makePhrases() {
//     let words1 = ["24/7", "multi-tier", "30,000 foot", "B-to-B", "win-win"];
//     let words2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
//     let words3 = ["process", "solution", "tipping-point", "strategy", "vision"];
//     words3.switch("go");
//     var rand1 = Math.floor(Math.random() * words1.length);
//     var rand2 = Math.floor(Math.random() * words2.length);
//     var rand3 = Math.floor(Math.random() * words3.length);
//     var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
//     alert(phrase);
// }
// makePhrases();
var scores = [
    60,
    50,
    60,
    58,
    54,
    54,
    58,
    50,
    52,
    54,
    48,
    69,
    34,
    55,
    51,
    52,
    44,
    51,
    69,
    64,
    66,
    55,
    52,
    61,
    46,
    31,
    57,
    52,
    44,
    18,
    41,
    53,
    55,
    61,
    51,
    44
];
var output;
for (var i = 0; i < scores.length; i = i + 1) {
    output = "Bubble solution #" + i + " score: " + scores[i];
    console.log(output);
}