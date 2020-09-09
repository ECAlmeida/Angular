import Carro from './Carro'
import Concessionaria from './Concessionaria'
import Pessoa from './Pessoa'
// criar carros
let carroA = new Carro('Veloster', 3)
let carroB = new Carro('Gol', 4)
let carroC = new Carro('Civic', 4)

// criar array lista de carros

let listaDeCarros: Array<Carro> = [carroA, carroB, carroC]
let concessionaria = new Concessionaria('Av Paulista', listaDeCarros)

//criar lista de carros
//console.log(concessionaria.mostrarListaDeCarros())

// comprar carro
let cliente = new Pessoa('Eder', 'Gol')
//console.log(cliente.dizerCarroPreferido())

concessionaria.mostrarListaDeCarros().map((carro: Carro)=>{
    if(carro['modelo'] == cliente.dizerCarroPreferido()){
        //comprar o carro
        cliente.comprarCarro(carro)
    }
})
console.log(cliente.dizerCarroQueTem())