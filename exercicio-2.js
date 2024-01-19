/* Ecercício de loop e array. Declare uma nova variável que contem um array contendo algumas letras.
Faça um programa que conta quantas letras "E" ou "e" existem nesse array.
Imprima mensagens para mostrar o resultado. Inclusive quando nenhuma letra for encontrada. */

let array = [ "a", "b", "c", "d", "e", "E"]
let soma = 0

for (let i = 0; i < array.length; i++){
    if(array[i] === "e" || array[i] === "E"){
    soma++    
    }
}

if (soma){
    console.log(soma)
} else{
    console.log("não existe")
}

 


