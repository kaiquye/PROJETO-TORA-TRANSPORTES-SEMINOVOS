const Repositories = require('../../repositories/Formulario-repositories/index')

class Services {

    async Delete(dados, next) {

        try {
            let Check = await Repositories.GeyById(dados);
            console.log('CHECKKKKKKKKKKKKKKKKK',Check[0])
            if (!Check) {
                return new Error('Error : Formulario não existe.')
            }
            let resultado = await Repositories.delete(dados);
            if (!resultado) {
                return new Error('error : Não foi possivel apagar o formulario');
            }
            return (
                {
                    Object: resultado, erro: false, mensagem: 'Anuncio apagado'
                }
            )
        } catch (error) {
            next(error)
        }

    }
}

module.exports = Services