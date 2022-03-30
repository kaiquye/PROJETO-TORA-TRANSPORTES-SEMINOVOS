const services = require('../../services/Anuncio/BuscarImagem')

class BuscarImg {
    async Buscar(request, response, next){
        let { id } = request.params
        console.log(id)
        let Services = new services()
        let Imagems = await Services.Buscar(id, next)
        if (Imagems instanceof Error) {
            return response.status(400).json({ erro: true, mensagem: Imagems.message, sucesso: false, Objeto: null })
        }
        return response.status(200).json({ erro: false, sucesso: true, Objeto: Imagems.Objeto })
    }
}
module.exports = BuscarImg