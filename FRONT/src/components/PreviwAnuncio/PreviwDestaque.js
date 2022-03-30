import './StyleDestaque.css';
import img from './distintivo.png'
export function PreviwAnuncioDestaque(props) {

    return (
        <section className='section_PreviwAnuncioDestaque' >
            <div className='imagem_PreviwAnuncioDestaque'>
                <div>
                    <img src={'data:image/jpeg;base64,' + btoa(String.fromCharCode(...new Uint32Array(props.IMG_PRIN_VEI)))} />
                </div>
            </div>
            <div className='div_informacoes_anuncioDestaque'>
                <h2> R$ {props.PRECO_VEI}</h2>
                <label className='titulo_previwAnuncioDestaque'> {props.TIL_ANUNCIO_VEI}</label> <br />
                <div>
                <label className='informacoes_previwAnuncioDestaque'> Ano : {props.ANO_VEI}</label> 
                <label className='informacoes_previwAnuncioDestaque'> KM :  {props.KM_VEI} | </label>
                <label className='informacoes_previwAnuncioDestaque'> WHP : {props.POTENCIA_VEI}</label>
                </div>
                <div  className='visitar-destaque'>
                <button>
                    Fazer proposta
                </button>
                <button>
                    Visitar
                </button>
                </div>
            </div>
        </section>
    )
}