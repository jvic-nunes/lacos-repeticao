/* Desenvolva um algoritmo que mostre a tabuada de todos os números inteiros 
compreendidos entre 1 e 10 */
 
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i = 1; i <= 10; i++){
    for(let j = 1; j <= 10; j++){
        console.log(`${i} X ${j} = ${i * j}`);         
    }
    console.log("")
}








/*  for (let i = 0; i <= 10; i++){    
    console.log("tabuada")
    for (let f = 0; f <= 10; f++){    
        console.log("produto")
    }
} 

let resultado = i * f
console.log(resultado);

for (let i = 1; i <= 10; i++) {
    console.log(`Tabuada do ${i}:`);
    
    // Loop interno para os multiplicandos (1 a 10)
    for (let j = 1; j <= 10; j++) {
        // Calcula o produto e exibe na tela
        let produto = i * j;
        console.log(`${i} x ${j} = ${produto}`);
    }
    
    console.log(produto); */