const Repositories = require('../../repositories/Annouce-repositories/index');

class BuscarTodosAnunciosServicesAdm{

    async BuscarTodosAnunciosADM(next){
           try {
               let TodosAnuncios = await Repositories.getAllAdm();
               if(!TodosAnuncios){
                    return new Error('erro ao buscar todos anuncios')
               }
               return ({Objeto : TodosAnuncios, erro : false, mensagem : 'todos anuncios...'})
           } catch (error) {
               next(error)
           }         
    }
}
module.exports = BuscarTodosAnunciosServicesAdm