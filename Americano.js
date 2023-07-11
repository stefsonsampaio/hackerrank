

function solucao(numeros) {
    // seu codigo aqui
   let s = numeros.reduce((a, b) => a + b, 0)
   let posicao = s % numeros.length
   const resultado = (posicao === 0) ? numeros.length : posicao
   console.log(resultado)
}

function processData(input) {
   const strings = input.split(" ");
   const numeros = [];
   for(let i = 0; i < strings.length; i++) {
         numeros.push(parseInt(strings[i] ,10))
     }
   solucao(numeros)
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
   _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});