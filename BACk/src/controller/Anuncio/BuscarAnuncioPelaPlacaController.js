const services = require('../../services/Anuncio/BuscarAnuncioPelaPlacaServices')

class BuscaAnuncioPelaPlaca {
    async BuscarAnuncioPelaPlaca(request, response, next){
        let Services = new services()
        let ANUNCIO = await Services.BuscarPelaPlaca(request, next)
        if (ANUNCIO instanceof Error) {
            return response.status(400).json({ erro: true, mensagem: ANUNCIO.message, sucesso: false, Objeto: null })
        }
        return response.status(200).json({ erro: false, sucesso: true, Objeto: ANUNCIO.Objeto })
    }
}
module.exports = BuscaAnuncioPelaPlaca