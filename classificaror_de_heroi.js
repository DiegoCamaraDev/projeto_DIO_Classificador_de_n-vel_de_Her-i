/**
 * 
 * Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
 */

//resposta 

//criando variaveis

let nomeHeroi = "Diego"
let pontosXP = 50000
let nivelHeroi = ""

//criando condidionais e repetições 
if (pontosXP < 1000)
    { //Se XP for menor do que 1.000 = Ferro
        nivelHeroi = "Ferro"
    } 
    else if ((pontosXP > 1000) && (pontosXP <= 2000))
        {//Se XP for entre 1.001 e 2.000 = Bronze
            nivelHeroi = "Bronze"
        } 
    else if ((pontosXP > 2000) && (pontosXP <= 5000))
        {//Se XP for entre 2.001 e 5.000 = Prata
            nivelHeroi = "Prata"
        } 
    else if ((pontosXP > 5000) && (pontosXP <= 7000))
        {//Se XP for entre 5.001 e 7.000 = Ouro
            nivelHeroi = "Ouro"
        }
    else if ((pontosXP > 7000) && (pontosXP <= 8000))
        {//Se XP for entre 7.001 e 8.000 = Platina
            nivelHeroi = "Platina"
        }
    else if ((pontosXP > 8000) && (pontosXP <= 9000))
        {//Se XP for entre 8.001 e 9.000 = Ascendente
            nivelHeroi = "Ascendente"
        }
    else if ((pontosXP > 9000) && (pontosXP <= 10000))
        {//Se XP for entre 9.001 e 10.000= Imortal
            nivelHeroi ="Imortal"
        }
    else 
        {//Se XP for maior ou igual a 10.001 = Radiante
            nivelHeroi ="Radiante"
        }

//saida
console.log("O herói de nome " + nomeHeroi + " está no nível " + nivelHeroi)