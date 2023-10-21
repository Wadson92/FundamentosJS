const products = [
  {
    id: 1,
    category: 'Roupas',
    stock: { quantity: 10, location: 'Corredor 1' },
    reviews: [
      { user: 'Cliente1', rating: 4 },
      { user: 'Cliente2', rating: 2 },
      { user: 'Cliente3', rating: 1 },
    ],
  },
  {
    id: 2,
    category: 'Alimentos',
    stock: { quantity: 100, location: 'Corredor 3' },
    reviews: [
      { user: 'Cliente1', rating: 4 },
      { user: 'Cliente2', rating: 2 },
      { user: 'Cliente3', rating: 1 },
    ],
  },
  {
    id: 3,
    category: 'Eletronicos',
    stock: { quantity: 50, location: 'Corredor 2' },
    reviews: [
      { user: 'Cliente1', rating: 4 },
      { user: 'Cliente2', rating: 2 },
      { user: 'Cliente3', rating: 1 },
    ],
  },
];

// const addProperty = (array, name) => {
//   for (let index = 0; index < array.length; index += 1){
//     array[index][name].push({ user: 'Cliente4', rating: 5 })
//   };
// };
// addProperty(products, 'reviews');

// const newElement = (array) => {
//   array.push()
// }

console.log(products)