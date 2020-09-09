import Veiculo from './Veiculo'
export default class Carro extends Veiculo{
    
    private numeroDePortas: number
    protected modelo: any
    

    constructor(modelo: string, numeroDePortas: number){
        super()
        this.modelo = modelo
        this.numeroDePortas = numeroDePortas
    }

}