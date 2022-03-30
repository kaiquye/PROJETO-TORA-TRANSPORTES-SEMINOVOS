
const criarAnuncioServices = require('../../services/Anuncio/CriaAnuncioServices')
const RESIZEIMG = require('./ResizeimageController')
const Verificar = require('../../controller/Validar_Formuilario/isVerify')
const ENUM = require('../../enum/ENUM')
class CriarNovoAnuncio {


    async Criar(request, response, next) {
        // console.log(request.body, 'passou aqui...')
        // let ERRO_FORM_ANUNCIO = new Verificar(ENUM.FORM_ANUNCIO, request, response);

        // if (ERRO_FORM_ANUNCIO) {
        //     return ERRO_FORM_ANUNCIO
        // }
        let Anuncio = await new criarAnuncioServices().Criar(request, next)
        if (Anuncio instanceof Error) {
            return response.status(400).json({ erro: true, mensagem: Anuncio.message, sucesso: false, Objeto: null })
        }
        return response.status(201).json({ erro: false, mensagem: Anuncio.mensagem, sucesso: true, Objeto: Anuncio.Objeto })
    }
}

module.exports = CriarNovoAnuncio