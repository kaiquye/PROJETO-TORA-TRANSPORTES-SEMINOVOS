const repositories = require('../../repositories/Oracle-repositories')

class BuscarPorPlacaServices{

    async BuscarPelaPlaca(request, next){
        try {
            let INFORMACOES = await repositories.getInfosByPlace(request.params)
            if(INFORMACOES instanceof Error) {
                return new Error('Erro : Veiculo não encontrado, verificar a placa')
            }
            return ({Objeto : INFORMACOES, erro : false, mensagem : 'Informações...'})
        } catch (error) {
            next(error)
        }
    }
}
module.exports = BuscarPorPlacaServices