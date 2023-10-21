const beenPrice = 10;
const totalMoney = 1;
let message = "";

// if (totalMoney < beenPrice) {
//   message = "Você não possui saldo suficiente!"
// }
// else if (totalMoney === beenPrice) {
//   message = "Você vai gastar todo o seu dinheiro!"
// }
// else {
//   message = "Pode comprar!"
// };


message = totalMoney < beenPrice ? "Você não possui saldo suficiente" : totalMoney === beenPrice ? "Você vai gastar todo o seu dinheiro" : "Pode comprar"

console.log(message);