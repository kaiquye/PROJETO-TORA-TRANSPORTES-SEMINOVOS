import { getToken } from '../../adalConfig';
import { Axios } from './API'


export async function EditarAnuncio(ID_VEI, files) {
    try {
        let Anuncios = await Axios.patch('/Anuncio/adm/' + ID_VEI, files, {
            headers : {
              Authorization:  getToken() //the token is a variable which holds the token
            },
            header: {
              Accept: "application/json",
              "Content-Type": "multipart/form-data",
            }, 
        })
         if (Anuncios.data.erro === false) {
            return true;
        } else if (Anuncios.data.erro === true) {
            throw new Error('Error : server !')
        }
        return Anuncios.data.erro === false ? Anuncios.data.Objeto : false;
    } catch (error) {
        alert(error.response.data.mensagem);
        throw new Error('Error : server !')
    }
}