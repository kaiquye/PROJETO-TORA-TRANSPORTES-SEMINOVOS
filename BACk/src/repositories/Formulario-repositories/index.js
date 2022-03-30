const Model = require("../../models/Formulario/index");

class Repositories {
  static async create(params) {
    return await new Model().Criar(params);
  }
  static async get() {
    return await new Model().BuscarTodos();
  }
  static async delete(params) {
    return await new Model().Delete(params);
  }
  static async getById(params){
    return await new Model().GetById(params);
  }
  static async geyByEmailAndNumber(params){
    return await new Model().geyByEmailAndNumber(params)
  }
}
module.exports = {
    create : Repositories.create,
    get : Repositories.get,
    delete : Repositories.delete,
    GeyById : Repositories.getById,
    getByEmailAndNumber : Repositories.geyByEmailAndNumber
}