
const Repositories = require('../../repositories/Annouce-repositories/index')
class CriarNovoAnuncio {

    async Criar(dados, next) {
        //FIND ONE - Veriricar se o anuncio ja exite, caso exitas, lnaçar uma execão.
        //user like e outras formas do SQL para fazer a consulta no banco de daos
        try {
            if(dados.body.PLACA_VEI && dados.body.CHASSI_VEI !== undefined){
                if (await Repositories.getByPlacaChassi(dados.body)) {
                    return new Error('Erro : Ja exite um anuncio cadastrado com essa placa/c')
                }
            }
        } catch (error) {
            //não esperado
            next(error)
        }
        try {
            // let anuncio = await Anuncio.Criar(dados.body, dados.body.IMAGEMS_VEI)
            let anuncio = await  Repositories.create(dados.body, dados.body.IMAGEMS_VEI)
            console.log(anuncio)
            return ({
                Objeto: anuncio, erro: false, mensagem: 'Anuncio criardo com sucesso'
            })
        } catch (error) {
            // não esperado
            next(error)
        }
    }
}

module.exports = CriarNovoAnuncio