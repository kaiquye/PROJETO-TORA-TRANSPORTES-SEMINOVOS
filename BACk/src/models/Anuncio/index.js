const knex = require("../../docs/database");
class AnuncioModel {
  async Criar(
    PRECO_VEI,
    POTENCIA_VEI,
    TORQUE_VEI,
    KM_VEI,
    CABINE_VEI,
    REL_DIFERENCIAL_VEI,
    TIP_SUSPENSAO_VEI,
    ENT_EIXO_VEI,
    CAP_COMBUSTIVEL_VEI,
    OPC_VEI,
    PROPRIETARIO_VEI,
    TELEFONE_VEI,
    PLACA_VEI,
    CHASSI_VEI,
    ANO_VEI,
    COR_VEI,
    MODELO_VEI,
    CRV_VEI,
    RENAVAM_VEI,
    OBS_VEI,
    IMAGEMS_VEI,
    TIL_ANUNCIO_VEI,
    MARCA_VEI,
    TIPO_VEI
  ) {
    try {
      return await knex.transaction(async (trx) => {
        const PROPRIETARIO_VEI_ID = await knex("PROPRIETARIO")
          .transacting(trx)
          .insert({
            PROPRIETARIO_VEI: PROPRIETARIO_VEI,
            TELEFONE_VEI: TELEFONE_VEI,
          });
        const VEICULO_VEI_ID = await knex("VEICULO").transacting(trx).insert({
          PLACA_VEI: PLACA_VEI,
          CHASSI_VEI: CHASSI_VEI,
          ANO_VEI: ANO_VEI,
          COR_VEI: COR_VEI,
          MODELO_VEI: MODELO_VEI,
          CRV_VEI: CRV_VEI,
          RENAVAM_VEI: RENAVAM_VEI,
          OBS_VEI: OBS_VEI,
          PROPRIETARIO_id: PROPRIETARIO_VEI_ID,
        });
        const INFORMACOES_VEI_ID = await knex("INFORMACOES")
          .transacting(trx)
          .insert({
            PRECO_VEI: PRECO_VEI,
            POTENCIA_VEI: POTENCIA_VEI,
            TORQUE_VEI: TORQUE_VEI,
            KM_VEI: KM_VEI,
            CABINE_VEI: CABINE_VEI,
            REL_DIFERENCIAL_VEI: REL_DIFERENCIAL_VEI,
            TIP_SUSPENSAO_VEI: TIP_SUSPENSAO_VEI,
            ENT_EIXO_VEI: ENT_EIXO_VEI,
            MARCA_VEI: MARCA_VEI,
            TIL_ANUNCIO_VEI: TIL_ANUNCIO_VEI,
            CAP_COMBUSTIVEL_VEI: CAP_COMBUSTIVEL_VEI,
            OPC_VEI: OPC_VEI,
            VEICULO_id: VEICULO_VEI_ID,
            IMG_PRIN_VEI: IMAGEMS_VEI[0],
            TIPO_VEI: TIPO_VEI,
          });
        await IMAGEMS_VEI.forEach(async (IMAGEM) => {
          await knex("IMAGEM").transacting(trx).insert({
            IMAGEM_VEI: IMAGEM,
            VEICULO_id: VEICULO_VEI_ID,
          });
        });
        console.log(
          "resuktado",
          PROPRIETARIO_VEI_ID,
          INFORMACOES_VEI_ID,
          IMAGEMS_VEI
        );
        return {
          PROPRIETARIO_VEI_ID:
            PROPRIETARIO_VEI_ID[0] || "Erro, servidor não retornou o ID",
          VEICULO_VEI_ID: VEICULO_VEI_ID[0],
          INFORMACOES_VEI_ID: INFORMACOES_VEI_ID[0],
          IMAGEM_VEI_ID: null,
        };
      });
    } catch (error) {
      console.log(error);
      let erro = new Error();
      erro.name = "SQL ERRO";
      erro.message = "Erro ao criar um novo anuncio";
      throw erro;
    }
  }

