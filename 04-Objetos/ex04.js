// Imagine que você seja responsável por cuidar do sistema de entrega de um restaurante e que precise enviar mensagens com as informações da compra. Para isso, use o seguinte código:

const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (fullOrder) => {
  const deliveryPerson = fullOrder.order.delivery.deliveryPerson;
  const clientName = fullOrder.name;
  const clientPhone = fullOrder.phoneNumber;
  const clientAddress = Object.values(fullOrder.address);
  console.log(`Olá ${deliveryPerson}, entrega para: ${clientName}, Telefone: ${clientPhone}, ${clientAddress[0]}, Número: ${clientAddress[1]}, AP: ${clientAddress[2]}.`);
}

customerInfo(order);

const orderModifier = (fullOrder) => {
  fullOrder.name = 'Luiz Silva';
  const clientName = fullOrder.name;
  const pizzaName = Object.keys(fullOrder.order.pizza);
  const drinkName = Object.entries(fullOrder.order.drinks);
  const margueritaPrice = fullOrder.order.pizza.marguerita.price;
  const pepperoniPrice = fullOrder.order.pizza.pepperoni.price;
  const drinkPrice = fullOrder.order.drinks.coke.price;

  console.log(`Olá ${clientName}, o valor total de seu pedido de ${pizzaName[0]}, ${pizzaName[1]} e ${drinkName[0][1].type} é R$ ${margueritaPrice+pepperoniPrice+drinkPrice-5},00.`);
}

orderModifier(order);