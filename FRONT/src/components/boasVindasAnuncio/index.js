import './style.css'
import scanialogo from './image/R.png'
import IVECO from './image/iveco_.png'
import DAF from './image/DAF.png'
import VOLVO from './image/VOLVO.png'
import MERCEDES from './image/MERCA.png'
import VOLKS from './image/VOLKS.png'
import MAN from './image/MAN.png'
import Hy from './image/Hy.png'
import toyota from './image/toyota.png'
import FORD from './image/FORd.png'
import Honda from './image/HONDA.png'
import CHEV from './image/chev.png'
import CASE from './image/CASE.png'
import AGRALE from './image/AGRALE.png'
import qual from './image/4357393.png'

export function BoasVindas(props) {

    return (
        <div className='div_boasvindas_anuncio'>
            <img src={qual} style={{width : '40px'}} />
            <div className='div_mensagem_anuncio_boasvindas'>
                <div>
                    <label>{props.MARCA_VEI}</label>
                    <h1>{props.TIL_ANUNCIO_VEI}</h1>
                </div>
            </div>
            <div className='div_valor_anuncio_boasvindas'>
                <p>R$ : {props.PRECO_VEI}</p>
            </div>
        </div>
    )
}