  async BuscarTodos() {
    let sql = `
        select veiculo.PLACA_VEI, veiculo.ANO_VEI, veiculo.COR_VEI, veiculo.MODELO_VEI, 
        veiculo.OBS_VEI, veiculo.PROPRIETARIO_id ,  format(informacoes.PRECO_VEI,2,'de_DE') as 
        PRECO_VEI, 
        informacoes.POTENCIA_VEI, informacoes.TORQUE_VEI, informacoes.KM_VEI, informacoes.CABINE_VEI, informacoes.REL_DIFERENCIAL_VEI,
        informacoes.TIP_SUSPENSAO_VEI,
        informacoes.ENT_EIXO_VEI, informacoes.CAP_COMBUSTIVEL_VEI, informacoes.OPC_VEI, datediff(now(), informacoes.DATA_PUBLICACAO) as DATA_PUBLICACAO , informacoes.NEGOCIACAO_VEI ,informacoes.INF_VEI, informacoes.VEICULO_id, informacoes.IMG_PRIN_VEI,
        informacoes.TIL_ANUNCIO_VEI, informacoes.TIPO_VEI
        from veiculo  
        inner join informacoes on VEICULO.id = informacoes.VEICULO_id where STATUS_VEI = 1 ORDER BY veiculo.id limit 24`;
    try {
      let ANUNCIO = await knex.raw(sql);
      return ANUNCIO[0][0] !== undefined ? ANUNCIO[0] : false;
    } catch (error) {
      let erro = new Error();
      erro.name = "SQL ERRO";
      erro.message = "Erro ao buscar todos anuncio";
      throw erro;
    }
  }

  async BuscarTodosAdm() {
    let sql = `
        select veiculo.PLACA_VEI, veiculo.ANO_VEI, veiculo.COR_VEI, veiculo.MODELO_VEI, 
                    veiculo.OBS_VEI, veiculo.STATUS_VEI, veiculo.PROPRIETARIO_id ,format(informacoes.PRECO_VEI,2,'de_DE') as 
                    PRECO_VEI, 
                    informacoes.POTENCIA_VEI, informacoes.TORQUE_VEI, informacoes.KM_VEI, informacoes.NEGOCIACAO_VEI, informacoes.CABINE_VEI, informacoes.REL_DIFERENCIAL_VEI,
                    informacoes.TIP_SUSPENSAO_VEI,
                    informacoes.ENT_EIXO_VEI, informacoes.CAP_COMBUSTIVEL_VEI, informacoes.MARCA_VEI, informacoes.OPC_VEI, informacoes.INF_VEI, informacoes.VEICULO_id, informacoes.IMG_PRIN_VEI,
                    informacoes.TIL_ANUNCIO_VEI, informacoes.TIPO_VEI , proprietario.* from proprietario  
                    inner join veiculo on proprietario.id = veiculo.PROPRIETARIO_id
                   inner join informacoes on VEICULO.id = informacoes.VEICULO_id ORDER BY
                    veiculo.id ;`;
    try {
      let ANUNCIO = await knex.raw(sql);
      return ANUNCIO[0][0] !== undefined ? ANUNCIO[0] : false;
    } catch (error) {
      let erro = new Error();
      erro.name = "SQL ERRO";
      erro.message = "Erro : ADM ao buscar todos anuncio";
      throw erro;
    }
  }

