

function solucao(min, km) {
    //seu codigo aqui
    let custoMin = 0
    let custoKm = 0
    if (min < 21) custoMin = (min*50)
    else custoMin = (20*50) + ((min-20)*30)
    if (km < 11) custoKm = (km*70)
    else custoKm = (10*70) + ((km-10)*50)
    console.log(Math.round(custoKm+custoMin))
}

function processData(input) {
    const x = input.split(" ");
    const min = parseFloat(x[0], 10);
    const km = parseFloat(x[1], 10);
    solucao(min, km);
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