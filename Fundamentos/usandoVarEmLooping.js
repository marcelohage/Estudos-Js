// looping com for:

for(var i = 0; i < 10; i++){
    console.log(i)
}
console.log('i =', i) //Imprime o valor de i quando ele sai do laço

// looping com for #2: 
const funcs= []

for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()