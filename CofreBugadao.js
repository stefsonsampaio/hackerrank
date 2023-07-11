function processData(input) {
    //Enter your code here
    const newList = input.split('\n')
    function validaSenha(senha, entrada) {
        let j = 0
        for (let i = 0; i < entrada.length; i++) {
            if (entrada[i] === senha[j]) {
                j++
            }
        }
        return j === senha.length ? console.log("SIM") : console.log("NAO")
    }
    validaSenha(newList[0], newList[1])
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
