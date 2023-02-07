//Null e Undefined: 

//Undefined:
let valor // não inicializada
console.log(valor) // Undefined --> Foi declarado
// console.log(valor2)// Is Not Defined --> Não foi declarado

valor = null //Ausência de valor 
console.log(valor)
// console.log(valor.toString()) // Erro

const produto = {}
console.log(produto.preco) 
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evitar atribuir undefined
//transformando em boolean 
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto) // --> Null

// Conclusão:
//     Quando algo não for definido a linguagem usa o "undefined" 
//     e você usa o "Null"