const Repositories = require('../../repositories/Annouce-repositories/index')

class FiltroDahsboard {

    async FiltroDahs(dados, next) {
        try {
            let Status = await Repositories.filterDahsboard(dados.body)
            if (!Status) {
                return new Error('Erro : Não foi possivel filtrar o anuncio')
            }
            return ({ Objeto: Status, erro: false, mensagem: 'Filtro...' })
        } catch (error) {
            //não esperado
            next(error)
        }
    }
}

module.exports = FiltroDahsboard