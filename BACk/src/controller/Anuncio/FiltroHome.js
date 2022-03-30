const FiltrosHome = require('../../services/Anuncio/FiltroHome')

class Filtro {

    async FiltroHome(request, response, next) {
        console.log(request.body)
        let Services = new FiltrosHome()
        let TodosAnuncios = await Services.Filtro(request, next);
        if (TodosAnuncios instanceof Error) {
            return response.status(400).json({ erro: true, mensagem: TodosAnuncios.message, sucesso: false, Objeto: null })
        }
        return response.status(200).json({ erro: false, mensagem: TodosAnuncios.mensagem, sucesso: true, Objeto: TodosAnuncios.Objeto })
    }
}
module.exports = Filtro