  async BuscarPorPlaca({ VEICULO_id }) {
    if (!VEICULO_id) return false;
    let sql = ` select proprietario.*,  veiculo.PLACA_VEI, veiculo.ANO_VEI, veiculo.COR_VEI, veiculo.MODELO_VEI, 
        veiculo.OBS_VEI, veiculo.PROPRIETARIO_id ,  format(informacoes.PRECO_VEI,2,'de_DE') as 
        PRECO_VEI, 
        informacoes.POTENCIA_VEI, informacoes.TORQUE_VEI, informacoes.KM_VEI, informacoes.CABINE_VEI, informacoes.REL_DIFERENCIAL_VEI,
        informacoes.TIP_SUSPENSAO_VEI,
        informacoes.ENT_EIXO_VEI, informacoes.CAP_COMBUSTIVEL_VEI, informacoes.NEGOCIACAO_VEI, informacoes.OPC_VEI, informacoes.INF_VEI, informacoes.VEICULO_id, informacoes.MARCA_VEI, informacoes.IMG_PRIN_VEI,
        informacoes.TIL_ANUNCIO_VEI, informacoes.TIPO_VEI from proprietario
        inner join veiculo on proprietario.id = veiculo.PROPRIETARIO_id
        inner join informacoes on VEICULO.id = informacoes.VEICULO_id where veiculo.id = ?;`;
    let sqlImg = "SELECT * FROM imagem where VEICULO_id = ?";
    try {
      const ARRAY = new Array();
      let ANUNCIO = await knex.raw(sql, [VEICULO_id]);
      if (ANUNCIO[0][0]) {
        var IMAGEM = await knex.raw(sqlImg, [ANUNCIO[0][0].VEICULO_id]);
        ARRAY.push(...ANUNCIO[0], IMAGEM[0]);
      }
      console.log(ARRAY, "_____________________________________________");
      return ANUNCIO[0][0] !== undefined ? ARRAY : false;
    } catch (error) {
      console.log(error);
      let erro = new Error();
      erro.name = "SQL ERRO";
      erro.message = "Erro ao buscar todos anuncio pela placa";
      throw erro;
    }
  }

  async BuscarPor({ PLACA_VEI, CHASSI_VEI }) {
    //Caminhoes diferentes : as placas podem ser iguasl, placa e chassi não.
    let SQL = `SELECT id FROM VEICULO where PLACA_VEI =  ? or CHASSI_VEI = ?`;
    try {
      let VEICULO_ID = await knex.raw(SQL, [PLACA_VEI, CHASSI_VEI]);
      return VEICULO_ID[0][0] !== undefined ? VEICULO_ID[0][0].id : false;
    } catch (error) {
      console.log(error);
      let erro = new Error();
      erro.name = "SQL ERRO";
      erro.message = "Erro ao buscar um anuncio";
      throw erro;
    }
  }

  async FiltrosDashboard({
    STATUS_VEI = 3,
    MODELO_VEI = "",
    PRECO_VEI = 999999999999999,
    KM_VEI = 999999999999999,
    MARCA_VEI = "",
    DATA = undefined,
    NEGOCIACAO_VEI = 3,
  }) {
    try {
      console.log(
        "STATUS",
        STATUS_VEI,
        "MODELO",
        MODELO_VEI,
        MARCA_VEI,
        DATA,
        NEGOCIACAO_VEI
      );
      let sql = `select veiculo.PLACA_VEI, veiculo.ANO_VEI, veiculo.COR_VEI, veiculo.MODELO_VEI, 
            veiculo.OBS_VEI, veiculo.PROPRIETARIO_id, veiculo.STATUS_VEI , proprietario.*,format(informacoes.PRECO_VEI,2,'de_DE') as 
            PRECO_VEI,  
            informacoes.POTENCIA_VEI, informacoes.TORQUE_VEI, informacoes.KM_VEI, informacoes.CABINE_VEI, informacoes.REL_DIFERENCIAL_VEI,
            informacoes.TIP_SUSPENSAO_VEI, 
            informacoes.ENT_EIXO_VEI, informacoes.CAP_COMBUSTIVEL_VEI, informacoes.OPC_VEI, informacoes.NEGOCIACAO_VEI ,informacoes.INF_VEI, informacoes.VEICULO_id, informacoes.IMG_PRIN_VEI,
            informacoes.TIL_ANUNCIO_VEI, informacoes.TIPO_VEI from proprietario  
            inner join veiculo on proprietario.id  = veiculo.PROPRIETARIO_id 
            inner join informacoes on VEICULO.id = informacoes.VEICULO_id 
            where (veiculo.STATUS_VEI <> ? 
            and veiculo.MODELO_VEI like ? 
            and informacoes.PRECO_VEI  <= ? 
            and informacoes.KM_VEI <= ?
            and informacoes.NEGOCIACAO_VEI <> ?
            ${
              DATA !== undefined
                ? `and datediff(now(), DATA_PUBLICACAO) >= ${DATA}`
                : ""
            }
            and informacoes.MARCA_VEI like ?)
            ORDER BY veiculo.id;
            `;
      let ANUNCIOS = await knex.raw(sql, [
        STATUS_VEI,
        MODELO_VEI + `%`,
        PRECO_VEI,
        KM_VEI,
        NEGOCIACAO_VEI,
        MARCA_VEI + "%",
      ]);
      return ANUNCIOS[0][0] !== undefined ? ANUNCIOS[0] : false;
    } catch (error) {
      console.log(error);
      let erro = new Error();
      erro.name = "SQL ERRO";
      erro.message = "Erro : Erro ao filtrar os anuncios / ADM ";
      throw erro;
    }
  }

