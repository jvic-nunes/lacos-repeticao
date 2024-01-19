/* Faça um programa que verifica se existe o número 10 nesse array. 
Caso exista, informa a posição (índice) em que o número 10 se encontra. 
Caso não exista, deverá ser impresso -1. */

const array = [1, 5, 7, 9, 20, 50];

let i = 0
let indice = false
 while (i < array.length){
    
    if(array[i] === 10){
        console.log("posição", i)
        indice = true
    }
    i++
}

if(!indice){
    console.log("-1")
}

 
