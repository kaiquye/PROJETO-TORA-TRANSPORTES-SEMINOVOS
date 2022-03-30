import './style.css'
import gif from './image/truck.gif'
export function PageLoading(){
    return (
        <div className='div_PageLoading'>
            <div>
                <img src={gif} />
            </div>
        </div>
    )
}