  async Proximos(numero) {
    let sql = `
        select veiculo.PLACA_VEI, veiculo.ANO_VEI, veiculo.COR_VEI, veiculo.MODELO_VEI, 
        veiculo.OBS_VEI, veiculo.PROPRIETARIO_id , format(informacoes.PRECO_VEI,2,'de_DE') as 
        PRECO_VEI, 
        informacoes.POTENCIA_VEI, informacoes.TORQUE_VEI, informacoes.KM_VEI,  informacoes.NEGOCIACAO_VEI , 
        informacoes.CABINE_VEI, informacoes.REL_DIFERENCIAL_VEI, datediff(now() ,informacoes.DATA_PUBLICACAO) as DATA_PUBLICACAO , 
        informacoes.TIP_SUSPENSAO_VEI,
        informacoes.ENT_EIXO_VEI, informacoes.CAP_COMBUSTIVEL_VEI, informacoes.OPC_VEI, informacoes.INF_VEI, informacoes.VEICULO_id, informacoes.IMG_PRIN_VEI,
        informacoes.TIL_ANUNCIO_VEI, informacoes.TIPO_VEI from proprietario  
        inner join veiculo on proprietario.id  = veiculo.PROPRIETARIO_id 
        inner join informacoes on VEICULO.id = informacoes.VEICULO_id  where veiculo.status_vei = 1 limit ? offset ? ;`;
    let sqlImg = "SELECT * FROM imagem where VEICULO_id = ?";
    try {
      //quantas linhas eu quero pular....Ex : 6
      let ANUNCIOS = await knex.raw(sql, [24, numero]);
      console.log(ANUNCIOS[0][0]);
      return ANUNCIOS[0][0] !== undefined ? ANUNCIOS[0] : false;
    } catch (error) {
      console.log(error);
      let erro = new Error();
      erro.name = "SQL ERRO";
      erro.message = "Erro ao buscar proximos anuncio";
      throw erro;
    }
  }
  async Filtro({
    MODELO_VEI = "",
    PRECO_VEI = 999999999999999,
    KM_VEI = 999999999999999,
    MARCA_VEI = "",
    ORDEM = "ASC",
    TIPO_VEI = undefined,
    DATA_VEI = 999,
    NEGOCIACAO_VEI = 3,
  }) {
    console.log(NEGOCIACAO_VEI);
    let sql = `
            select veiculo.PLACA_VEI, veiculo.ANO_VEI, veiculo.COR_VEI, veiculo.MODELO_VEI, 
            veiculo.OBS_VEI, veiculo.PROPRIETARIO_id , proprietario.* , format(informacoes.PRECO_VEI,2,'de_DE') as 
            PRECO_VEI, 
            informacoes.POTENCIA_VEI, informacoes.TORQUE_VEI, informacoes.KM_VEI,informacoes.CABINE_VEI, informacoes.REL_DIFERENCIAL_VEI,
            informacoes.TIP_SUSPENSAO_VEI, datediff(now(), informacoes.DATA_PUBLICACAO) as DATA_PUBLICACAO, informacoes.NEGOCIACAO_VEI, 
            informacoes.ENT_EIXO_VEI, informacoes.CAP_COMBUSTIVEL_VEI, informacoes.OPC_VEI, informacoes.INF_VEI, informacoes.VEICULO_id, informacoes.IMG_PRIN_VEI,
            informacoes.TIL_ANUNCIO_VEI, informacoes.TIPO_VEI from proprietario  
            inner join veiculo on proprietario.id  = veiculo.PROPRIETARIO_id 
            inner join informacoes on VEICULO.id = informacoes.VEICULO_id 
            where (veiculo.status_vei = 1 and veiculo.MODELO_VEI like ? and informacoes.PRECO_VEI 
            <= ? and informacoes.KM_VEI <= ? and informacoes.MARCA_VEI like ? 
            and informacoes.NEGOCIACAO_VEI <> ? 
            and datediff(now(), DATA_PUBLICACAO) <= ?
            ${
              TIPO_VEI !== undefined
                ? `and informacoes.TIPO_VEI like "${TIPO_VEI + "%"}"`
                : `and informacoes.TIPO_VEI like '%'`
            }
            ) 
            ${
              ORDEM === "ASC"
                ? `order by veiculo.id ASC`
                : "ORDER BY veiculo.id  DESC"
            }
        `;
    try {
      let ANUNCIOS = await knex.raw(sql, [
        MODELO_VEI + `%`,
        PRECO_VEI,
        parseFloat(KM_VEI < 1 ? 99999999999999 : KM_VEI),
        MARCA_VEI + "%",
        NEGOCIACAO_VEI,
        DATA_VEI,
      ]);
      console.log(ANUNCIOS[0]);
      return ANUNCIOS[0][0] !== undefined ? ANUNCIOS[0] : false;
    } catch (error) {
      console.log(error);
      let erro = new Error();
      erro.name = "SQL ERRO";
      erro.message = "Erro ao buscar modelo do anuncio";
      throw erro;
    }
  }

