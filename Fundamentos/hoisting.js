// Hoisting exemplo 1:

//Var fica com sobreposição, declarando a variável primeiro, mesmo estando na linha de baixo.
console.log('a =', a)
var a = 2
console.log('a = ', a)

// conceito: 
//     jogar a declaração das variáveis definidas com var pra cima