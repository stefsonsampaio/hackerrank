


function solucao(precos) {
    //seu codigo aqui
      let soma = precos.reduce((a, b) => a + b, 0)
      if(precos.length > 2) {
          let chipiest = precos[0]
          precos.forEach(preco => {
              if (preco < chipiest) chipiest = preco
          })
          soma -= chipiest/2
          console.log(soma)
      } else console.log(soma)
  }
  
  
  
  function processData(input) {
    const lista = input.split(" ");
    lista.forEach((x, i, a) => a[i] = parseInt(x, 10));
    solucao(lista);
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