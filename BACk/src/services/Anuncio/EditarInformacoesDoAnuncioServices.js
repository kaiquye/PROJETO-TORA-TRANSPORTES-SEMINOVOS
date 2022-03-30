const Repositories = require('../../repositories/Annouce-repositories/index')

class EditarInformacoes {

    async Editar(dados, next) {
        console.log('editart 2')
        console.log(dados.body)
        try {
            let Status = await Repositories.Edit(dados.body, dados.params, dados.body.IMAGEMS_VEI)
            if (!Status) {
                return new Error('Erro : Não foi possivel atualizar o anuncio')
            }
            return ({ Objeto: Status, erro: false, mensagem: 'Informações do anuncio alterado com sucesso...' })
        } catch (error) {
            //não esperado
            next(error)
        }
    }
}

module.exports = EditarInformacoes