  async AlterarStatus({ VEICULO_id }) {
    let sql = `
        UPDATE  veiculo
        SET     STATUS_VEI = IF(STATUS_VEI = '1', STATUS_VEI - 1, STATUS_VEI + 1)
        WHERE   id = ?
        `;
    try {
      let Status = await knex.raw(sql, [VEICULO_id]);
      return Status[0].changedRows > 0 ? true : false;
    } catch (error) {
      console.log(error);
      let erro = new Error();
      erro.name = "SQL ERRO";
      erro.message = "Erro ao atualizar o Status do anuncio";
      throw erro;
    }
  }

  async Apagar({ PLACA_VEI }) {
    let sql = `
        delete from VEICULO where PLACA_VEI = ?
        `;
    try {
      let STATUS = await knex.raw(sql, [PLACA_VEI]);
      return STATUS[0].affectedRows > 0 ? true : false;
    } catch (error) {
      let erro = new Error();
      erro.name = "SQL ERRO";
      erro.message = "Erro ao atualizar o Status do anuncio";
      throw erro;
    }
  }

  async EditarInformacoes(
    {
      PRECO_VEI = undefined,
      POTENCIA_VEI = undefined,
      TORQUE_VEI = undefined,
      KM_VEI = undefined,
      CABINE_VEI = undefined,
      REL_DIFERENCIAL_VEI = undefined,
      TIP_SUSPENSAO_VEI = undefined,
      ENT_EIXO_VEI = undefined,
      CAP_COMBUSTIVEL_VEI = undefined,
      OPC_VEI = undefined,
      INF_VEI = undefined,
      TIL_ANUNCIO_VEI = undefined,
      TIPO_VEI = undefined,
      MARCA_VEI = undefined,
      IMAGEMS_VEI,
      MODELO_VEI = undefined,
      ANO_VEI = undefined,
      COR_VEI = undefined,
    },
    { VEICULO_id }
  ) {
    try {
      await knex.transaction(async (trx) => {
        if (IMAGEMS_VEI) {
          await knex("IMAGEM")
            .transacting(trx)
            .where("VEICULO_id", VEICULO_id)
            .del();
          await IMAGEMS_VEI.forEach(async (IMAGEM) => {
            await knex("IMAGEM")
              .transacting(trx)
              .insert({
                IMAGEM_VEI: knex.raw("?", [IMAGEM]),
                VEICULO_id: VEICULO_id,
              });
          });
        }
        await knex("VEICULO")
          .transacting(trx)
          .where("id", VEICULO_id)
          .update({
            ANO_VEI: knex.raw("?", [ANO_VEI]),
            COR_VEI: knex.raw("?", [COR_VEI]),
            MODELO_VEI: knex.raw("?", [MODELO_VEI]),
          });
        if (IMAGEMS_VEI === undefined) {
          await knex("INFORMACOES")
            .transacting(trx)
            .where("VEICULO_id", VEICULO_id)
            .update({
              PRECO_VEI: parseInt(PRECO_VEI),
              POTENCIA_VEI: parseFloat(POTENCIA_VEI),
              TORQUE_VEI: TORQUE_VEI,
              KM_VEI: KM_VEI,
              CABINE_VEI: CABINE_VEI,
              REL_DIFERENCIAL_VEI: REL_DIFERENCIAL_VEI,
              TIP_SUSPENSAO_VEI: TIP_SUSPENSAO_VEI,
              ENT_EIXO_VEI: ENT_EIXO_VEI,
              MARCA_VEI: MARCA_VEI,
              TIL_ANUNCIO_VEI: TIL_ANUNCIO_VEI,
              CAP_COMBUSTIVEL_VEI: CAP_COMBUSTIVEL_VEI,
              OPC_VEI: OPC_VEI,
              TIPO_VEI: TIPO_VEI,
            });
        } else {
          await knex("INFORMACOES")
            .transacting(trx)
            .where("VEICULO_id", VEICULO_id)
            .update({
              PRECO_VEI: PRECO_VEI,
              POTENCIA_VEI: POTENCIA_VEI,
              TORQUE_VEI: TORQUE_VEI,
              KM_VEI: KM_VEI,
              CABINE_VEI: CABINE_VEI,
              REL_DIFERENCIAL_VEI: REL_DIFERENCIAL_VEI,
              TIP_SUSPENSAO_VEI: TIP_SUSPENSAO_VEI,
              ENT_EIXO_VEI: ENT_EIXO_VEI,
              MARCA_VEI: MARCA_VEI,
              TIL_ANUNCIO_VEI: TIL_ANUNCIO_VEI,
              CAP_COMBUSTIVEL_VEI: CAP_COMBUSTIVEL_VEI,
              IMG_PRIN_VEI: IMAGEMS_VEI[0],
              OPC_VEI: OPC_VEI,
              TIPO_VEI: TIPO_VEI,
            });
        }
      });
      return true;
    } catch (error) {
      console.log(error);
      let erro = new Error();
      erro.name = "SQL ERRO";
      erro.message = "Erro ao atualizar a informações do anuncio";
      throw erro;
    }
  }

