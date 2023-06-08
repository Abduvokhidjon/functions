// const prompt = require("prompt-sync")();
// function sumOfnumbers() {
//     input = prompt("Insert numbers? ");
//     sumNumber = input.parseInt()
// }
// sumOfnumbers()

// - Exercise 2: Create an object representing a person with properties such as
// name, age, and occupation. Write a function that takes a person object as input and
// displays their information in a formatted way.

// let person = {name: "Ali", age: 25, occupation: "Unemployed"};
// function displayInput(person) {
// console.log("Name is " + person.name, "Age is " + person.age, "Ocupation is " + person.occupation);
// }

// displayInput(person)

// - Exercise 3: Write a JavaScript program that takes an array of objects,
// each representing a student with properties such as name and score.
// Calculate and display the average score of all the students.

const array1 = [
  {
    name: "Ali",
    score: 75,
    name: "Shak",
    score: 95,
    name: "Sukhrob",
    score: 47,
    name: "Aziz",
    score: 53,
    name: "Mahmud",
    score: 68,
  },
];
var sum = 0;

for (i = 0; i < array1.length; i++) {
  sum += array1[i].score;
}
var average = sum / array1.length;

console.log(average);
