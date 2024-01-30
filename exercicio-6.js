/* Declare um array com alguns números inteiros quaisquer.
Depois, percorra este array e calcule a soma dos números pares presentes nesse array. */

const ar = [15, 20 , 50, 15, 67, 97];
let soma = 0;
for (let i = 0; i < ar.length; i++){
    if (ar[i] % 2 === 0){
        soma += ar[i];
        break;
    }    
}
console.log(soma);