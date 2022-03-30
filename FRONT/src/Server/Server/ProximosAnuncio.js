import { Axios } from './API'


export async function ProximosAnuncios(number) {
  try {
    console.log(number)
    let Anuncios = await Axios.get('/Anuncio/filtro/' + number)
    if (Anuncios.data.erro === false) {
      return Anuncios.data.Objeto ;
    } else if (Anuncios.data.erro === true) {
      return false
    }
    return Anuncios.data.erro === false ? Anuncios.data.Objeto : false;
  } catch (error) {
    throw new Error('Erro, serve ! ')
  }
}