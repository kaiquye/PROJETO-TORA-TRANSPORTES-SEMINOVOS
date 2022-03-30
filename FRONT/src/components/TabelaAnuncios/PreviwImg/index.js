import Carousel from "react-elastic-carousel";
import { useEffect, useState } from "react";
import "./style.css";
export function SliderimgPreviw(props) {
  var imagems = new Array(props.imagem);

  const [index, setIndex] = useState(1);
  function list(Image) {
    console.log(Image);
    let imageArray = [];
    for (let i = 0; Image.length > i; i++) {
      imageArray.push(URL.createObjectURL(Image[i]));
    }
    return imageArray;
  }
  let proximo = () => {
    let ref = props.Previw.length - 1;
    if (index >= ref) {
      return setIndex(0);
    }
    return setIndex(index + 1);
  };

  return (
    <>
      <div className="img-slider-anuncio">
        <div className="img-slider-anuncio">
          {props.Previw && (
            <div className="slider-editar-anuncio">
              <img src={list(props.Previw)[index]} />
            </div>
          )}
        </div>
      </div>
      <button
        style={{ width: "100px", border: "none", marginTop: "2px" }}
        onClick={() => {
          proximo();
        }}
      >
        next
      </button>
    </>
  );
}
