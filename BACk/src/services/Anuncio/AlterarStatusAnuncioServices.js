const Repositories = require('../../repositories/Annouce-repositories/index')
class AlterarStatusAnucio {
    

    async AlterarStatus(dados, next){
        console.log('STATUS : ',dados.params.VEICULO_id)
        try {
            if(dados.params.VEICULO_id.length < 1 || dados.params.VEICULO_id === undefined){
                return new Error('Error : Id do veiculo não informado.')
            }else{
                let Status = await Repositories.AlterStatus(dados.params)
                if(!Status){
                    return new Error('Erro : Não foi possivel alterar o status do anuncio, verifique a placa')
                }
                return ({Objeto : Status, erro : false, mensagem : 'Status do anuncio alterado com sucesso...'})
            }
        } catch (error) {
            //não esperado
            next(error)
        }
    }
}
module.exports = AlterarStatusAnucio