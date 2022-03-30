const services = require('../../services/Anuncio/ApagarAnuncioServices')

class ApagarAnuncio{

    async Apagar(request, response, next){
        let Services = new services();
        let Status = await Services.Apagar(request, next);
        if(Status instanceof Error){
            return response.status(200).json({ erro: true, mensagem: Status.message, sucesso: false, Objeto: null })
        }
        return response.status(201).json({ erro: false, mensagem: Status.mensagem, sucesso: true, Objeto: Status.Objeto })
    }

}
module.exports = ApagarAnuncio