const services = require('../../services/Oracle/BuscarVeiculoPelaPlacaServices')

class BuscarPelaPlaca {

    async BuscarPelaPlaca(HttpServer) {
        let Services = new services()
        let INFORMACOES = await Services.BuscarPelaPlaca(HttpServer, HttpServer.next)

        if (INFORMACOES instanceof Error) {
            return {
                Status: 300,
                json: {
                    erro: true, mensagem: INFORMACOES.message, sucesso: false, Objeto: null
                }
            }
        }
        return {
            Status: 200,
            json: {
                erro: false, mensagem: INFORMACOES.mensagem, sucesso: true, Objeto: INFORMACOES.Objeto
            }
        }
    }
}
module.exports = BuscarPelaPlaca