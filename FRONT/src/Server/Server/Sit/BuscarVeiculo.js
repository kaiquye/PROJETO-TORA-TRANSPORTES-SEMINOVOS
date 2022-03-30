import axios from "axios";
import { getToken } from '../../../adalConfig';


export async function informacoes_sit(PLACA) {
  try {
    let Axios = await axios({
      baseURL: "http://localhost:8010/Anuncio/SIT/" + PLACA,
      method: "GET",
      headers : {
        Authorization:  getToken() //the token is a variable which holds the token
      }
    });
    console.log(Axios);
    return Axios;
  } catch (error) {
    if (error.status === 400) {
      return alert(
        "Erro : Ja existe um anuncio cadastrado com essa placa",
        PLACA
      );
    }
    if (error.status <= 400) {
      document.location.reload();
      return alert("Erro : verifique se todos os campos estão preenchidos. ");
    }
    if (error.status >= 500) {
      document.location.reload();
      return alert("Erro.");
    }
  }
}
