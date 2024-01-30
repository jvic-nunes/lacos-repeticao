/* Precisamos verificar em uma caixa de disjuntores quais estão ligados.
A caixa de disjuntores é representada por um array onde, cada item do array é um disjuntor. 
Nesse array o índice do item é a identificação do disjuntor (começando em 0) e o valor do item, 
um boolean, é a indicação se o disjuntor está ligado ou não. Imprima no console a posição apenas
dos disjuntores que estão ligados, se possível, utilizar o conceito de truthiness. */

const disjuntores = [true, false, true, false, true, true, false, true, false];

for (let i = 0; i < disjuntores.length; i++) {
  if (disjuntores[i]) {
    console.log(i);
  }
}
console.log("Disjuntores ligados nas posições:")