    function solucao(jogadores) {
        //seu codigo aqui
        let play1 = 0
        let play0 = 0
        let enderecoJogador = 0
        jogadores.forEach(jogador => {
            if (jogador.jogada == 1) {
                play1 += 1
            } else play0 += 1
            
        })
        if(play1 == 1) {
            const enderecoJogador = jogadores.find(jogador => jogador.jogada == 1)
            console.log(enderecoJogador.nome)
        } else if (play0 == 0) {
            const enderecoJogador = jogadores.find(jogador => jogador.jogada == 0)
            console.log(enderecoJogador.nome)
        } else {
            console.log('NINGUEM')
        }
    }

const jogadores = [
    {
      "nome": "Herman",
      "jogada": 0
    },
    {
      "nome": "Rhodes",
      "jogada": 0
    },
    {
      "nome": "Beach",
      "jogada": 0
    },
    {
      "nome": "Laurel",
      "jogada": 0
    },
    {
      "nome": "Beatrice",
      "jogada": 0
    },
    {
      "nome": "Alison",
      "jogada": 1
    },
    {
      "nome": "Saundra",
      "jogada": 0
    },
    {
      "nome": "Klein",
      "jogada": 0
    }
]

solucao(jogadores)