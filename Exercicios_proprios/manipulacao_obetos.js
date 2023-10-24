// Por meio do array de frutas chamado basket, crie um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor.
// Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'] deverá retornar:
/*{ 
  Melancia: 3,
  Abacate: 1,
  Uva: 1 
}*/

// Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates....

const basket = [
  'Abacate', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Uva', 'Laranja',   'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate',   'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja',   'Abacate', 'Abacate', 'Pera', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Pera', 'Jaca', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

const result = {};

const arrayToObj = () => {
  for (let index = 0; index < basket.length; index += 1){
    let fruits = basket[index];
    if (!result[fruits]){
      result[fruits] = 1;
    }else{
      result[fruits] += 1;
    };
  };
};
arrayToObj()
// console.log(result);
const entries = Object.entries(result);
// console.log(entries);

const newArray = [];

const createString = () => {
  for (let index = 0; index < entries.length; index += 1){
    if (entries[index][1] > 1){
      newArray.push(`${entries[index][1]} ${entries[index][0]}s`);
    }else{
      newArray.push(`${entries[index][1]} ${entries[index][0]}`);
    }
  }
  console.log(newArray);
  return `Sua cesta possui: ${newArray.join(', ')}.`;
}
console.log(createString());
