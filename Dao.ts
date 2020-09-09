import { DaoInterface } from "./DaoInterface";

//import {DaoInterface} from './DaoInterface'

export class Dao<T> implements DaoInterface<T>{
    nomeTabela: string = ''
    
        inserir(object: T): boolean{
            console.log('logica de insert')
            return true
        }
    
        atualizar(object: T): boolean{
            console.log('logica de atualizar')
            return true
        }
        remover(id: number): T{
            console.log('logica de remover')
            return Object()
        }
        selecionar(id: number): T{
            console.log('logica de selecionar')
            return Object()
        }
        selecionarTodos(): [any]{
            console.log('logica de selecionar todos')
            return [Object()]
    
        }
        
    
    }