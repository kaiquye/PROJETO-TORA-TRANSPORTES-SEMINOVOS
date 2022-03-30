import { getToken } from '../../adalConfig';
import { Axios } from './API'


export async function DeletarAnucio(PLACA_VEI) {
    try {
        let Anuncios = await Axios.delete('/Anuncio/'+PLACA_VEI,{
            headers: {
                Authorization:  getToken() //the token is a variable which holds the token
              }
        })
        if (Anuncios.data.erro === false) {
            return Anuncios.data.Objeto;
        } else if (Anuncios.data.erro === true) {
            throw new Error('Error : server !')
        }
        return Anuncios.data.erro === false ? Anuncios.data.Objeto : false;
    } catch (error) {
        throw new Error('Error : server !')
    }
}