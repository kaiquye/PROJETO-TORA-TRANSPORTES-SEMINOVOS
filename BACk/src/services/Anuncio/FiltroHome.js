const Repositories = require('../../repositories/Annouce-repositories/index')

class FiltroHome {

    async Filtro(dados, next) {
        console.log('#############', dados.body)
        try {
            let Status = await Repositories.filter(dados.body)
            if (!Status) {
                return new Error('Erro : Não foi possivel filtrar o anuncio/home')
            }
            return ({ Objeto: Status, erro: false, mensagem: 'Filtro.../Home' })
        } catch (error) {
            //não esperado
            next(error)
        }
    }
}

module.exports = FiltroHome