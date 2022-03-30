import { PreviwAnuncioDestaque } from "../PreviwAnuncio/PreviwDestaque";
import { useContext, useEffect } from "react";
import { AuthContext as ContextHome } from "../../context/ContextHome";
import "./Style.css";

export function Destaque() {

  const { BuscarAnuncioDestque, AnuncioDestaque } = useContext(ContextHome);

  useEffect(async () => {
    await BuscarAnuncioDestque();
  }, []);

  let PreviwAnuncioDestaques = function () {
    return (
      <PreviwAnuncioDestaque
        TIL_ANUNCIO_VEI={AnuncioDestaque[0].TIL_ANUNCIO_VEI}
        MODELO_VEI={AnuncioDestaque[0].MODELO_VEI}
        KM_VEI={AnuncioDestaque[0].KM_VEI}
        ANO_VEI={AnuncioDestaque[0].ANO_VEI}
        IMG_PRIN_VEI={AnuncioDestaque[0].IMG_PRIN_VEI.data}
        POTENCIA_VEI={AnuncioDestaque[0].POTENCIA_VEI}
        PRECO_VEI={AnuncioDestaque[0].PRECO_VEI}
      />
    );
  };
  return (
    <div>
      {AnuncioDestaque && PreviwAnuncioDestaques()}
    </div>
  )
}