import './Style.css'
import img from './camera (1).png'
export function UploadImg(props){
    return(
            <div className='divUploadImg' >
                 <input className='inputUploadImg' type="file"  multiple='multipart' onChange={(e)=>{
                     if(e.target.files.length > 10){
                        console.log(e.target.files.length)
                        return alert('passou do limte de 10 imagems')
                     }
                     return props.setImages(e.target.files)
                 }} />
            </div>
    )
}