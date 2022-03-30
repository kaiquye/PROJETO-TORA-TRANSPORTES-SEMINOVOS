const repositories = require('../../repositories/Annouce-repositories/index')

class ProximosAnuncios{

    async Proximos(numero, nextS){
        try {   //tenho o limit de 5, passo o umero de 10... Ele vai pular 10 comlunas 
            const ANUNCIOS = await repositories.next(numero);
            console.log('+++++++++++++++++++++', ANUNCIOS)
            if(!ANUNCIOS){
                return new Error('Erro : Não exite esse numero de anuncios no banco de dados.')
            }
            return ({
                Objeto: ANUNCIOS, erro: false, mensagem: 'Todos os anuncios...'
            })
        } catch (error) {
            nextS(error)
        }
    }
}
module.exports = ProximosAnuncios