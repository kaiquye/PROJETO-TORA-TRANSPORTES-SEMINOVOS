const ProximosAnunciosFiltro = require('../../services/Filtros/ProximosAnunciosFitro')

class ProximosAnuncios {

    async Proximo(HttpServer) {
        let { numero } = HttpServer.params
        console.log('params', numero)
        try {
            let Services = new ProximosAnunciosFiltro();
            let ANUNCIOS = await Services.Proximos(parseInt(numero), HttpServer.next)
            if (ANUNCIOS instanceof Error) {
                return {
                    Status: 200,
                    json: {
                        erro: true, mensagem: ANUNCIOS.message, sucesso: false, Objeto: null
                    }
                }
            }
                return {
                    Status: 200,
                    json: {
                        erro: false, mensagem: ANUNCIOS.mensagem, sucesso: true, Objeto: ANUNCIOS.Objeto 
                    }
                }
        } catch (error) {
            HttpServer.next(Error)
        }
    }
}
module.exports = ProximosAnuncios 
