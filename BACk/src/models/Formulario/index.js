const knex = require("../../docs/database");

class Model {
  async Criar({ NOME, EMAIL, TELEFONE, MODELO_VEI, PROPOSTA, ID_VEI }) {
    let sql = `insert into formulario (nome_CLI, fone_CLI, email_CLI, modelo_VEI, proposta, VEICULO_id)  value (?,?,?,?,?,?)`;

    try {
      let resultado = await knex.raw(sql, [
        NOME,
        TELEFONE,
        EMAIL,
        MODELO_VEI,
        PROPOSTA,
        ID_VEI
      ]);
      return resultado[0].affectedRows <= 1 ? true : false
    } catch (error) {
      console.log(error)
      let erro = new Error();
      erro.name = "SQL ERRO";
      erro.message = "Erro ao criar novo formulario";
      throw erro;
    }
  }
  async Delete({ id }) {
    let sql = "delete from formulario where id = ?";
    try {
      let resultado = await knex.raw(sql, [id]);
      return resultado
    } catch (error) {
      let erro = new Error();
      erro.name = "SQL ERRO";
      erro.message = "Erro ao apagar formulario";
      throw erro;
    }
  }
  async BuscarTodos() {
    let sql = "select * from formulario";
    try {
      let resultado = await knex.raw(sql);
      return resultado[0]
    } catch (error) {
      console.log(error)
      let erro = new Error();
      erro.name = "SQL ERRO";
      erro.message = "Erro ao buscar formulario";
      throw erro;
    }
  }
  async GetById({ id }) {
    let sql = 'select * from formulario where id = ?'
    try {
      let resultado = await knex.raw(sql, [id])
      return resultado[0] >= 1 ? true : false
    } catch (error) {
      let erro = new Error();
      erro.name = "SQL ERRO";
      erro.message = "Erro ao buscar formulario";
      throw erro;
    }
  }

  async geyByEmailAndNumber({ EMAIL, TELEFONE }) {
    console.log(EMAIL, TELEFONE)
    let sql = 'select count(*) as NumberProposta from formulario where (email_CLI = ? and fone_CLI = ?)';
    try {
      let resultado = await knex.raw(sql, [EMAIL, TELEFONE]);
      return resultado[0][0].NumberProposta
    } catch (error) {
      console.log('DEU ERRO ! ', error)
      let erro = new Error();
      erro.name = "SQL ERRO";
      erro.message = "Erro ao buscar formulario";
      throw erro;
    }
  }
}

module.exports = Model;
