import './Style.css'
import imagem_erro from './image/pagina-nao-encontrada.png'
export function ComponenteErro(props){

    return(
        <div className='div_error' >
            <div className='imagemError' ></div>
            <img src={imagem_erro} />
            <h1>Desculpe !</h1>
            <p>
            {props.error}
            </p>
            <button
            onClick={()=>{
                document.location.reload()
            }}>
                Recarregar
            </button>
        </div>
    )
}