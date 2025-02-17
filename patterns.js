// function printPattern(rows){
//     for(let i=0;i<rows;i++){
//         let str="";
//         //adding leading spaces 
//         for(let j=0;j<rows-i-1;j++){
//             str+=" ";
//         }
//         //printing numbers
//         for(let k=1;k<=2*i+1;k++){
//             str+=k;
//         }
//         console.log(str);
//     }
// }
// printPattern(4);

// function printPattern(rows) {
//     for (let i = 1; i <= rows; i++) {
//         let str = " ".repeat(rows - i); // Leading spaces
//         for (let j = 1; j <= i; j++) {
//             str += j;
//         }
//         console.log(str);
//     }

//     for (let i = rows - 1; i >= 1; i--) {
//         let str = " ".repeat(rows - i); // Leading spaces
//         for (let j = 1; j <= i; j++) {
//             str += j;
//         }
//         console.log(str);
//     }
// }

// printPattern(4);

// function printPattern(n) {
//     // Upper part including the middle row
//     for (let i = 1; i <= n; i++) {
//         let str = "";
//         for (let j = i; j >= 1; j--) {
//             str += j;
//         }
//         console.log(str);
//     }

//     // Lower part
//     for (let i = n - 1; i >= 1; i--) {
//         let str = "";
//         for (let j = i; j >= 1; j--) {
//             str += j;
//         }
//         console.log(str);
//     }
// }

// printPattern(4);

// function printPattern(rows) {
//     for (let i = 0; i < rows; i++) {
//         let spaces = " ".repeat(i);
//         let numbers = "";
//         for (let j = 1; j <= (2 * (rows - i) - 1); j++) {
//             numbers += j;
//         }
//         console.log(spaces + numbers);
//     }
// }

// printPattern(5);
