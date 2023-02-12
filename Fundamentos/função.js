// Introdução a Função:

function imprimirSoma(a, b){
    console.log(a + ' ' + b)
}
function imprimirSoma2(a, b){
    console.log(a + b)
}

imprimirSoma('Marcelo', 'Hage')
imprimirSoma('Marcelo') //Marcelo + undefined

imprimirSoma2(5, 5)// Output: 10
imprimirSoma2(5)// Output: Nan (Not a number), pois soma o 5 com um "undefined".

//Função com retorno:
function soma(a, b = 0){
    return a + b
}

console.log(soma(2, 3))// Chamar a funcção dentro de um console
console.log(soma(2))
