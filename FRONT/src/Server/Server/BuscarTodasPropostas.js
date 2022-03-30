import { Axios } from "./API";
export async function BuscarTodasPropostas() {
  try {
    let resultado = await Axios.get("/anuncio/formulario/proposta");
    if (resultado.data.erro === true) {
      return false;
    }
    return resultado.data.Objeto.Object;
  } catch (error) {
    throw new Error();
  }
}
