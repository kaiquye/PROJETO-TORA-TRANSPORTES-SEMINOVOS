import img  from './img.png'
import face  from './FACE.png'
import LIGAR  from './LIGAR.png'
import './style.css'

export let ButtonContato = () => {
    return (
        <div className='entrar-contato-static'>
            <div className='btns'>
            <button>
                <img style={{width : '50px'}} src={img} />
            </button>
             <button>
                <img style={{width : '50px'}} src={face} />
            </button>
            <button>
                <img style={{width : '50px'}} src={LIGAR} />
            </button>
            </div>
        </div>
    )
}