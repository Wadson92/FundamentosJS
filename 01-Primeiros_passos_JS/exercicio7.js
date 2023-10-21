let aliquotaINSS;
let aliquotaIR;
let salarioBruto = 3000;

// let aliquota8 = salarioBruto * 0.08
// let aliquota9 = salarioBruto * 0.09
// let aliquota11 = salarioBruto * 1.11

// let salarioBase1 = (salarioBruto - aliquota8)
// let salarioBase2 = (salarioBruto - aliquota9) * 0.75

// if (salarioBase1 <= 1.903,98){
//   console.log("Isento de IR")
// }else if (salarioBase2 >= 1.903,99 && salarioBase2 <= 2.826,65){
//   let totalIR = salarioBase2 * 0.75 - 142.80
// }

// console.log(salarioBruto * 0.08)
// console.log(aliquota8)
// console.log(salarioBase2)

// Para encontrar a alíquota do INSS, é necessário ter o parâmetro(porcentagem dentro de uma condição. Ex.: salários brutos de até 1556.94 a % dedutiva é de 8%) para calcular em que faixa de % será o valor da dedução do INSS sob o salário bruto.
if (salarioBruto<=1556.94) {
  aliquotaINSS = salarioBruto * 0.08;
}else if (salarioBruto <= 2594.92){
  aliquotaINSS = salarioBruto * 0.09;
}else if (salarioBruto <= 5189.82){
  aliquotaINSS = salarioBruto * 0.11
}else {
  aliquotaINSS = 570.88;
}

// Salário base: eu preciso deduzir do meu salário bruto o valor da minha alíquota de INSS
let salarioBase = salarioBruto - aliquotaINSS;

// Agora eu preciso identificar o valor que será repassado de IR com base no valor do salário base.
if (salarioBase <= 1903.98){
  aliquotaIR = 0;
}else if (salarioBase <= 2826.65){
  aliquotaIR = salarioBase * 0.075 - 142.80
}else if (salarioBase <= 3751.05){
  aliquotaIR = salarioBase * 0.15 - 354.80
}else if (salarioBase <= 4664.68){
  aliquotaIR = salarioBase * 0.225 - 636.13
}else {
  aliquotaIR = salarioBase * 0.275 - 869.36
}

// Valor do salários líquido: salário base - aliquota do IR
let salarioLiquido = salarioBase - aliquotaIR;

console.log(salarioBase)
console.log(Math.round(aliquotaIR))
console.log("Salário líquido: R$" + salarioLiquido)