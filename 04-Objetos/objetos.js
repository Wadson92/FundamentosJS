// Objeto simples
const car = {
  brand: 'Fiat',
  model: '500',
  color: 'White',
  weight: 1061,
};
// console.log(car);

// Objeto dentro de objeto
const account = {
  agency: '0975',
  bank: {
    cod: '012',
    id: 4,
    name: 'TrybeBank',
  },
};
// console.log(account.bank.name)

// Objeto dentro de objeto dentro de objeto
const user = {
  id: 99,
  email: 'jakeperalta@gmail.com',
  info: {
    name: 'Jake',
    lastName: 'Peralta',
    address: {
      street: 'Rua Dalvo Trombeta, 357 - Fundos',
      district: 'Xererê',
      city: 'Santana do Livramento',
      state: 'Rio Grande do Norte',
    },
  },
};

// console.log(user['id']); // 99

// console.log(user.email); // jakeperalta@gmail.com

// console.log(user.info.address.street); // Rua Dalvo Trombeta, 357 - Fundos

// console.log(user['info']['address']['city']); // Santana do Livramento

// Objeto dentro de Array
const residents = [
  {
    name: 'Luíza',
    lastName: 'Guimarães',
    floor: 10,
    apartment: 1005,
  },
  {
    name: 'William',
    lastName: 'Albuquerque',
    floor: 5,
    apartment: 502,
  },
  {
    name: 'Murilo',
    lastName: 'Ferraz',
    floor: 8,
    apartment: 804,
  },
  {
    name: 'Zoey',
    lastName: 'Brooks',
    floor: 1,
    apartment: 101,
  },
];
// console.log(residents)
// console.log(residents[0]);
// const firstResident = residents[0];
// console.log(firstResident);

// const residentsName = () => {
//   let names = [];
//   for (let index = 0; index < residents.length; index += 1){
//     names.push(residents[index].name);
//   }
//   return names;
// }
// console.log(residentsName());

const player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3,
  },
  bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
};

const message = `A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade`;

const achievements = `A jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo por ${player['bestInTheWorld'].length} vezes`;

console.log(achievements)