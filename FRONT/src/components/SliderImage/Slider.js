import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Style.css";
import { useRef, useState } from "react";
import esquerda from './img/divisa-esquerda.png'
import direita from './img/divisa-direita.png'
export function Slider(props) {
  return (
    <div className="div-main-slider">
      <div className="slider_image">
        <Carousel transitionTime={712} className="caroulse">
          {props.imagems.map((image) => (
            <div>
              <img
                className="imgslider"
                src={
                  "data:image/jpeg;base64," +
                  btoa(
                    String.fromCharCode(
                      ...new Uint32Array(image.IMAGEM_VEI.data)
                    )
                  )
                }
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
export function Slider_teste(props) {
let ref_img = useRef()
  const [index, setIndex] = useState(0);
  let proximo = () => {
    console.log(index);
    let ref = props.imagems.length - 1;
    console.log(ref);
    if (index >= ref) {
      return setIndex(0);
    }
    return setIndex(index + 1);
  };

  return (
    <div className="slider-desk">
      <div className="slider-editar-anuncio-desk">
        {props.imagems[0] && (
          <>
            {props.imagems && (
                <div className="img-slider-anuncio-desk">
                <div className='btn-proximo1'>
                <button onClick={() => proximo()}><img style={{width : '30px'}} src={esquerda} /></button>
                </div>
                <div className='div-img-anuncio'>
                  <img 
                    src={
                      "data:image/jpeg;base64," +
                      btoa(
                        String.fromCharCode(
                          ...new Uint32Array(
                            props.imagems[index].IMAGEM_VEI.data
                          )
                        )
                      )
                    }
                  />
                </div>
                <div className='btn-proximo2'>
                <button onClick={() => proximo()}>
                  <img style={{width : '30px'}}  src={direita}/>
                </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
