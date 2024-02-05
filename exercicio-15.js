/* Neste exercício deveremos ler um array de números para separar os pares dos ímpares. Para isso, 
verificaremos item por item do array original e se for par, adicionaremos o número em um array de pares, 
e se for ímpar, adicionaremos em um array de ímpares.

Ao final, deveremos imprimir primeiro o array de pares, e em seguida, imprimir o array de ímpares 
(Obs.: não é necessário imprimir item a item dos arrays, pode ser os arrays inteiros). */

const arrayOriginal = [1, 2, 5, 7, 8, 9, 10, 15, 20, 25, 24];
const arrayPares = [];
const arrayImpares = [];

for(let i = 0; i < arrayOriginal.length; i++){
    if(arrayOriginal[i] % 2 === 0){
        arrayPares.push(arrayOriginal[i]);
    } else {
        arrayImpares.push(arrayOriginal[i]);
    }
}
console.log(arrayImpares);
console.log(arrayPares);