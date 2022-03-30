const Repositories = require('../../repositories/Annouce-repositories/index')
class ApagarAnuncio {

    async Apagar(dados, next) {

        try {
            let STATUS = await Repositories.deleteByPlaca(dados.params)
            if (!STATUS) {
                return new Error('Erro : Não foi possivel apagar este anuncio, verifique a placa.')
            }
            return ({ Objeto: STATUS, erro: false, mensagem: 'Anuncio apagado com sucesso...' })
        } catch (error) {
            next(error)
        }
    }
}
module.exports = ApagarAnuncio