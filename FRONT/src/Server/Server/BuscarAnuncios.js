import { getToken } from '../../adalConfig';
import { Axios } from './API'


export async function BuscarTodosAnuncios() {
    try {
        let Anuncios = await Axios.get('/Anuncio',{
            headers: {
                Authorization:  getToken() //the token is a variable which holds the token
              }
        })
        if (Anuncios.data.erro === false) {
            return Anuncios.data.Objeto;
        } else if (Anuncios.data.erro === true) {
             alert(Anuncios.data.mensagem)
             throw new Error('Error : server !')
        }
        return Anuncios.data.erro === false ? Anuncios.data.Objeto : false;
    } catch (error) {
        throw new Error('Error : server !')
    }
}