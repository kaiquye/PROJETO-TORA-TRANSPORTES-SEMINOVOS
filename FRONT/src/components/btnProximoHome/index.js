import { useContext } from "react"
import { AuthContext } from "../../context/ContextHome"
import './style.css'
import next from './Next.png'


export function Proximo (){

    const {Proximo} = useContext(AuthContext)
    return(
        <div className="div_btnProximo">
            <button onClick={()=>Proximo()}>
                <img  style={{width : '30px'}} src={next} />
            </button>
        </div>
    )
}