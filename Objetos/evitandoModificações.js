//Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promoção'
})
console.log('Extensive:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal -> Selando objetos:
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
// não consegue adicionar e nem excluir atributos do obj
// mas consegue mexer nos atributos ja existentes.
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes
