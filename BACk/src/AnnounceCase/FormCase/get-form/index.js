const services = require('../../../services/Formulario/buscar')

class GetFormulario {

    async getAll(){
        let Service = new services();
        let resultado = await Service.Buscar();
        if(resultado instanceof Error){
            return ({
                Status: 400,
                json: {
                    erro: false,
                    mensagem: 'Error : Não foi possivel buscar todos formularios.',
                    Objeto: resultado
                }
            })
        }
        return({
            Status: 200,
            json: {
                erro: false,
                mensagem: resultado.mensagem,
                Objeto: resultado
            }
        })
    }
}

module.exports = GetFormulario;