const { Router } = require('express')
// const CriarAnuncio = require('../../controller/Anuncio/CriarAnuncioController')
// const BuscarTodosAnuncios = require('../../controller/Anuncio/BuscarTodosAnunciosController')
// const ResizeImg = require('../../controller/Anuncio/ResizeimageController')
// const ProximosAnuncios = require('../../controller/Anuncio/ProximosAnuncios')
// const FiltrosAnuncio = require('../../controller/Anuncio/FiltroAnunciosController')
// const AlterarStatusAnuncio = require('../../controller/Anuncio/AlterarStatusAnuncioController')
// const BuscarAnuncioPelaPlaca = require('../../controller/Anuncio/BuscarAnuncioPelaPlacaController')
// const ApagarAnuncio = require('../../controller/Anuncio/ApagarAnuncioController')
// const EditarInformacoes = require('../../controller/Anuncio/EditarInformacoesDoAnuncioController')
// const BuscarInformacoesVeiculo = require('../../controller/SIT/BuscarVeiculoPelaPlacaController')
// const AnunciosRecomendados = require('../../controller/Anuncio/AnunciosRecomendadosController')
// const BuscarTodosAdm = require('../../controller/Anuncio/ADMBuscarTodosAnunciosController')
// const FiltroDahsboard = require('../../controller/Anuncio/FiltroAnunciosDahs')
const Multer = require('../../middleware/multer')
// const Filtro = require('../../controller/Anuncio/FiltroHome')
// const BuscarImagem = require('../../controller/Anuncio/BuscarImagem')
// const TodasInformacoes = require('../../controller/Anuncio/BuscarTodasInformacoesDahs')
const { Validate } = require('../../Auth/index')

// USE CASES 

const { create, Filter, get, recomed, edit, Delete, resize_imagem, next, Oracle, Update, createForm, getForm, deleteForm } = require('../../AnnounceCase/main')

const HttpAdapters = require('../../controller/HttpServerAdapter')



class Anuncio {

    constructor() {
        this.app = Router();
        this.Publicas();
        // this.Middleware_Admin()
        this.Protegidas();
    }

    Middleware_Admin() {
        this.app.use(Validate)
    }

    Publicas() {
        // this.app.get('/', new BuscarTodosAnuncios().BuscarTodos)
        this.app.get('/', HttpAdapters.HttpAdpater(get.BuscarTodos))
        this.app.get('/filtro/:numero', HttpAdapters.HttpAdpater(next.Proximo))
        //filtro nao fun
        // this.app.get('/filtro', new FiltrosAnuncio().Filtro)
        // this.app.get('/filtro', Filter.Filtrar)
        // this.app.get('/:PLACA_VEI', new BuscarAnuncioPelaPlaca().BuscarAnuncioPelaPlaca)
        this.app.get('/:VEICULO_id', HttpAdapters.HttpAdpater(get.BuscarAnuncioPelaPlaca))
        // this.app.get('/recomendados/:MODELO_VEI', new AnunciosRecomendados().Recomendados)
        this.app.get('/recomendados/:MODELO_VEI', HttpAdapters.HttpAdpater(recomed.Recomendados))
        // this.app.post('/filtros/home', new Filtro().FiltroHome)
        this.app.post('/filtros/home', HttpAdapters.HttpAdpater(Filter.FiltroHome))
        // this.app.get('/imagem/adm/anuncio/:id', new BuscarImagem().Buscar)
        this.app.get('/imagem/adm/anuncio/:id', HttpAdapters.HttpAdpater(get.Buscar))
        this.app.patch('/adm/:VEICULO_id', Multer.array('image', 10), resize_imagem.Execute, edit.Editar)
        // this.app.post('/dahsboard/filtro', new FiltroDahsboard().FiltroDahsboard)
        this.app.post('/dahsboard/filtro', HttpAdapters.HttpAdpater(Filter.FiltroDahsboard))
        this.app.post('/formulario/proposta', HttpAdapters.HttpAdpater(createForm.Criar))
        this.app.get('/formulario/proposta', HttpAdapters.HttpAdpater(getForm.getAll))
        this.app.delete('/formulario/proposta/:id', HttpAdapters.HttpAdpater(deleteForm.Delete))
    }
    Protegidas() {
        // this.app.post('/', Multer.array('image', 10), new ResizeImg().Execute, create.Criar)
        this.app.patch('/alter/negociacao/:VEICULO_id', HttpAdapters.HttpAdpater(Update.Alter))
        this.app.post('/', Multer.array('image', 10), resize_imagem.Execute, HttpAdapters.HttpAdpater(create.Criar))
        this.app.patch('/:VEICULO_id', HttpAdapters.HttpAdpater(edit.AlterarStatus))
        this.app.delete('/:PLACA_VEI', HttpAdapters.HttpAdpater(Delete.Apagar))
        this.app.get('/oracle/:PLACA_VEI', Oracle.BuscarPelaPlaca)
        // this.app.get('/informacoes/anuncios', new TodasInformacoes().Informacoes)
        this.app.get('/informacoes/anuncios', HttpAdapters.HttpAdpater(get.Informacoes))
        this.app.get('/adm/buscar', HttpAdapters.HttpAdpater(get.BuscarTodosAnuncios_Adm))
    }
}
module.exports = Anuncio
