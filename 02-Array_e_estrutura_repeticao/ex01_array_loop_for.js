const numbers = [6, 10, 4, 20, 70, 8, 100, 2, 36, 26];

// // Ex.: 01
// console.log("Exercício 01")
// for (let index = 0; index < numbers.length; index += 1){
//   console.log(numbers[index]);
// };

// // Ex.: 02
// let sum = 0;
// console.log("Exercício 02")
// for (let index = 0; index < numbers.length; index += 1){
//   sum += numbers[index];
// }
// console.log(sum);

// // Ex.: 03
// console.log("Exercício 03")
// let average = sum / numbers.length;
// console.log(average);

// // Ex.: 04
// console.log("Exercício 04")
// if (average <= 20){
//   console.log("O valor da média aritmética é menor ou igual a 20!");
// }else{
//   console.log("O valor da média aritmética é maior que 20!");
// }

// // Ex.: 05
// let major = 0;
// console.log("Exercício 05")
// for (let index = 0; index < numbers.length; index += 1){
//   if (numbers[index] > major){
//     major = numbers[index]
//   }
// }
// console.log(major);

// Ex.: 06
console.log("Exercício 06")
// Nessa solução eu crio um array chamado "odd" e coloco os números ímpares do array numbers
// let odd = [];
// for (let index = 0; index < numbers.length; index += 1){
//   if (numbers[index] % 2 != 0){
//     odd.push(numbers[index])
//   }
// }
// console.log(odd)

// Nessa solução eu valido os números ímpares, conto quantos são e mostro a quantidade, caso não exista nenhum, mostro a mensagem de erro.
let result = 0;
for (let index = 0; index < numbers.length; index += 1){
  if (numbers[index] % 2 != 0)
    result += 1;
}

if (result === 0){
  console.log("Nenhum valor ímpar encontrado");
}else{
  console.log(result);
}