// // Função sem parametros
// function giveGreentins(){
//   return "Olá, Mundo!";
// }
// console.log(giveGreentins());

// // Função com parametros
// let num1, num2;
// function sum(num1, num2){
//   return num1 + num2;
// }
// console.log("O resultado da soma " + sum(10,15));

const trybeBankCustomers = ['Olivia', 'Nat', 'Gus'];
const pirilamposCustomers = ['Noel', 'Carol', 'Angelo', 'Kissyla'];

function findElement(array, element){
  return array.includes(element);
}
console.log(findElement(trybeBankCustomers, 'Guss'));
console.log(findElement(pirilamposCustomers, 'Carol'));