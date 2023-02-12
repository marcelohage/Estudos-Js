// Pessoa --> 123 --> {...}
const pessoa = { nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// Pessoa --> 456 --> {...}
/*pessoa = { nome: 'Ana'}*/
// Vai gerar um problema. Só pode atribuir para a constante
// uma única vez!

Object.freeze(pessoa)// freeze: não consegue mais mexer no objeto

pessoa.nome = 'Maria'
console.log(pessoa.nome)// Continua sendo pedro

// Outro exemplo:
const pessoaConstante = Object.freeze({nome: 'Joao'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)
