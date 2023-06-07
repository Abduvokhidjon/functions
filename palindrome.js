// Write a JavaScript program that prompts the user for a sentence and checks
// if it is a palindrome. A palindrome is a word, phrase, number, or other sequence of
// characters that reads the same forward and backward, ignoring spaces, punctuation, and
// capitalization.

// The program should perform the following steps:

// 1. Prompt the user for a sentence.
// 2. Remove all spaces and punctuation from the sentence.
// 3. Convert the sentence to lowercase.
// 4. Reverse the sentence.
// 5. Compare the reversed sentence with the original sentence.
// 6. Display a message indicating whether the sentence is a palindrome or not.

// For example, if the user enters the sentence "A man, a plan, a canal, Panama!",
// the program should recognize it as a palindrome and display a message such as
// "The sentence 'A man, a plan, a canal, Panama!' is a palindrome!".

// Hints:
// - Use string methods like `replace()`, `toLowerCase()`, and `split()` to manipulate
// the sentence.
// - Pay attention to punctuation marks and spaces when comparing the reversed sentence
// with the original sentence.


const prompt = require("prompt-sync")();

function checkIfpalindrome() {
  var sentence = prompt("Please, type your sentence: ");
  if (sentence === "") {
    console.log("Please, enter a string");
  } else {
    var punctuationless = sentence.replace(/[\s.,/#><@+!$%^&*;:{}=\-_'`~()?""]/g,"");
    var lowercasethesen = punctuationless.toLocaleLowerCase();
    var splittedSentence = lowercasethesen.split("");
    var reversedSentence = splittedSentence.reverse();
    var joinLetters = reversedSentence.join("");
    if (lowercasethesen === joinLetters) {
      console.log("The sentence is palindrome! ");
    } else {
      console.log("The sentence is not palindrome! ");
    }
  }
}

checkIfpalindrome();
