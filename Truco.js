const cartaAtual = ['Q', 'J', 'K', 'A', '2','3']
const manilha = ['J', 'K', 'A', '2','3', 'Q']

function solucao(carta) {
    let i = cartaAtual.indexOf(carta)
    console.log(manilha[i])
}

function processData(input) {
    solucao(input);
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