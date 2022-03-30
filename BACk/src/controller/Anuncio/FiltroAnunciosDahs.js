const Filtro = require('../../services/Anuncio/FiltroTelaDahsBoard')

class FiltroDahsboard {

    async FiltroDahsboard(request, response, next) {
        console.log('body filtro', request.body)
        let Services = new Filtro()
        let TodosAnuncios = await Services.FiltroDahs(request, next);
        if (TodosAnuncios instanceof Error) {
            return response.status(400).json({ erro: true, mensagem: TodosAnuncios.message, sucesso: false, Objeto: null })
        }
        return response.status(200).json({ erro: false, mensagem: TodosAnuncios.mensagem, sucesso: true, Objeto: TodosAnuncios.Objeto })
    }
}
module.exports = FiltroDahsboard