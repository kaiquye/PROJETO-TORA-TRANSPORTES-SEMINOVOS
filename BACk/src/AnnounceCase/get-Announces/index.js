const BuscarTodosAnunciosServices = require('../../services/Anuncio/BuscarTodosAnunciosServices')
const servicesQts = require('../../services/Filtros/BuscarTodosQtsAdm')
const servicesImg = require('../../services/Anuncio/BuscarImagem')
const servicesplaca = require('../../services/Anuncio/BuscarAnuncioPelaPlacaServices')
const BuscarTodosAnunciosServicesAdm = require('../../services/Anuncio/ADM_BuscarTodosAnuncioServices')
// const servicesOrc = require('../../services/SIT/BuscarVeiculoPelaPlacaServices')


class BuscarTodosAnunciosController {
    // async BuscarPelaPlaca(request, response, next) {
    //     let Services = new servicesOrc()
    //     let INFORMACOES = await Services.BuscarPelaPlaca(request, next)

    //     if (INFORMACOES instanceof Error) {
    //         return response.status(300).json({ erro: true, mensagem: INFORMACOES.message, sucesso: false, Objeto: null })
    //     }
    //     return response.status(200).json({ erro: false, mensagem: INFORMACOES.mensagem, sucesso: true, Objeto: INFORMACOES.Objeto })
    // }

    async BuscarTodosAnuncios_Adm(HttpServer) {
        let Services = new BuscarTodosAnunciosServicesAdm()
        console.log(HttpServer)
        let TodosAnuncios = await Services.BuscarTodosAnunciosADM(HttpServer.next);
        if (TodosAnuncios instanceof Error) {
            return {
                Status: 200,
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

    async BuscarTodos(HttpServer) {
        let Services = new BuscarTodosAnunciosServices()
        let TodosAnuncios = await Services.BuscarTodosAnuncios(HttpServer.next);
        if (TodosAnuncios instanceof Error) {
            return {
                Status: 200,
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



    async Informacoes(HttpServer) {
        let Services = new servicesQts();
        let Status = await Services.Buscar(HttpServer.next);
        if (Status instanceof Error) {
            return {
                Status: 200,
                json: {
                    erro: true, mensagem: Status.message, sucesso: false, Objeto: null
                }
            }
        }
        return {
            Status: 200,
            json: {
                erro: false, mensagem: Status.mensagem, sucesso: true, Objeto: Status.Objeto
            }
        }
    }



    async Buscar(HttpServer) {
        let { id } = HttpServer.params
        console.log(id)
        let Services = new servicesImg()
        let Imagems = await Services.Buscar(id, HttpServer.next)
        if (Imagems instanceof Error) {
            return {
                Status: 400,
                json: {
                    erro: true, mensagem: Imagems.message, sucesso: false, Objeto: null
                }
            }
        }
        return {
            Status: 200,
            json: {
                erro: false, sucesso: true, Objeto: Imagems.Objeto
            }
        }
    }


    // async Informacoes(request, response, next) {
    //     let Services = new services();
    //     let Status = await Services.Buscar(request.params, next);
    //     if (Status instanceof Error) {
    //         return response.status(200).json({ erro: true, mensagem: Status.message, sucesso: false, Objeto: null })
    //     }
    //     return response.status(200).json({ erro: false, mensagem: Status.mensagem, sucesso: true, Objeto: Status.Objeto })
    // }


    async BuscarAnuncioPelaPlaca(HttpServer) {
        console.log(HttpServer)
        let Services = new servicesplaca()
        let ANUNCIO = await Services.BuscarPelaPlaca(HttpServer, HttpServer.next)
        if (ANUNCIO instanceof Error) {
            return {
                Status: 400,
                json: {
                    erro: true, mensagem: ANUNCIO.message, sucesso: false, Objeto: null
                }
            }
        }
        return {
            Status: 200,
            json: {
                erro: false, sucesso: true, Objeto: ANUNCIO.Objeto
            }
        }
    }
}

module.exports = BuscarTodosAnunciosController