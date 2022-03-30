import { getToken } from '../../adalConfig';
import { Axios } from './API'

export async function BuscarQtsAnuncios() {
    try {
        let Anuncios = await Axios.get('/Anuncio/informacoes/anuncios',{
            headers: {
                Authorization:  getToken() //the token is a variable which holds the token
              }
        })
        console.log('teste',Anuncios)
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