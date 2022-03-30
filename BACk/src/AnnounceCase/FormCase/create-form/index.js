const Services = require('../../../services/Formulario/criar')


class CriarNovoFormulario {


    async Criar(HttpServer) {
            let Service = new Services();
            let resultado = await Service.Criar(HttpServer);
            console.log(resultado instanceof Error)
            if (resultado instanceof Error) {
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
                    erro: false,
                    mensagem: 'Formulario cadastrado com sucesso.',
                    Objeto: resultado
                }
            })
    }
}
module.exports = CriarNovoFormulario;