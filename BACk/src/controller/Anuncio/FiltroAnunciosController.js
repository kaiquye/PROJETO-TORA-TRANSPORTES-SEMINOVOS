const FitlroAnuncio = require('../../services/Filtros/AnunciosFiltros')

class FiltrosAnuncio {

    async Filtro(request, response, next) {

        let { MODELO_VEI, PRECO_VEI, KM_VEI, MARCA_VEI} = request.body

        let Filtro = new FitlroAnuncio();

        let ANUNCIOS = await Filtro.ModeloVeiculo(MODELO_VEI, PRECO_VEI, KM_VEI, MARCA_VEI, STATUS_VEI, next)

        if (ANUNCIOS instanceof Error) {
            return response.status(400).json({ erro: true, mensagem: ANUNCIOS.message, sucesso: false, Objeto: null })
        }
        return response.status(200).json({ erro: false, mensagem: ANUNCIOS.mensagem, sucesso: true, Objeto: ANUNCIOS.Objeto })
    }
}
module.exports = FiltrosAnuncio