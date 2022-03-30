const repositories = require('../../repositories/Annouce-repositories/index')

class BuscarTodos {

    async Buscar(dados, next) {
        try {
            let Info = await repositories.getInfosDatabase();
            if (!Info) {
                return new Error('Erro : Não foi possivel atualizar o anuncio')
            }
            return ({ Objeto: Info, erro: false, mensagem: 'Informações do anuncio alterado com sucesso...' })
        } catch (error) {
            //não esperado
            next(error)
        }
    }
}

module.exports = BuscarTodos