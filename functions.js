// - Exercise 1: Write a JavaScript program that takes a number as 
// input and checks if it is even or odd. Use a conditional 
// statement to display the result.

// function even_odd (number) 
// {
//     if (number % 2 == 0){
//         console.log("Number is even!");
//     } else {
//         console.log("Number is odd!");
//     }
// }

// even_odd(9)

// // - Exercise 2: Write a JavaScript program that 
// // uses a loop to calculate and display 
// // the sum of all numbers from 1 to a given input number.

// function sumOfnumbers(n) 
// {
// var sum = 0;
//     for (i = 1, i <= n, i++) {

//     }
//     console.log(sum);
// }
// sumOfnumbers(3)

// Write a JavaScript program that takes input from the user for their age and 
// determines their eligibility for driving based on the following criteria:

// - If the age is less than 16, display a message saying "Sorry, you are not 
// eligible to drive."
// - If the age is between 16 and 17 (inclusive), display a message saying 
// "You are eligible for a learner's permit."
// - If the age is 18 or above, display a message saying "You are eligible 
// for a driver's license."
const prompt = require("prompt-sync")();

function checkEligibilitytodrive () {
age = prompt("How old are you? ");
    if (age < 16) {
        console.log("Sorry, you are not eligible to drive.");
    } else if (16 <= age && age <= 17) {
        console.log("You are eligible for a learner's permit.");
    } else {
        console.log("You are eligible to drive.");
    }
}

checkEligibilitytodrive()