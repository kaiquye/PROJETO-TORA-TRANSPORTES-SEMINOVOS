import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/ContextAnuncio";
import { useParams } from "react-router-dom";
import { PreviwAnuncio } from "../PreviwAnuncio";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./style.css";
export function Recomendados() {
  useEffect(() => {
    AnunciosRecomendados(MODELO_VEI);
  }, []);

  let { AnunciosRecomendados, Recomendados } = useContext(AuthContext);

  let { MODELO_VEI } = useParams();

  return (
      <>
    <section className="section_recomendados">
      <div className="div_recomendados">
        {Recomendados && (
          <div className="recomendados">
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={125}
              totalSlides={5}
              visibleSlides={3}
            >
              <Slider>
                {Recomendados.map((anuncio, key) => (
                  <Slide index={key}>
                    <PreviwAnuncio
                      TIL_ANUNCIO_VEI={anuncio.TIL_ANUNCIO_VEI}
                      MODELO_VEI={anuncio.MODELO_VEI}
                      KM_VEI={anuncio.KM_VEI}
                      ANO_VEI={anuncio.ANO_VEI}
                      IMG_PRIN_VEI={anuncio.IMG_PRIN_VEI.data}
                      POTENCIA_VEI={anuncio.POTENCIA_VEI}
                      PRECO_VEI={anuncio.PRECO_VEI}
                      PLACA_VEI={anuncio.PLACA_VEI}
                      VEICULO_id={anuncio.VEICULO_id}
                      NEGOCIACAO_VEI={anuncio.NEGOCIACAO_VEI}
                    />
                  </Slide>
                ))}
              </Slider>
            </CarouselProvider>
          </div>
        )}
      </div>
    </section>
    <section className="section_recomendados-cell">
      <div className="div_recomendados-cell">
        {Recomendados && (
          <div className="recomendados-cell">
                {Recomendados.map((anuncio, key) => (
                    <>
                    <PreviwAnuncio
                      TIL_ANUNCIO_VEI={anuncio.TIL_ANUNCIO_VEI}
                      MODELO_VEI={anuncio.MODELO_VEI}
                      KM_VEI={anuncio.KM_VEI}
                      ANO_VEI={anuncio.ANO_VEI}
                      IMG_PRIN_VEI={anuncio.IMG_PRIN_VEI.data}
                      POTENCIA_VEI={anuncio.POTENCIA_VEI}
                      PRECO_VEI={anuncio.PRECO_VEI}
                      PLACA_VEI={anuncio.PLACA_VEI}
                      VEICULO_id={anuncio.VEICULO_id}
                      NEGOCIACAO_VEI={anuncio.NEGOCIACAO_VEI}
                    />
                    </>
                ))}
          </div>
        )}
      </div>
    </section>
    </>
  );
}
