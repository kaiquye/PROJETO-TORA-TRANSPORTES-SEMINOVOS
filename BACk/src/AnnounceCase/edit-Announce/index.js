const services = require('../../services/Anuncio/EditarInformacoesDoAnuncioServices')
const AlterarStatusVeiculoServices = require('../../services/Anuncio/AlterarStatusAnuncioServices')

class EditarInformacoes {

    async Editar(HttpServer) {
        let Services = new services();
        let Status = await Services.Editar(HttpServer, HttpServer.next)
        console.log(Status)
        if (Status instanceof Error) {
            return {
                Status: 400,
                json: {
                    erro: true, mensagem: Status.mensagem, sucesso: false, Objeto: null
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


    async AlterarStatus(HttpServer) {
        let Services = new AlterarStatusVeiculoServices();
        let Status = await Services.AlterarStatus(HttpServer, HttpServer.next);
        if (Status instanceof Error) {
            return {
                Status: 400,
                json: {
                    erro: true, mensagem: Status.message, sucesso: false, Objeto: null
                }
            }
        }
        return {
            Status: 201,
            json: {
                erro: false, mensagem: Status.mensagem, sucesso: true, Objeto: Status.Objeto
            }
        }
    }
}
module.exports = EditarInformacoes