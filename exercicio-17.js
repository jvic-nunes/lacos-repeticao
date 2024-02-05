/* Desenvolva um algoritmo que receba um número N e calcule o fatorial de N, sabendo 
que N! = N * (N-1) * (N-2) * ... * 3 * 2 * 1 */

let num = 5;
//const array = [];
let resposta = 1; 

for (let i = num; i > 0; i--){
    //array.push(i)
    resposta = resposta * i // resposta *= i     
}
//const multiplica = array.reduce ( (neurose, psicose) => neurose * psicose, 1)
//console.log(array);
console.log(resposta);
