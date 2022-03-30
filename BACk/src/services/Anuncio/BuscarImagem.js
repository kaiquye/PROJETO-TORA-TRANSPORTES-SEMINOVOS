const Repositories = require('../../repositories/Annouce-repositories/index')

class Buscar {

    async Buscar(dados, next){
        try {
            let imagem = await Repositories.getImage(dados, next);
            if(!imagem){
                return new Error('Erro : Não foi possivel carregar as imagems')
            }
            return ({Objeto : imagem, erro : false, mensagem : 'Todas imagens...'})
        } catch (error) {
            next(error)
        }
    }
}
module.exports = Buscar