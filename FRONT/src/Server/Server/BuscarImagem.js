import { Axios } from './API'

export async function Buscar(id) {
    try {
        let Anuncios = await Axios.get('/Anuncio/imagem/adm/anuncio/'+id)
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