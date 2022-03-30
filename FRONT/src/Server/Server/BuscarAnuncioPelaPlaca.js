import { Axios } from './API'
import { getToken } from '../../adalConfig';

export async function BuscarAnuncioPelaPlaca(VEICULO_id) {
    try {
        let Anuncios = await Axios.get('/Anuncio/'+VEICULO_id,{
            headers: {
                Authorization:  getToken() //the token is a variable which holds the token
            }  
        })
        if (Anuncios.data.erro === false) {
            return  Anuncios.data.Objeto;
        } else if (Anuncios.data.erro === true) {
            return alert(Anuncios.data.mensagem)
        }
        return Anuncios.data.erro === false ? Anuncios.data.Objeto : false;
    } catch (error) {
        throw new Error('Error : server !')
    }
}
