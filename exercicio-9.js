/* Uma empresa de delivery de comida está com dificuldades para organizar a ordem dos pedidos e 
precisa criar uma rotina que organize seus pedidos em uma fila por odem de prioridade.
Sabendo que a fila atualmente está da seguinte ordem:
const filaDePedidos = ["pedido 12", "pedido 13", "pedido 14"];

// seu codigo aqui
a) Adicione um novo pedido "pedido 15" ao final da fila.

b) Retire o primeiro pedido "pedido 12" da fila.

c) Imprima no console a filaDePedidos */

const filaDePedidos = ["pedido 12", "pedido 13", "pedido 14"]

//A)
filaDePedidos.push("pedido 15")
console.log(filaDePedidos)

//b)
filaDePedidos.shift()
console.log(filaDePedidos)
