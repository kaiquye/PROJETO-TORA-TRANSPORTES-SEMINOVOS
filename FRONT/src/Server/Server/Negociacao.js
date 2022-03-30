
import { getToken } from '../../adalConfig';
import { Axios } from './API'

export async function EditarNegociacao(ID_VEI) {
    try {
        let Anuncios = await Axios.patch('/Anuncio/alter/negociacao/' + ID_VEI, {
            headers : {
              Authorization:  getToken() //the token is a variable which holds the token
            },
        })
        return Anuncios.data.erro === false ? Anuncios.data.Objeto : false;
    } catch (error) {
        alert(error.response.data.mensagem);
        throw new Error('Error : server !')
    }
}