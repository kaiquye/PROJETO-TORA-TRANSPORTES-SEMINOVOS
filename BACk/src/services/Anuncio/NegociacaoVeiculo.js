const model  = require('../../models/Anuncio/index')


class Negociacao{

    async AlterarNegociacao(dados, next){
        const Model = new model();
        try {
            let Status = Model.EditarNegociacao(dados);
            if (!Status) {
                return new Error('Erro : Não foi possivel atualizar negociacao o anuncio')
            }
            return ({ Objeto: Status, erro: false, mensagem: 'Negociacao feita...' })
        } catch (error) {
            next(error)
        }
    }

}

module.exports = Negociacao