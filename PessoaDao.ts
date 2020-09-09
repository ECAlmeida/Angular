import DaoInterface from './DaoInterface'
import Pessoa from './Pessoa'

export class PessoaDao implements DaoInterface<Pessoa>{

    nomeTabela: string = 'tb_pessoa'

    inserir(object: Pessoa): boolean{
        console.log('logica de insert')
        return true
    }

    atualizar(object: Pessoa): boolean{
        console.log('logica de atualizar')
        return true
    }
    remover(id: number): Pessoa{
        console.log('logica de remover')
        return new Pessoa('', '')
    }
    selecionar(id: number): Pessoa{
        console.log('logica de selecionar')
        return new Pessoa('', '')
    }
    selecionarTodos(): any{
        console.log('logica de selecionar todos')
        return [new Pessoa('','')]

    }

}