// Desafio 01
const compareTrue = (bool1, bool2) => {
  return bool1 && bool2 === true ? true : false;
};
// console.log(compareTrue(false, false));

// Desafio 02
const calcArea = (base, height) => {
  return (base * height) / 2;
};
// console.log(calcArea(5,2));

// Desafio 03
const splitSentence = (phrase) => {
  console.log(phrase.split(' '))
};
// splitSentence('go trybe');

// Desafio 04
const names = ['Paulo', 'Joana', 'Maria', 'Flávio', 'Ana'];
const concatName = (array) => {
  return `${array.at(-1)}, ${array[0]}`
};
// console.log(concatName(names));

// Desafio 05
const footballPoints = (wins, ties) => {
  let result = wins*3 + ties*1;
  return `O time teve ${wins*3} vitórias e ${ties*1} empates.
  Totalizando: ${result} pontos.`
};
// console.log(footballPoints(14, 8));

// Desafio 06
const highestCount = (array) => {
  let number = 0;
  let count = 0;
  for (let index = 0; index < array.length; index += 1){ //Nesse for eu vou armazenar o maior valor dentro os números.
    if (array[index] > number){
      number = array[index];
    }
  }
  for (let index = 0; index < array.length; index += 1){ //Nesse for eu vou contar a quantidade de vezes que esse maior valor aparece no array.
    if (array[index] === number){
      count += 1;
    }
  }
  return count;
};
console.log(highestCount([0,4,4,4,6,6,3,1]))