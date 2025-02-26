// functions are the piece of code designed to perform a specific task

// function declaration

// these are named function they can be accessible before their definition due to hoisting
// console.log(greet("yash"));
// function greet(name){
//     return `hello,${name}`;
// }

// they behave in a manner given below 

// function greet(name){
//     return `hello,${name}`;
// }
// console.log(greet("yash"));
// function expressions

// these are the function which are assigned to a variable , they cant get accessible before their 
// definition unlike function declarations

// const greet=function(name){
//     return `hello,${name}`;
// }
// console.log(greet("yash"))

// they behave in a manner

// var add; 

// console.log(add(5, 3)); 

// add = function (a, b) {
//     return a + b;
// };


// arrow functions

//these are the shorter syntax of function expresssions

// const add=(x,y)=>x+y;
// console.log(add(5,3));

//iife immediately invoked function expression

// these are get executed suddenly after their definition

// (function(){
//     console.log("hello");
// })();

// higher order function

// these are the function that accepts other function as parameters and return other functions

// function operate(a,b,operation){
//     return operation(a,b);
// }
// const sum=(x,y)=>x+y;
// const mul=(x,y)=>x*y;
// console.log(operate(8,7,sum));
// console.log(operate(8,7,mul));

//callbacks functions 

//these are the functions that can be passed as an argument in higher order functions


//benefits of using iife functions

//basically iife function helps to avoid global scope pollution by preventing the variable not to accessible
//outside the functions and thus preventing overwritten of a variable .

// (()=>{
//     var message="hello world you are good";
//     console.log(message);
// })();
// console.log(message);//undefined