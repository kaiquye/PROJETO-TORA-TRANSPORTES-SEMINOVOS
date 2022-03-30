import { PreviwAnuncio } from "../PreviwAnuncio/index";
import { useContext, useEffect } from "react";
import { AuthContext as ContextHome } from "../../context/ContextHome";
import "./Style.css";

export function ListaAnuncios() {
  const { BuscarAnuncios, FiltrarAnuncios, Anuncios, loading } =
    useContext(ContextHome);

  useEffect(async () => {
    await BuscarAnuncios();
  }, []);

  let PreviwAnuncios = function () {
    return (
      <>
        {Anuncios.map((anuncio) => (
          <div>
            {console.log(anuncio)}
            <PreviwAnuncio
              NEGOCIACAO_VEI={anuncio.NEGOCIACAO_VEI}
              TIL_ANUNCIO_VEI={anuncio.TIL_ANUNCIO_VEI.toUpperCase()}
              MODELO_VEI={anuncio.MODELO_VEI}
              KM_VEI={anuncio.KM_VEI}
              ANO_VEI={anuncio.ANO_VEI}
              IMG_PRIN_VEI={anuncio.IMG_PRIN_VEI.data}
              POTENCIA_VEI={anuncio.POTENCIA_VEI}
              PRECO_VEI={anuncio.PRECO_VEI}
              PLACA_VEI={anuncio.PLACA_VEI}
              VEICULO_id={anuncio.VEICULO_id}
              buttonProposta={true}
              DATA_PUBLICACAO={anuncio.DATA_PUBLICACAO}
            />
          </div>
        ))}
      </>
    );
  };

  return (
    <main>
      <h1 style={{color:'#e2550365'}} >Nossos classificados</h1>
      <section className="section_ListaDeAnuncios">
        {Anuncios && PreviwAnuncios()}
      </section>
    </main>
  );
}
