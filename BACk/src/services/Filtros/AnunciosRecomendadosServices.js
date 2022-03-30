const repositories = require('../../repositories/Annouce-repositories/index')

class AnunciosRecomendados{

    async Recomendados(MODELO_VEI, next){
        try {
            const ANUNCIOS = await repositories.RecommendedByModel(MODELO_VEI.params);
            if(!ANUNCIOS){
                return new Error('Erro : Não foram encontrados anuncios recomendados.')
            }
            return ({
                Objeto: ANUNCIOS, erro: false, mensagem: 'Todos os anuncios recomendados...'
            })
        } catch (error) {
            next(error)
        }
    }
}
module.exports = AnunciosRecomendados