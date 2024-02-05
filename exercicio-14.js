/* Arrays e loops:
Considerando que temos dois arrays do mesmo tamanho (mesma quantidade de itens) e que todos os itens de ambos 
os arrays são números, deveremos, para cada respectiva posição, imprimir o menor valor encontrado entre os dois arrays.

Inicialmente, ambos os arrays terão 5 itens.

Exemplo 1:
Para os dois arrays a seguir:
 */
const arrayA = [5, 32, 3, 44, 1];
const arrayB = [57, 4, 21, 2, 13]; 
const novoArray = []

if (arrayA.length === arrayB.length){
    for(let i = 0; i < arrayA.length; i++){
    const psicopata = arrayA[i] < arrayB[i] ? arrayA[i] : arrayB[i]
    novoArray.push(psicopata)    
    }    
    console.log(novoArray);
}

//pq o psicopata log n funciona fora do for? e pq não pode ser let?