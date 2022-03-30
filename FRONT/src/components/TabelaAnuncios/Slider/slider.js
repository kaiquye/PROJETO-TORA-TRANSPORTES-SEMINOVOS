import Carousel from "react-elastic-carousel";
import { useEffect, useState } from "react";
import "./style.css";
export function Sliderimg(props) {
  var imagems = new Array(props.imagem);

  const [index, setIndex] = useState(0);

  let proximo = () => {
    let ref = props.imagem[0].length - 1;
    if (index >= ref) {
      return setIndex(0);
    }
    return setIndex(index + 1);
  };

  return (
    <div className="slider-editar-anuncio">
      {props.imagem[0] && (
        <>
          {console.log("______________________", props.imagem)}
          {props.imagem && (
            <div className="img-slider-anuncio">
              <img
                src={
                  "data:image/jpeg;base64," +
                  btoa(
                    String.fromCharCode(
                      ...new Uint32Array(props.imagem[0][index].IMAGEM_VEI.data)
                    )
                  )
                }
              />
             
            </div>
          )}
           <button
                style={{ width: "100px", color : 'white' ,backgroundColor : '#335bca' ,border: "none", marginTop: "-5px" }}
                onClick={() => {
                  proximo();
                }}
              >
                Proximo
              </button>
        </>
      )}
    </div>
  );
}
