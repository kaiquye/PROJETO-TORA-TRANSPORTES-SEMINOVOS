import axios from "axios";
export async function Filtro(ORDEM, MODELO_VEI, KM_VEI, MARCA_VEI, 
    PRECO_VEI, TIPO_VEI, DATA_VEI, NEGOCIACAO_VEI) {
    try {
        let Anuncios = await axios({
            method: 'POST',
            data: {
                MODELO_VEI,
                KM_VEI,
                PRECO_VEI,
                ORDEM,
                MARCA_VEI,
                TIPO_VEI,
                DATA_VEI, 
                NEGOCIACAO_VEI
            },
            url: 'http://localhost:8010/Anuncio//filtros/home'
        })
        if (Anuncios.data.erro === false) {
            return Anuncios.data.Objeto;
        } else if (Anuncios.data.erro === true) {
           throw new Error()
        }
        return Anuncios.data.erro === false ? Anuncios.data.Objeto : false;
    } catch (error) {
       throw new Error()
    }
}