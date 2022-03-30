const FitlroAnuncio = require('../../services/Filtros/AnunciosFiltros')

const Filtro = require('../../services/Anuncio/FiltroTelaDahsBoard')

const FiltrosHome = require('../../services/Anuncio/FiltroHome')

class FiltrosAnuncio {

    async Filtrar(HttpServer) {

        let { MODELO_VEI, PRECO_VEI, KM_VEI, MARCA_VEI } = HttpServer.body

        let Filtro = new FitlroAnuncio();

        let ANUNCIOS = await Filtro.ModeloVeiculo(MODELO_VEI, PRECO_VEI, KM_VEI, MARCA_VEI, STATUS_VEI, HttpServer.next)

        if (ANUNCIOS instanceof Error) {
            return {
                Status: 400,
                json: {
                    erro: true, mensagem: ANUNCIOS.message, sucesso: false, Objeto: null
                }
            }
        }
        return {
            Status: 200,
            json: {
                erro: false, mensagem: ANUNCIOS.mensagem, sucesso: true, Objeto: ANUNCIOS.Objeto
            }
        }
    }

    async FiltroDahsboard(request, response, next) {
        console.log('body filtro', request.body)
        let Services = new Filtro()
        let TodosAnuncios = await Services.FiltroDahs(request, next);
        if (TodosAnuncios instanceof Error) {
            return {
                Status: 400,
                json: {
                    erro: true, mensagem: TodosAnuncios.message, sucesso: false, Objeto: null 
                }
            }
        }
         return {
                Status: 200,
                json: {
                    erro: false, mensagem: TodosAnuncios.mensagem, sucesso: true, Objeto: TodosAnuncios.Objeto
                }
            }
    }

    async FiltroHome(HttpServer) {
        let Services = new FiltrosHome()
        let TodosAnuncios = await Services.Filtro(HttpServer, HttpServer.next);
        if (TodosAnuncios instanceof Error) {
            return {
                Status: 400,
                json: {
                    erro: true, mensagem: TodosAnuncios.message, sucesso: false, Objeto: null 
                }
            }
        }
        return {
            Status: 200,
            json: {
                erro: false, mensagem: TodosAnuncios.mensagem, sucesso: true, Objeto: TodosAnuncios.Objeto
            }
        }
    }
}



module.exports = FiltrosAnuncio