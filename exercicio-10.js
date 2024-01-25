/* Declare um array com alguns números inteiros quaisquer.
Depois, faça um programa que calcule a maior diferença entre dois números desse array. */

const array = [2, 3, 5, 7, 10, 15];
let menorNumero = 1000
let maiorNumero = 0

for (let i = 0; i < array.length; i++){
    if(menorNumero > array[i]){
        menorNumero = array[i]
    }
    if(maiorNumero < array[i]){
        maiorNumero = array[i]
    }
}
console.log(maiorNumero - menorNumero);

/* logica = criar um novo array como o maior e o menor numero e subtrarir os valores dentro desse novo array
logica2 = pegar o menor número do arrayOriginal e fazer a diferença dele com todos os elementos do array 
depois compara-los usando if */

/* function calcularMaiorDiferenca(array) {
    if (array.length < 2) {
        console.log("O array deve ter pelo menos dois elementos para calcular a diferença.");
        return null;
    }

    let menorNumero = array[0];
    let maiorDiferenca = 0;

    for (let i = 1; i < array.length; i++) {
        const numeroAtual = array[i];
        const diferenca = numeroAtual - menorNumero;

        if (diferenca > maiorDiferenca) {
            maiorDiferenca = diferenca;
        }

        if (numeroAtual < menorNumero) {
            menorNumero = numeroAtual;
        }
    }

    return maiorDiferenca;
}

// Exemplo de uso:
const numeros = [7, 2, 9, 1, 4, 6];
const maiorDiferenca = calcularMaiorDiferenca(numeros);

if (maiorDiferenca !== null) {
    console.log("Maior diferença:", maiorDiferenca);
} */