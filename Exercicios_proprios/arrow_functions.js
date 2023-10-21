// Função para gerar um quadro de asterísticos:
// const asterisksFrame = (num) => {
//   let symbol = "*";
//   let line = '';
  
//   for (let index = 0; index < num; index += 1){
//     line += symbol;
//   }
//   for (let index = 0; index < num; index += 1){
//     console.log(line);
//   }
//   return line;
// };

// console.log(asterisksFrame(4));

// Função para gerar uma pirâmide com lado invertido:
const asterisksPyramid = (num) => {
  let line = '';
  let symbol = '*';
  let inputPosition = num - 1;

  for (let lineIndex = 0; lineIndex < num; lineIndex += 1){ // Nesse primeiro For, eu vou definir a quantidade de linhas e popula-las com um '*'.
    for (let colIndex = 0; colIndex < num; colIndex += 1){ // Para cada linha definida, eu vou adicionar as colunas que totalizaram o valor passado no parâmetro 'num'.
      if (colIndex < inputPosition){
        line += ' ';
      }else{
        line += symbol;
      }
    }
    console.log(line);
    line = '';
    inputPosition -= 1;
  }
  return line;
}
console.log(asterisksPyramid(5));
