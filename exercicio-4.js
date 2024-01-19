//Faça um programa que imprima na tela todos os múltiplos de 3 compreendidos entre 0 e 500.

let x = 0
do { 
    if(x % 3 === 0){
    console.log(x)
    }  
    x++
} while (x < 500);