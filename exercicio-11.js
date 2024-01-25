/* Declare um array contendo alguns números quaisquer.
Depois crie um novo array que contenha apenas os números do array original 
que estejam entre 10 e 20, incluindo esses números, ou que sejam maiores que
 100. Ao final, imprima a variável que guarda o novo array. */

 const array = [2, 15, 20, 40, 700];
 const novoArray = [];
 
for(let i = 0; i < array.length; i++){
    if(array[i] >= 10 && array[i] <= 20 || array[i] > 100){
        novoArray.push(array[i]);
    }
}console.log(novoArray);
 








/* const array = [2, 15, 20, 40];
const novoArray = [];

for(let i = 0; i < array.length; i++){
    if(array[i] >= 10 && array <= 20 || array[i] > 100){
        novoArray.push(array[i]);
    }
}
console.log(novoArray); */