  async Recomendados({ MODELO_VEI = "" }) {
    let sql = `
        select veiculo.PLACA_VEI, veiculo.ANO_VEI, veiculo.COR_VEI, veiculo.MODELO_VEI, 
                  veiculo.OBS_VEI, veiculo.PROPRIETARIO_id ,format(informacoes.PRECO_VEI,2,'de_DE') as 
                  PRECO_VEI, 
                  informacoes.POTENCIA_VEI, informacoes.TORQUE_VEI,  informacoes.NEGOCIACAO_VEI ,informacoes.KM_VEI, informacoes.CABINE_VEI, informacoes.REL_DIFERENCIAL_VEI,
                  informacoes.TIP_SUSPENSAO_VEI,
                  informacoes.ENT_EIXO_VEI, informacoes.CAP_COMBUSTIVEL_VEI, informacoes.OPC_VEI, informacoes.INF_VEI, informacoes.VEICULO_id, informacoes.IMG_PRIN_VEI,
                  informacoes.TIL_ANUNCIO_VEI, informacoes.TIPO_VEI from veiculo  
                  inner join informacoes on VEICULO.id = informacoes.VEICULO_id where veiculo.MODELO_VEI like ? ORDER BY veiculo.id limit 5`;
    try {
      let ANUNCIOS = await knex.raw(sql, [MODELO_VEI + "%"]);
      return ANUNCIOS[0][0] !== undefined ? ANUNCIOS[0] : false;
    } catch (error) {
      console.log(error);
      let erro = new Error();
      erro.name = "SQL ERRO";
      erro.message = "Erro ao buscar anuncios recomendados";
      throw erro;
    }
  }

