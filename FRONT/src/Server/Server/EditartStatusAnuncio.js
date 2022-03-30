import { getToken } from '../../adalConfig';
import { Axios } from './API'


export async function EditarStatusAnuncio(VEICULO_id) {
    try {
        let Anuncios = await Axios.patch('/Anuncio/'+VEICULO_id ,
            {
                PRECO_VEI : 'Preco'
            }, 
            {
                headers : {
                    Authorization:  getToken() //the token is a variable which holds the token
            }
        })
        if(Anuncios.data.erro === false){
            return Anuncios.data.Objeto;
          }else if(Anuncios.data.erro === true){
            throw new Error('Error : server !')
          }
    } catch (error) {
        throw new Error('Error : server !')
    }
}