import { Axios } from './API'

export async function BuscarAnunciosRecomendados(MODELO_VEI) {
    try {
        let Anuncios = await Axios.get('/Anuncio/recomendados/'+MODELO_VEI)
        if (Anuncios.data.erro === false) {
            return Anuncios.data.Objeto;
        } else if (Anuncios.data.erro === true) {
             alert(Anuncios.data.mensagem)
             throw new Error('Error : server !')
        }
        return Anuncios.data.erro === false ? Anuncios.data.Objeto : false;
    } catch (error) {
        console.log(error)
        throw new Error('Error : server !')
    }
}