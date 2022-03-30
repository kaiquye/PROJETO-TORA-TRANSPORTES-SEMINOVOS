const repositories = require('../../repositories/Annouce-repositories/index')

class BuscarTodosAnunciosServices{

    async BuscarTodosAnuncios(next){
           try {
            let TodosAnuncios = await repositories.getAll();
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