  async BuscarImagem(id) {
    let sql = "SELECT * FROM imagem where VEICULO_id = ?";
    try {
      let Imagems = await knex.raw(sql, [id]);
      console.log("-----------------", Imagems);
      return Imagems[0][0] !== undefined ? Imagems : false;
    } catch (error) {
      console.log(error);
      let erro = new Error();
      erro.name = "SQL ERRO";
      erro.message = "Erro ao buscar anuncios recomendados";
      throw erro;
    }
  }

  async BuscarInformacoes() {
    try {
      let sql_ativos = "select id from veiculo where STATUS_VEI = 1 ";
      let sql_sedan = `select id from informacoes where TIPO_VEI = 'SEDAN'`;
      let sql_truck = `select id from informacoes where TIPO_VEI = 'TRUCK'`;
      let sql_reboque = `select id from informacoes where TIPO_VEI = 'REBOQUE'`;
      return await knex.transaction(async (trx) => {
        let ativos = await knex.raw(sql_ativos).transacting(trx);
        let sedan = await knex.raw(sql_sedan).transacting(trx);
        let truck = await knex.raw(sql_truck).transacting(trx);
        let reboque = await knex.raw(sql_reboque).transacting(trx);
        return {
          Ativos: ativos[0].length,
          Sedan: sedan[0].length,
          Truck: truck[0].length,
          Reboque: reboque[0].length,
        };
      });
    } catch (error) {
      console.log(error);
      let erro = new Error();
      erro.name = "SQL ERRO";
      erro.message = "Erro ao buscar anuncios recomendados";
      throw erro;
    }
  }

  async EditarNegociacao(VEICULO_id) {
    let sql = `
            UPDATE  informacoes
            SET     NEGOCIACAO_VEI = IF(NEGOCIACAO_VEI = '1', NEGOCIACAO_VEI - 1, NEGOCIACAO_VEI + 1)
            WHERE   VEICULO_id = ?
            `;
    try {
      let Status = await knex.raw(sql, [VEICULO_id]);
      console.log(Status);
      return Status[0].changedRows > 0 ? true : false;
    } catch (error) {
      let erro = new Error();
      erro.name = "SQL ERRO";
      erro.message = "Erro ao atualizar o NEGOCIACAO do anuncio";
      throw erro;
    }
  }

  async GetById(id) {
    let sql = "select * from veiculo where id = ?";
    try {
      let resultado = await knex.raw(sql, [id]);
      return resultado[0];
    } catch (error) {
      console.log(error);
      let erro = new Error();
      erro.name = "SQL ERRO";
      erro.message = "Error : Não foi possivel buscar veiculo pelo ID";
      throw erro;
    }
  }
}

module.exports = AnuncioModel;
