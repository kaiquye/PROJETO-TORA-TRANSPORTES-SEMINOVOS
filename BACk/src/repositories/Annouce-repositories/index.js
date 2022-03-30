const Model = require('../../models/Anuncio/index')


//esqueça do DB
class Repositories {

    static async create({PRECO_VEI, POTENCIA_VEI, TORQUE_VEI, KM_VEI,
        CABINE_VEI, REL_DIFERENCIAL_VEI, TIP_SUSPENSAO_VEI,
        ENT_EIXO_VEI, CAP_COMBUSTIVEL_VEI, OPC_VEI,
        PROPRIETARIO_VEI, TELEFONE_VEI, PLACA_VEI, CHASSI_VEI,
        ANO_VEI, COR_VEI, MODELO_VEI, CRV_VEI, RENAVAM_VEI, OBS_VEI, IMAGEMS_VEI, TIL_ANUNCIO_VEI,
        MARCA_VEI, TIPO_VEI}){
          return await new Model().Criar(PRECO_VEI, POTENCIA_VEI, TORQUE_VEI, KM_VEI,
                CABINE_VEI, REL_DIFERENCIAL_VEI, TIP_SUSPENSAO_VEI,
                ENT_EIXO_VEI, CAP_COMBUSTIVEL_VEI, OPC_VEI,
                PROPRIETARIO_VEI, TELEFONE_VEI, PLACA_VEI, CHASSI_VEI,
                ANO_VEI, COR_VEI, MODELO_VEI, CRV_VEI, RENAVAM_VEI, OBS_VEI, IMAGEMS_VEI, TIL_ANUNCIO_VEI,
                MARCA_VEI, TIPO_VEI)

    }

    static async getByPlaca(params) {
        return await new Model().BuscarPorPlaca(params);
    }

    static async getAll() {
        return await new  Model().BuscarTodos();
    }

    static async getAllAdm(){
        return await new Model().BuscarTodosAdm();
    }

    static async deleteByPlaca(params) {
        return await new Model().Apagar(params);
    }

    static async Edit(body,params,IMAGEMS_VEI) {
        return await new Model().EditarInformacoes(body,params,IMAGEMS_VEI);
    }

    static async alterStatus(params){
        return await new Model().AlterarStatus(params);
    }

    static async getByPlacaChassi(params){
        return await new Model().BuscarPor(params);
    }

    static async filterDahsboard(params){
        return await new Model().FiltrosDashboard(params)
    }

    static async next(params){
        return await new Model().Proximos(params);
    }

    static async filter(params){
        return await new Model().Filtro(params);
    }

    static async RecommendedByModel(params){
        return await new Model().Recomendados(params);
    }

    static async getImage(params){
        return await new Model().BuscarImagem(params);
    }

    static async getInfosDatabase(){
        return await new Model().BuscarInformacoes()
    }

    static async getByIdVeiculo(params){
        return await new Model().GetById(params);
    }
}


module.exports = {
    create : Repositories.create, 
    getAll  : Repositories.getAll, 
    getByPlaca : Repositories.getByPlaca, 
    getAllAdm : Repositories.getAllAdm,
    deleteByPlaca : Repositories.deleteByPlaca,
    Edit : Repositories.Edit,
    AlterStatus : Repositories.alterStatus, 
    getByPlacaChassi : Repositories.getByPlacaChassi, 
    filterDahsboard : Repositories.filterDahsboard, 
    next : Repositories.next,
    filter : Repositories.filter,
    RecommendedByModel : Repositories.RecommendedByModel,  
    getImage : Repositories.getImage,
    getInfosDatabase : Repositories.getInfosDatabase,
    getById : Repositories.getByIdVeiculo
}