let n = 5;
let symbol = "*";
let line = "";
let inputPosition = n - 1;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1){
  for (let colIndex = 0; colIndex < n; colIndex += 1){
    if (colIndex < inputPosition){
      line = line + " ";
    }else {
      line = line + symbol;
    }
  }
  console.log(line);
  line = "";
  inputPosition = inputPosition - 1;
}