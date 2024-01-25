/* exercício Arrays e loops - Declare um array com alguns números inteiros quaisquer.
Depois, percorra este array, filtrando apenas os números pares e os armazenando em um novo array.
Ao final, imprima a variável do array contendo apenas os números pares no console. */

const array = [40, 20, 10, 45 ,55]
const array2 = []

for (let i = 0; i < array.length; i++ ){
    if(array[i] % 2 === 0){
        array2.push(array[i])
    }
} 
console.log(array2)
console.log("array2")