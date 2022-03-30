const Repositories = require('../../repositories/Annouce-repositories/index')

class BuscarTodosAnunciosPorId{

    async BuscarPelaPlaca(dados, next){
        try{
            let ANUNCIO = await Repositories.getByPlaca(dados.params);
            if(!ANUNCIO){
                return new Error('Erro ao buscar anuncio pela placa')
            }
            return ({Objeto : ANUNCIO, erro : false, mensagem : 'buscando pela placa...'})
        } catch (error) {
            //não esperado
            next(error)
        }
    }
}
module.exports = BuscarTodosAnunciosPorId