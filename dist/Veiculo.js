"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Veiculo = /** @class */ (function () {
    function Veiculo() {
        //retirado por conta da herança
        //private numeroDePortas: number
        this.velocidade = 10;
    }
    //constructor(modelo: string, numeroDePortas: number){
    //    this.modelo = modelo
    //   this.numeroDePortas = numeroDePortas
    //}
    Veiculo.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Veiculo.prototype.parar = function () {
        this.velocidade = 0;
    };
    Veiculo.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Veiculo;
}());
exports.default = Veiculo;
