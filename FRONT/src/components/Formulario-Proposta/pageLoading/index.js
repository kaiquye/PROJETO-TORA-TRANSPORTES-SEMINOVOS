
import gif from './mensagem.gif'

export function LoadingFormulario(){

    return(
        <div style={{width : '350px', display : 'flex', alignItems : 'center', justifyContent : 'center'}} >
            <p>Enviando proposta...</p>
            <img style={{width : '80px'}} src={gif} />
        </div>
        )
}