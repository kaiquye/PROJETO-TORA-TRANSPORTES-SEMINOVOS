
import img from './error.png'
import './style.css'

export function PageError(props){


    return(
        <div className='erro-cadastro-proposta'>
            <h1>Ih rapaz ! </h1>
            <img style={{width : '110px'}} src={img} />
            <p>{props.msg}</p>
            <button>Voltar</button>
        </div>
    )
}