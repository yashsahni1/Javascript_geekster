// Scope are of two types global scope and local scope

 // local scope  is also of two types block scope and function scope

//  function sum(){
//     let a=10;
//         let b=20;
//             let c=30;
//             let sum=a+b+c;
//             console.log(a);
// }
// sum();
// console.log(a);

// error----console.log(a);-----  let functional scope  ke andar milta hai bahar nahi milta

//  function sum(){
//     var a=10;
//         let b=20;
//             let c=30;
//             let sum=a+b+c;
//             console.log(a);
// }
// sum();
// console.log(a);
 
//error-----var functional scope use karta hai bahar nahi milega

// function sum(){
//     const a=10;
//         let b=20;
//             let c=30;
//             let sum=a+b+c;
//             console.log(a);
// }
// sum();
// console.log(a);

//error-----const functional scope use karta hai bahar nahi milega

// if(true){
//     let a=10;
//     console.log(a);
// }
// console.log(a);

//error-----console.log(a);-------let block scope ke andar milta hai bahar nahi milta

// if(true){
//     var a=10;
//     console.log(a);
// }
// console.log(a);

// but var block scope ke bahar bhi mil jaata hai


// if(true){
//     const a=10;
//     console.log(a);
// }
// console.log(a);

//error-----console.log(a);-------const block scope ke andar milta hai bahar nahi milta


// global scope

// let a=10;

// in js complier will do or read this as 

// {
//     let a=10;
// }

// but in case of var
 //a=10;
  //then js compiler will read this as 
  //var a=10;

// js compiler will read this 
// {
//   let a=10;
//   function sum(){
//     console.log(a);
//   }
// sum();
// }

// let a=10;
// function sum(){
//     let x=10;
//     function abcd(){
//         let y=10;
//         function xyzc(){
//             let z=10;
//             console.log(x+y+z+a);
//         }
//         xyzc();
//     }
//     abcd();
// }
// sum();

//nested functions will use lexical scoping(upto global scope it will check).........