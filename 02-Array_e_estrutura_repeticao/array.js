const shoppingList = ['Rice', 'Been', 'Meat', 'WaterMelon'];

const item = shoppingList[1];
shoppingList[0] = 'Potate';

// console.log(shoppingList)
// console.log(item)

// Adicionar e remover elementos de um array
// push()	Adiciona um elemento ao final do array
shoppingList.push('Milk');

// unshift()	Adiciona um elemento no início do array
shoppingList.unshift('Coffee');

// pop()	Remove o último elemento do array
shoppingList.pop()

// shift()	Remove o primeiro elemento do array
shoppingList.shift()

// Tamanho do array
console.log(shoppingList.length);