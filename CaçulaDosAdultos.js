
function solucao(lista) {
  // seu codigo aqui
    let youngest = 10000000000000
    lista.forEach(age => {
      if (age < youngest && age > 17) youngest = age
    })
    if (youngest == 10000000000000) console.log('CRESCA E APARECA')
    else console.log(youngest)
}



function processData(input) {
    //Enter your code here
  	const strings = input.split(" ");
    const numeros = [];
	for(let i = 0; i < strings.length; i++) {
    	  numeros.push(parseInt(strings[i] ,10));
  	}
    solucao(numeros);
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
