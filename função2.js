// Armazenando função em variável: 
const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(5, 5)

// Armazenar uma função arrow em uma variável
const soma = (a, b) => { //Simplificação da sitaxe "=>" = "function"
    return a + b
}

console.log(soma(5, 5))

//Retorno implícito
const subtracao = (a, b) => a - b //Serve para função que retorne uma única sentença de código
console.log(subtracao(5, 5))
