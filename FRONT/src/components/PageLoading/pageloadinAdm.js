import './style.css'
import gif from './image/74H8.gif'
export function LoadingAdm(){
    return (
        <div className='div_PageLoading-adm'>
            <div className='loading-adm'>
                <img src={gif} />
            </div>
        </div>
    )
}