const Services = require('../../../services/Formulario/Delete')


class DeleteForm{

    async Delete(HttpServer){
        let Service = new Services();
        let resultado = await Service.Delete(HttpServer.params, HttpServer.next)
        if(resultado instanceof Error){
            return ({
                Status: 400,
                json: {
                    erro: true, mensagem: resultado.message, sucesso: false, Objeto: null
                }
            })
        }
        return ({
            Status: 200,
            json: {
                erro: false, mensagem: resultado.message, sucesso: true, Objeto: resultado
            }
        })
    }

}

module.exports = DeleteForm