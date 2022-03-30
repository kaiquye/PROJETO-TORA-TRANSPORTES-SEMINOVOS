const services = require('../../services/Filtros/BuscarTodosQtsAdm')

class TodasInformacoes{

    async Informacoes(request, response, next){
        let Services = new services();
        let Status = await Services.Buscar(next);
        if(Status instanceof Error){
            return response.status(200).json({ erro: true, mensagem: Status.message, sucesso: false, Objeto: null })
        }
        return response.status(200).json({ erro: false, mensagem: Status.mensagem, sucesso: true, Objeto: Status.Objeto })
    }

}
module.exports = TodasInformacoes