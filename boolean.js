
let isAtivo = false 
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)
//para descobrir se um valor é verdadeiro oou falso

console.log(!isAtivo)
// " ! " significa NOT

// Tipos que se comportam como verdadeiros:
console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

//Tipos que se comportam como falsos:
console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)

//comportamento com o "OU":
console.log(('' || null || 00 || ' '))

// True or False na prática: 
let nome = ''
console.log(nome || 'Desconhecido')
