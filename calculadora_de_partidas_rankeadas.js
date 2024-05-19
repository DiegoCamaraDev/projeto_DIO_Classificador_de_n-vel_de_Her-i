/**
 Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
 */


//resposta 

//criando variaveis

let rankedScore = getRankedScore(110,10)
let rankedPosition = ""

//console.log(rankedScore)
//função para achar o saldo de vitorias - derrotas e assim encontrar o que usaremos para classificar nas ranquedas  
function getRankedScore(heroVictory, heroDefeat){
    let ranquedPoints = heroVictory - heroDefeat
    return ranquedPoints
}
//Se vitórias for menor do que 10 = Ferro
if (rankedScore <= 10){
    rankedPosition = "Ferro"
    console.log("Seu Herói tem de saldo de " + rankedScore + " vitórias, ele está no nível " + rankedPosition + "!")
} else if((rankedScore > 10) && (rankedScore <= 20)){//Se vitórias for entre 11 e 20 = Bronze
    rankedPosition = "Bronze"
    console.log("Seu Herói tem de saldo de " + rankedScore + " vitórias, ele está no nível " + rankedPosition + "!")
}else if((rankedScore > 20) && (rankedScore <= 50)){//Se vitórias for entre 21 e 50 = Prata
    rankedPosition = "Prata"
    console.log("Seu Herói tem de saldo de " + rankedScore + " vitórias, ele está no nível " + rankedPosition + "!")
}else if((rankedScore > 50) && (rankedScore <=80)){//Se vitórias for entre 51 e 80 = Ouro
    rankedPosition = "Ouro"
    console.log("Seu Herói tem de saldo de " + rankedScore + " vitórias, ele está no nível " + rankedPosition + "!")
}else if((rankedScore > 80) && (rankedScore <=90)){//Se vitórias for entre 81 e 90 = Diamante
    rankedPosition = "Diamante"
    console.log("Seu Herói tem de saldo de " + rankedScore + " vitórias, ele está no nível " + rankedPosition + "!")
}else if((rankedScore > 90) && (rankedScore <= 100)){//Se vitórias for entre 91 e 100= Lendário
    rankedPosition = "Lendário"
    console.log("Seu Herói tem de saldo de " + rankedScore + " vitórias, ele está no nível " + rankedPosition + "!")
}else{//Se vitórias for maior ou igual a 101 = Imortal
    rankedPosition = "Imortal"
    console.log("Seu Herói tem de saldo de " + rankedScore + " vitórias, ele está no nível " + rankedPosition + "!")
}
