const repositories = require('../../repositories/Annouce-repositories/index')

class ModeloAnuncio{
    async ModeloVeiculo(MODELO_VEI, PRECO_VEI, KM_VEI, MARCA_VEI, next, ORDEM, DATA){
        try {   //tenho o limit de 5, passo o umero de 10... Ele vai pular 10 comlunas 
            const ANUNCIOS = await repositories.filter(MODELO_VEI, PRECO_VEI, KM_VEI, MARCA_VEI, ORDEM, DATA);
            if(!ANUNCIOS){
                return new Error('Erro : Não exites anuncios com esse filtro.')
            }
            return ({
                Objeto: ANUNCIOS, erro: false, mensagem: 'Todos os anuncios...'
            })
        } catch (error) {
            next(error)
        }
    }
}
module.exports = ModeloAnuncio