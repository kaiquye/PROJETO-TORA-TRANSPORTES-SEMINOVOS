const Repositories = require('../../repositories/Formulario-repositories/index')


class Services {

    async Buscar(dados, next) {
        try {
            let resultado = await Repositories.get(dados);
            if (!resultado) {
                return new Error('Error : Não foi possivel buscar todos os formularios.')
            }
            return ({
                Object: resultado, erro: false, mensagem: 'Todos os formularios...'
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = Services;