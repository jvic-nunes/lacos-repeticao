/* Desenvolva um algoritmo que peça ao usuário que insira dois números inteiros positivos 
A e B, no qual A deve ser menor que B (supõe-se que o usuário irá respeitar esse 
enunciado). O algoritmo deve mostrar, na tela, todos os números ímpares 
compreendidos entre A e B (inclusive). */

let a = 12;
let b = 700;

if (a > b){
    console.log("lê oq foi pedido sua desgraça");
} else {
    for (let i = a; i <= b; i++){
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
} 