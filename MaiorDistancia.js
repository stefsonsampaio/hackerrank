function processData(input) {
    //Enter your code here
    let qtdLinhas = input.split('\n')
    let n = parseInt(qtdLinhas[0])
    let coordenadas = []
    for (i = 1; i <= n; i++) {
        let [x, y] = qtdLinhas[i].split(' ').map(Number)
        coordenadas.push([x, y])
    }    
    let maxDistancia = 0
    for (i = 0; i < n; i++) {
        for(j = i + 1; j < n; j++) {
            let x1 = coordenadas[i][0]
            let y1 = coordenadas[i][1]
            let x2 = coordenadas[j][0]
            let y2 = coordenadas[j][1]
            let distancia = Math.sqrt(((x2 - x1)** 2) + ((y2 - y1)** 2))
            if (distancia > maxDistancia) {
                maxDistancia = distancia
            }
        }
    }
    console.log(maxDistancia)
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
