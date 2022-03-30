import { Axios } from "./API";
import { getToken } from '../../adalConfig';

export async function CriarNovoAnuncio(imagems) {
  try {
    console.log('novo anncio' + imagems)
    let Anuncios = await Axios.post("/Anuncio",imagems, {
      headers : {
        Authorization:  getToken() //the token is a variable which holds the token
      },
      header: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      }, 
    });
    console.log('>', Anuncios.data)
    if(Anuncios.data.status === 200){
      return alert(Anuncios.response.data.mensagem)
    }
    if(Anuncios.data.erro === false){
      return Anuncios.data.mensagem;
    }else if(Anuncios.data.erro === true){
      return alert(Anuncios.data.mensagem)
    }
  } catch (error) {
    alert(error.response.data.mensagem)
    throw new Error('Erro, serve ! ')
  }
}
