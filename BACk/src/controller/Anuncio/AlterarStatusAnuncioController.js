const AlterarStatusVeiculoServices = require('../../services/Anuncio/AlterarStatusAnuncioServices')

class AlterarStatusAnuncio {

    async AlterarStatus(request, response, next){
        let Services = new AlterarStatusVeiculoServices();
        let Status = await Services.AlterarStatus(request);
        if(Status instanceof Error){
            return response.status(200).json({ erro: true, mensagem: Status.message, sucesso: false, Objeto: null })
        }
        return response.status(201).json({ erro: false, mensagem: Status.mensagem, sucesso: true, Objeto: Status.Objeto })
    }
}

module.exports = AlterarStatusAnuncio