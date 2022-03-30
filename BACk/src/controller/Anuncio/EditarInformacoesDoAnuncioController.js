const services = require('../../services/Anuncio/EditarInformacoesDoAnuncioServices')

class EditarInformacoes {

    async Editar(request, response, next) {
        let Services = new services();
        let Status = await Services.Editar(request, next)
       
        if (Status instanceof Error) {
            return response.status(400).json({ erro: true, mensagem: Status.mensagem, sucesso: false, Objeto: null })
        }
        return response.status(200).json({ erro: false, mensagem: Status.mensagem, sucesso: true, Objeto: Status.Objeto })
     }
}
module.exports = EditarInformacoes