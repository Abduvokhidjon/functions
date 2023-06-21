// const calcArea = function(radius){
//     let area = 3.14 * radius ** 2;
//    return area;
// }

// const area = calcArea(5);
// console.log(area);

// const calcArea = (radius) => {
//     return 3.14 * radius ** 2;
// }; 
// const calcArea = radius => 3.14 * radius ** 2 // arrow function

// const area = calcArea(5);
// console.log('area is: ', area);

// const greet = function(){
//     return 'hello, world';
// }

// const greet = () => 'hello. world';
// console.log(greet())

// const bill = function(products, tax){
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total
// }
// console.log(bill([10,15,30], 0.2));

// arrow function

// const bill = (products, tax) => {
//     let total = 0
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total
// }
// console.log(bill([10,15,30], 0.2));

// functions


// const name = 'Ali';
// const greet = () => 'hello';
// let reultOne = greet();
// console.log(reultOne);

// // method 

// let resultTwo = name.toUpperCase();
// console.log(resultTwo);

// var numOne = 4
// var numTwo = 5

// const addNumbers = function(a, b) {
//     return a + b 
// };
// const subNumbers = function(a , b) {
//     return a - b
// };

// const multiplyNumbers = function (a, b) {
//     return a * b
// }
// console.log(addNumbers(numOne, numTwo));
// console.log(subNumbers(numOne, numTwo));
// console.log(multiplyNumbers(numOne, numTwo));

//redo as an array

// const delay = setTimeout(function() {
//     console.log('hello')
// }, 8000)

// delay()

// const delay = function() {
//     setTimeout(function() {
//         console.log('hello');
//     }, 2000)

// }

// delay()

// var numOne = 4
// var numTwo = 5

// const addNumbers = (a, b) => a + b
// const subNumbers = (a , b) => a - b
// const multiplyNumbers = (a, b) => a * b

// console.log(addNumbers(numOne, numTwo));
// console.log(subNumbers(numOne, numTwo));
// console.log(multiplyNumbers(numOne, numTwo));

// function saySomething() {
//     console.log(this.name + "hello");
// }

// user = { 
//     name: "Ali",
//     age: 25,
//     profession: "Web developer",
//     method: function saySomething() {
//         console.log(this.name + "hello");
//     }
// };

// user.method()

// userTwo = { 
//     name: "Sardor",
//     age: 25,
//     profession: "Web developer"};

// function saySomething() {
//     console.log(this.name + "hello");
// }

// userTwo.methodTwo = saySomething;
// userTwo.methodTwo()
let calculator = {
    sum() {
      return this.a + this.b;
    },
  
    mul() {
      return this.a * this.b;
    },
  
    read() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );