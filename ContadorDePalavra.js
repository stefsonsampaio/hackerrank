function solucao(texto) {
    // Seu codigo aqui
    let newList = []
    const splitList = texto.split(' ')
    splitList.forEach(item => {
        if (item) newList.push(item)
    })
    
    console.log(newList.length)
}

function processData(input) {
	solucao(input)
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