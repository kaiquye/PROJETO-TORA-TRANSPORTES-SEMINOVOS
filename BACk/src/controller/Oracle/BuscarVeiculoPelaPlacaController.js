const services = require('../../services/Oracle/BuscarVeiculoPelaPlacaServices')

class BuscarPelaPlaca{

    async BuscarPelaPlaca(request, response, next){
        let Services = new services()
        let INFORMACOES = await Services.BuscarPelaPlaca(request, next)
               
        if(INFORMACOES instanceof Error){
            return response.status(300).json({ erro: true, mensagem: INFORMACOES.message, sucesso: false, Objeto: null })
        }
        return response.status(200).json({ erro: false, mensagem: INFORMACOES.mensagem, sucesso: true, Objeto: INFORMACOES.Objeto })
    }
}
module.exports = BuscarPelaPlaca