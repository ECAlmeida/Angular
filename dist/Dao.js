"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dao = void 0;
//import {DaoInterface} from './DaoInterface'
var Dao = /** @class */ (function () {
    function Dao() {
        this.nomeTabela = '';
    }
    Dao.prototype.inserir = function (object) {
        console.log('logica de insert');
        return true;
    };
    Dao.prototype.atualizar = function (object) {
        console.log('logica de atualizar');
        return true;
    };
    Dao.prototype.remover = function (id) {
        console.log('logica de remover');
        return Object();
    };
    Dao.prototype.selecionar = function (id) {
        console.log('logica de selecionar');
        return Object();
    };
    Dao.prototype.selecionarTodos = function () {
        console.log('logica de selecionar todos');
        return [Object()];
    };
    return Dao;
}());
exports.Dao = Dao;
