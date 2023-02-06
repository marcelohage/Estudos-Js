// Estudo de arrays INTRODUÇÃO:

const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])

// MAnipulação de array:

//Adaição de um item a um índice específico:
valores [4] = 10
console.log(valores)

// Média artimética: 
resp = ((valores[0] + valores[1] + valores[2] + valores[3] + valores[4])/valores.length)
console.log(resp)

// Não é ideal misturas uma array com tipos diferentes.
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

//Retorna o valor do ultimo índice do array:
console.log(valores.pop())

//deleta o valor do índice indicado no array:
delete valores[0]
console.log(valores)

//Tipo do array: Objeto
console.log(typeof valores)

