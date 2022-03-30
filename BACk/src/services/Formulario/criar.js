const Repositories = require('../../repositories/Formulario-repositories/index')
const Repositories_Anuncio = require('../../repositories/Annouce-repositories/index')

class Services {

    async Criar(dados){
        try {
            console.log(dados)
            let check = await Repositories_Anuncio.getById(dados.body.ID_VEI)
            if(!check[0]){
                return new Error('Error : Não é possivel fazer proposta, veiculo não existe.')
            }
            //quantidades de propostas feitas...
            let CheckNumber = await Repositories.getByEmailAndNumber(dados.body)
            if(CheckNumber >= 3){
                return new Error('Erro : Não é possivel fazer mais do que 3 propostas...')
            }
            let resultado = await Repositories.create(dados.body)
            console.log('antes do erro!', resultado)
            if(!resultado){
                return new Error('Erro, não foi passivel criar novo formulario')
            }
            return ({
                Object : resultado,  erro : false, mensagem : 'Criado com sucesso, formulario'
            })
        } catch (error) {
            dados.next(error)
        }
    }
}
module.exports = Services