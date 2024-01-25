/* Exercício arrays e loops - Declare um array com alguns nomes quaisquer.
Depois, crie um novo array a partir do primeiro que contenha apenas os 
nomes que começam com a letra "A" ou "a"(maiúscula ou minúscula). Ao final,
 imprima a variável que guarda o array. */

const ar = ["Aeronauta", "Agrícola", "Bispo", "paris", "Barrigudinha", "mago de riga", "anedota"]
const novos = []


for (let i = 0; i < ar.length; i++){
    if (ar[0][i] === "a" || ar[0][i] === "A"){
        novos.push(ar[i])
    }
}
console.log(novos);




/* for (let i = 0; i < ar.length; i++){
    const yup = ar[i]
    if (yup[0].toLowerCase() === "a"){
        novos.push(yup)
    }
}
console.log(novos); */