// contrutores: 

function carro(velocidadeMaxima = 200, delta = 5){
    // Atributo Privado
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function (){
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta 
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //Metodo publico 
    this.getvelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new carro
uno.acelerar()
console.log(uno.getvelocidadeAtual())

const ferrari = new carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getvelocidadeAtual())