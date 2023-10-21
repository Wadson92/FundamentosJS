const product = {
  name: 'Rufles Original',
  price: 4.80,
  company: 'Elma chips',
  nutritionInfo: {
    carbohudrates: 12,
    sugar: 0,
    sodium: 129,
  }
};

let keys = Object.keys(product);

for (let index = 0; index < keys.length; index += 1){
  console.log(keys[index]);
}

// console.log(Object.values(product));
// console.log(Object.entries(product));

