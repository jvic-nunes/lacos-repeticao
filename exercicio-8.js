/* Exercício array e loop - Declare um array com alguns números quaisquer.
Depois, faça um programa que encontre o maior número desse array e o imprima no console. */

const numeros = [1 ,2 ,3 , 4, 8, 15, 5000, 500];
let maior = 0;
/* for (let i = 0; i < ar.length; i++){
    if (numeros[i] > maior){
        maior = ar[i]
    }        
}
console.log(maior) */

for (const numero of numeros) {
    if (numero > maior){
        maior = numero
    }
}
console.log(maior);