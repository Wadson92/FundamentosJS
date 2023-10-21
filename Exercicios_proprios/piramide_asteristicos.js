let n = 5;
let symbol = "*";
let line = "";

for (let index = 0; index < n; index += 1){
  if (line.length < n){
    line = line + symbol
  }
  console.log(line);
}