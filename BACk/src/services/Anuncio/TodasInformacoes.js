const Repositories = require('../../repositories/Annouce-repositories/index')

class BuscarTodosAnunciosServices{

    async BuscarTodosAnuncios(next){
        let Model = new model();
           try {
               let TodosAnuncios = await Repositories.getInfosDatabase();
               if(!TodosAnuncios){
                    return new Error('erro ao buscar todos anuncios')
               }
               return ({Objeto : TodosAnuncios, erro : false, mensagem : 'todos anuncios...'})
           } catch (error) {
               next(error)
           }         
    }
}
module.exports = BuscarTodosAnunciosServices