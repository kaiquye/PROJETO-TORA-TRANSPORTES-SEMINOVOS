import { Axios } from './API'

export async function FiltroAnuncios(Filtro) {
    try {
        let Anuncios = await Axios.get('/Anuncio/filtro')
        if (Anuncios.data.erro === false) {
            return Anuncios.data.Objeto;
        } else if (Anuncios.data.erro === true) {
            throw new Error()
        }
        return Anuncios.data.erro === false ? Anuncios.data.Objeto : false;
    } catch (error) {
       throw new Error('Error : server !')
    }
}