const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Este método remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen')//Adiciona um elemento na ultima posição da lista
console.log(pilotos)

pilotos.shift()// Remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton')//Adiciona um elemento a primeira posição da lista
console.log(pilotos)

// Splice pode adicionar e remover elementos 

//Adicionar : 
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// Remover :
pilotos.splice(3, 1)
console.log(pilotos)

// Método Slice -> retorna um novo array
const algunsPilotos1 = pilotos.slice(2) // novo arrray
console.log(algunsPilotos1)

const algunsPilotos2  = pilotos.slice(1, 4)
console.log(algunsPilotos2)