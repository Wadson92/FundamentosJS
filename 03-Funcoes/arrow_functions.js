// const sum = (num1, num2) => {
//   return num1 + num2;
// }
// console.log(sum(10,15));

// // Arrow function simplificada em uma linha
// const mult = (num1, num2) => { return num1 * num2 };

// // Arrow function com return implícito.
// const subtraction = (num1, num2) => num1 - num2;

// const array1 = [1, 6, 8, 19, 69];
// const array2 = [6, 9, 21, 78, 1];

// const sumArray = (array) => {
//   let sum = 0;
//   for (let index = 0; index < array.length; index += 1){
//     sum += array[index];
//   }
//   return sum;
// };

// console.log(sumArray(array1));
// console.log(sumArray(array2));

const phrase = 'The lord of the wings - Return of the King!'

// Uma solução mais trabalhada, mas não mais simples.
// const countWords = (phrase) => {
//   let words = phrase.split(' ');
//   let sumQtd = 0;
//   for (let index = 0; index < words.length; index += 1){
//     sumQtd = sumQtd + 1;
//   }
//   return sumQtd;
// };
// console.log(countWords(phrase));

// Solução bem simples e funcional:
const countWords = (phrase) => phrase.split(' ').length;
console.log(countWords(phrase));
