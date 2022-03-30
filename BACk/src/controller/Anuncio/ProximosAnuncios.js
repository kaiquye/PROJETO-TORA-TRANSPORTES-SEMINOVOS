const ProximosAnunciosFiltro = require('../../services/Filtros/ProximosAnunciosFitro')

class ProximosAnuncios {

    async Proximo(request, response, next) {
        let { numero } = request.params
        try {
            let Services = new ProximosAnunciosFiltro();
            let ANUNCIOS = await Services.Proximos(parseInt(numero), next)
            if (ANUNCIOS instanceof Error) {
                return response.status(200).json({ erro: true, mensagem: ANUNCIOS.message, sucesso: false, Objeto: null })
            }
            return response.status(200).json({ erro: false, mensagem: ANUNCIOS.mensagem, sucesso: true, Objeto: ANUNCIOS.Objeto })
        } catch (error) {
            next(Error)
        }
    }
}
module.exports = ProximosAnuncios 
