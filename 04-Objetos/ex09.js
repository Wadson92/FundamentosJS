// Por meio do array de frutas chamado basket, crie um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor.
// Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'] deverá retornar:
/*{ 
  Melancia: 3,
  Abacate: 1,
  Uva: 1 
}*/

// Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates....

const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

const result = {};

for (let index = 0; index < basket.length; index += 1){
  let fruits = basket[index];
  if (!result[fruits]){
    result[fruits] = 1;
  }else {
    result[fruits] += 1;
  }
}
const entries = Object.entries(result);

const newArray = [];

for (let index = 0; index < entries.length; index += 1){
  if (entries[index][1] > 1){
    newArray.push(`${entries[index][1]} ${entries[index][0]}s`);
  }else {
    newArray.push(`${entries[index][1]} ${entries[index][0]}`);
  };
};
console.log(`Sua cesta possui: ${newArray.join(', ')}.`);
