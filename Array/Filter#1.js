//Filter -> filtrar Array

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true },
    {nome: 'Ipad Pro', preco: 4199, fragil: true },
    {nome: 'Copo Vidro', preco: 12.99, fragil: true },
    {nome: 'Copo de Plástico', preco: 8.99, fragil: false }
]

console.log(produtos.filter(function(p){
    return false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))