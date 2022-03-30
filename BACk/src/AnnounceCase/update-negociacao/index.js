const AlterNegociacao = require('../../services/Anuncio/NegociacaoVeiculo')

class Negociacao {

    async Alter(HttpServer) {
        let { VEICULO_id } = HttpServer.params
        try {
            let Services = new AlterNegociacao();
            let ANUNCIOS = await Services.AlterarNegociacao(VEICULO_id, HttpServer.next)
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
            next(Error)
        }
    }
}
module.exports = Negociacao 
