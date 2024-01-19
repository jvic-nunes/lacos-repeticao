/* Ecercício de loop e array. Faça um programa que cria um array de números.
Depois calcule e imprima no console a soma de todos os números desse array.
Exemplo: Para o array numeros abaixo */

/* 
for (let index = 0; index < array.length; index++) {
    const element = array[index]; 
}   */ 

/* let nums = [1, 2, 3, 4, 5]
let soma = 0
for (let x = 0; x < nums.length; x++){
     soma = soma + nums[x]
}
console.log(soma) */


 
/* for (let index = 0; index < array.length; index++) {
    const element = array[index]; 
}     */

/* 
 let array =  [10, 10, 10, 10, 10] 
let soma = 0
console.log(array.length)

for (var posi = 0; posi < array.length; posi++){
 soma = soma + array[posi] 
}
 //aqui podeeria usar o += tbm

 console.log(soma) */
 

 let array = [10, 10, 10]
 let soma = 0
 let posi = 0
 
 while (posi < array.length){
 soma += array[posi]
 posi ++
}
 console.log(soma)


 //qual a posição do array que ta rodando dentro do for