// looping com for:

// for(let i = 0; i < 10; i++){
//     console.log(i)
// }
// console.log('i =', i) //Não imprime o valor de i pois esta declarado com let

// looping com for #2: 
const funcs = []

for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()