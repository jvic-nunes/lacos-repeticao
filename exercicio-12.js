/* Neste exercício iremos controlar a fila de um banco que tem um limite de pessoas que podem ficar do lado de dentro. 
Portanto, enquanto houver pessoas do lado de fora, e do lado de dentro ainda não tenha atingido o limite permitido,
 deveremos permitir a entrada.

Para isso, teremos dois arrays, um para controlar a fila do lado de dentro do banco e outro para controlar a fila do 
lado de fora. Estes serão arrays de strings onde cada elemento é o nome da pessoa que está na fila. Nossos arrays serão 
chamados de filaDeDentro e filaDeFora.

O limite de elementos para a filaDeDentro deverá ser 5 pessoas.

Enquanto houver elementos na filaDeFora e espaços disponíveis dentro do limite na filaDeDentro, deveremos passar o 
primeiro elemento da filaDeFora para a última posição da filaDeDentro.

Ao final, imprima todos os elementos da filaDeDentro e em seguida imprima todos os elementos da filaDeFora */

const filaDeFora = ["renata", "mago de riga", "elefante tenebroso", "hugh jackman"];
const filaDeDentro = ["anne hathaway", "martinho da vila"];

while (filaDeFora.length > 0 && filaDeDentro.length < 5) {
    let pessoa = filaDeFora.shift(); 
    filaDeDentro.push(pessoa);
}
console.log(filaDeDentro);
console.log(filaDeFora);



