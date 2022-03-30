const services = require('../../services/Filtros/AnunciosRecomendadosServices')

class AnunciosRecomendados {

    async Recomendados(HttpServer) {
        let Services = new services();
        let Status = await Services.Recomendados(HttpServer, HttpServer.next);
        if (Status instanceof Error) {
            return {
                Status: 200,
                json: {
                    erro: true, mensagem: Status.message, sucesso: false, Objeto: null
                }
            }
        }
        return {
            Status: 200,
            json: {
                erro: false, mensagem: Status.mensagem, sucesso: true, Objeto: Status.Objeto
            }
        }
    }

}
module.exports = AnunciosRecomendados