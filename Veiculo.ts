export default class Veiculo {
    protected modelo!: string 
    //retirado por conta da herança
    //private numeroDePortas: number
    protected velocidade: number = 10

    //constructor(modelo: string, numeroDePortas: number){
    //    this.modelo = modelo
    //   this.numeroDePortas = numeroDePortas
    //}


    public acelerar(): void{
        this.velocidade = this.velocidade + 10
    }
    public parar(): void{
        this.velocidade = 0

    }
    public velocidadeAtual(): number{
        return this.velocidade

    }
}