import { Axios } from "./API";
export async function EnviarProposta(
  NOME,
  EMAIL,
  TELEFONE,
  MODELO_VEI,
  PROPOSTA,
  ID_VEI
) {
  try {
    alert("teste");
    let resultado = await Axios.post("/anuncio/formulario/proposta", {
      NOME,
      EMAIL,
      TELEFONE,
      MODELO_VEI,
      PROPOSTA,
      ID_VEI,
    });
    if (resultado.data.erro === true) {
      return {
        ok: false,
        mensagem: 'error.',
      };
    }
    return {
      ok: true
    };
  } catch (error) {
    return {
      ok: false,
      mensagem: error.response.data.mensagem,
    };
  }
}
