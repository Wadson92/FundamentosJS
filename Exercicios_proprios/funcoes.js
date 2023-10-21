// const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];

// function addCustomer(str) {
//   if (typeof str != 'string') {
//     return 'O parâmetro passado deve ser do tipo string';
//   }
//   trybeBankCustomers.push(str);
// }
// // addCustomer('Gus');
// addCustomer('Wadson');
// // trybeBankCustomers.pop()
// console.log(trybeBankCustomers)

const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];

function addCustomers(customer, newCustomer) {
  for (let index = 0; index < newCustomer.length; index += 1){
    if (typeof newCustomer[index] === 'string'){
      customer.push(newCustomer[index]);
    }else{
      return 'Todos os valores precisam ser strings'
    }
  }
  return customer;
}

console.log(addCustomers(trybeBankCustomers, ['Joaquim', 'Joana'])); // Pessoa adicionada com sucesso!
console.log(addCustomers(trybeBankCustomers, ['Joaquim', 78])); // Pessoa adicionada com sucesso!