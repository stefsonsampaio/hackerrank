function processData(input) {
    //OU TODAS AS SUAS LETRAS FOREM MAIuSCULAS OU SE A PRIMEIRA FOR MINuSCULA E TODAS AS OUTRAS MAIuSCULAS.
    //Enter your code here
    let restoPalavra = input.slice(1, input.length)
    if (input == input.toUpperCase()) console.log(input.toLowerCase())
    else if (input[0] == input[0].toLowerCase() && restoPalavra == restoPalavra.toUpperCase()) {
        console.log(input[0].toUpperCase() + restoPalavra.toLowerCase())
    } else console.log(input)
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