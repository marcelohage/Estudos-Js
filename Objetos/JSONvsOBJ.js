// 1° - Criar um obj e transformar em JSON (método mais fácil/direto)
//Obs: a função não estará presente
//JSON: um formato TEXTUAL. Todas as linguagens conseguem ler e gerar de uma forma simples
//Muito usado em webService, em migração de daods e sistemas...

const obj = {a: 1, b: 2, c: 3, soma() { return a + b + c}}
console.log(JSON.stringify(obj))

// console.log(JSON.parse("{a: 1, b: 2, c: 3 }"))
// console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3 }"))
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')) // Válido
// Um objeto gerado a partir de um text(JSON)
console.log(JSON.parse('{"a": 1.9, "b": "String", "c": true, "d": {}, "e": [] }'))
