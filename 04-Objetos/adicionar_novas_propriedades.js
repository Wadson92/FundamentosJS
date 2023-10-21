const customer = {
  firstName: 'James',
  age: 26,
  job: 'Doctor'
};

customer.lastName = 'Wayne';

// Função que adicionará de forma dinâmica e automática a chave e o valor caso não exista.
const addProperty = (object, key, value) => {
  if (typeof object[key] === 'undefined'){ // Nesse if, eu pergunto se a chave que estou tentando adicionar um valor, existe dentro do objeto ou não, se sim atualiza o valor, se não ele cria uma nova chave e atribue o valor.
    object[key] = value;
  }
}
addProperty(customer, 'birthDay', '10/05/1991')

console.log(customer)