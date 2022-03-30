
const criarAnuncioServices = require('../../services/Anuncio/CriaAnuncioServices')
const { Verificar } = require('../modules-annunces')
const ENUM = require('../../enum/ENUM')

class CriarNovoAnuncio {

    async Criar(HttpServer) {
        let ERRO_FORM_ANUNCIO = await new Verificar(ENUM.FORM_ANUNCIO, HttpServer);
        console.log('TESTE',ERRO_FORM_ANUNCIO)
        if(ERRO_FORM_ANUNCIO.ok === true){
            return {
                ...ERRO_FORM_ANUNCIO
            }
        }else{
            let Anuncio = await new criarAnuncioServices().Criar(HttpServer, HttpServer.next)
            if (Anuncio instanceof Error) {
                return {
                    Status: 400,
                    json: {
                        erro: true, mensagem: Anuncio.message, sucesso: false, Objeto: null
                    }
                }
            }
            return {
                Status: 201,
                json: {
                    erro: false, mensagem: Anuncio.mensagem, sucesso: true, Objeto: Anuncio.Objeto
                }
            }
        }
    }
}

module.exports = CriarNovoAnuncio