const BuscarTodosAnunciosServices = require('../../services/Anuncio/BuscarTodosAnunciosServices')

class BuscarTodosAnunciosController {

    async BuscarTodos(request, response, next) {
        let Services = new BuscarTodosAnunciosServices()
        let TodosAnuncios = await Services.BuscarTodosAnuncios(next);
        if (TodosAnuncios instanceof Error) {
            return response.status(200).json({ erro: true, mensagem: TodosAnuncios.message, sucesso: false, Objeto: null })
        }
        return response.status(200).json({ erro: false, mensagem: TodosAnuncios.mensagem, sucesso: true, Objeto: TodosAnuncios.Objeto })
    }
}
module.exports = BuscarTodosAnunciosController