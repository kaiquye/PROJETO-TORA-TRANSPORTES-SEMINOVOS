import axios from "axios";
import { getToken } from "../../adalConfig";

export async function dashboardFiltro(MODELO_VEI, MARCA_VEI, PRECO_VEI, STATUS_VEI, DATA, NEGOCIACAO_VEI) {
    console.log(MODELO_VEI, MARCA_VEI, PRECO_VEI)
    try {
        let Anuncios = await axios(
        {
            method : 'POST', 
            data : {
                MODELO_VEI,
                PRECO_VEI,
                STATUS_VEI,
                MARCA_VEI,
                DATA, 
                NEGOCIACAO_VEI
            },
            headers: {
                Authorization:  getToken() //the token is a variable which holds the token
              },
            url : 'http://localhost:8010/Anuncio/dahsboard/filtro'
        })
        console.log(Anuncios)
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