//Introdução Objeto:

//Ex 1:
const prod1 = {} //Objeto na forma literal
//Atribução de valores de forma dinâmica:
prod1.nome = 'Celular Ultra Mega' 
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //Evitar atributos com espaço 

console.log(prod1)

//Ex 2: 
const prod2 = {
    nome: 'Camisa Polo', 
    preco: 79.90
}
//Obs --> NÃO É UM JSON
console.log(prod2)