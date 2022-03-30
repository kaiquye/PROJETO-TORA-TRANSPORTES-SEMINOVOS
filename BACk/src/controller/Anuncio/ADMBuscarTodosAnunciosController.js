const BuscarTodosAnunciosServicesAdm = require('../../services/Anuncio/ADM_BuscarTodosAnuncioServices')

class BuscarTodosAnunciosControllerAdm {

    async BuscarTodosAnuncios_Adm(request, response, next) {
        let Services = new BuscarTodosAnunciosServicesAdm()
        let TodosAnuncios = await Services.BuscarTodosAnunciosADM(next);
        if (TodosAnuncios instanceof Error) {
            return response.status(200).json({ erro: true, mensagem: TodosAnuncios.message, sucesso: false, Objeto: null })
        }
        return response.status(200).json({ erro: false, mensagem: TodosAnuncios.mensagem, sucesso: true, Objeto: TodosAnuncios.Objeto })
    }
}
module.exports = BuscarTodosAnunciosControllerAdm