let word = 'tryber';
let reverseWord = '';
// 1 - Pior forma de resolver o problema
// let splitString = word.split('');
// let reverseStr = splitString.reverse()
// let joinStr = reverseStr.join('');

// 2 - Forma simples e eficaz
// reverseWord = word.split('').reverse().join('');

// 3 - Forma mais complexa mas muito melhor didadicamente.
for (let index = word.length -1; index >= 0; index -= 1){
  reverseWord += word[index];
}

console.log(reverseWord)