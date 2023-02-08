const pessoa =  {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()//Conflito entre paradigmas:  funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
// Bind é o método responsável por amarrar 
// um determinado objeto para ele ser o dono da execução 
// daquele método, sempre que o método for chamado.

