import './Style.css'
import imagem_erro from './image/erro-404.png'
export function ErroAdm(props){

    return(
        <div className='div_error' >
            <div className='imagemError' ></div>
            <img style={{width : '100px'}} src={imagem_erro} />
            <h1>Ops !</h1>
            <p>
            {props.error}
            </p>
            <div>
            <button
            onClick={()=>{
                document.location.reload()
            }}>
                Recarregar
            </button>
            <button style={{backgroundColor : '#1b203d'}}
            onClick={()=>{
                document.location.reload()
            }}>
                Enviar e-mail
            </button>
            </div>
        </div>
    )
}