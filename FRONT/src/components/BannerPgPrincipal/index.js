import "./style.css";
import Drive from "./image/driver.png";
import sedan from "./image/sedan.png";
import caminhao from "./image/caminhao (1).png";
import backhoe from "./image/backhoe.png";
import truck from "./image/container.png";

import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/ContextHome";

import scanialogo from "../../components/FiltrosDoAnuncio/image/R.png";
import IVECO from "../../components/FiltrosDoAnuncio/image/iveco_.png";
import DAF from "../../components/FiltrosDoAnuncio/image/DAF.png";
import VOLVO from "../../components/FiltrosDoAnuncio/image/VOLVO.png";
import MERCEDES from "../../components/FiltrosDoAnuncio/image/MERCA.png";
import VOLKS from "../../components/BannerPgPrincipal/image/volks.png";
import MAN from "../../components/FiltrosDoAnuncio/image/MAN.png";
import Hy from "../../components/FiltrosDoAnuncio/image/Hy.png";
import toyota from "../../components/FiltrosDoAnuncio/image/toyota.png";
import FORD from "../../components/FiltrosDoAnuncio/image/FORd.png";
import Honda from "../../components/FiltrosDoAnuncio/image/HONDA.png";
import CHEV from "../../components/FiltrosDoAnuncio/image/chev.png";
import CASE from "../../components/FiltrosDoAnuncio/image/CASE.png";
import AGRALE from "../../components/FiltrosDoAnuncio/image/AGRALE.png";
import container from "../NavBar/black-logo.png";
import loca from "./image/mapa.png";
import vendendor from "./image/taxi.png";
import img1 from "../../components/SobreHome/imagem/maps.png";
import det from "./image/detetive.png";

export function Banner() {
  const ref_baus = useRef();
  const ref_vei = useRef();

  const [Modelo, setModelo] = useState();
  const [Data, setData] = useState();
  const [Negocaicao, setNegociacao] = useState()
  const [Marca, setMarca] = useState();

  const { Filtrar, } = useContext(AuthContext);

  const modal = function (ref, ref2) {
    if (ref.current.style.display === "none") {
      ref.current.style.display = "flex";
      return (ref2.current.style.display = "none");
    } else {
      ref2.current.style.display = "flex";
      return (ref.current.style.display = "none");
    }
  };

  return (
    <section className="section_banner_PagePrincipal">
      <div className="filtros-banner">
        <div className="btn-banner">
          <div></div>
          <div ref={ref_vei} style={{ display: "flex", width: "100%" }}>
            <button
              onClick={() =>
                Filtrar(
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  "SEDAN"
                )
              }
              className="btn-filtro-banner"
            >
              <label>Sedan</label>
            </button>
            <button
              onClick={() =>
                Filtrar(
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  "TRUCK"
                )
              }
              className="btn-filtro-banner"
            >
              <label>Truck</label>
            </button>
            <button
              onClick={() =>
                Filtrar(
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  "REBOQUE"
                )
              }
              className="btn-filtro-banner"
            >
              <label>Semi reboques</label>
            </button>
          </div>
        </div>
        <div ref={ref_baus} style={{ display: "flex", width: "100%" }}>
          <button className="btn-filtro-banner">
            <label>Quem é a Tora Seminovos</label>
          </button>
          <button className="btn-filtro-banner">
            <label>Falar com vendedor</label>
          </button>
          <button className="btn-filtro-banner">
            <label>Como chegar</label>
          </button>
        </div>
        <div className="btn-banner">
          <button
            onClick={() =>
              Filtrar(undefined, undefined, undefined, "SCANI", undefined)
            }
            className="btn-filtro-banner"
          >
            <img style={{ width: "50px" }} src={scanialogo} />
          </button>
          <button
            className="btn-filtro-banner"
            onClick={() =>
              Filtrar(undefined, undefined, undefined, "IVEC", undefined)
            }
          >
            <img style={{ width: "50px" }} src={IVECO} />
          </button>
          <button
            className="btn-filtro-banner"
            onClick={() =>
              Filtrar(undefined, undefined, undefined, "DA", undefined)
            }
          >
            <img style={{ width: "50px" }} src={DAF} />
          </button>
          <button
            className="btn-filtro-banner"
            onClick={() =>
              Filtrar(undefined, undefined, undefined, "MERCED", undefined)
            }
          >
            <img style={{ width: "50px" }} src={MERCEDES} />
          </button>
          <button
            className="btn-filtro-banner"
            onClick={() =>
              Filtrar(undefined, undefined, undefined, "VOLV", undefined)
            }
          >
            <img style={{ width: "50px" }} src={VOLVO} />
          </button>
          <button
            className="btn-filtro-banner"
            onClick={() =>
              Filtrar(undefined, undefined, undefined, "MAN", undefined)
            }
          >
            <img style={{ width: "50px" }} src={MAN} />
          </button>
        </div>
        <div className="btn-banner">
          <button
            onClick={() =>
              Filtrar(undefined, undefined, undefined, "VOLKSWA", undefined)
            }
            className="btn-filtro-banner"
          >
            <img style={{ width: "40px" }} src={VOLKS} />
          </button>
          <button
            className="btn-filtro-banner"
            onClick={() =>
              Filtrar(undefined, undefined, undefined, "toyota", undefined)
            }
          >
            <img style={{ width: "50px" }} src={toyota} />
          </button>
          <button
            className="btn-filtro-banner"
            onClick={() =>
              Filtrar(undefined, undefined, undefined, "hy", undefined)
            }
          >
            <img style={{ width: "50px" }} src={Hy} />
          </button>
          <button
            className="btn-filtro-banner"
            onClick={() =>
              Filtrar(undefined, undefined, undefined, "honda", undefined)
            }
          >
            <img style={{ width: "50px" }} src={Honda} />
          </button>
          <button
            className="btn-filtro-banner"
            onClick={() =>
              Filtrar(undefined, undefined, undefined, "CASE", undefined)
            }
          >
            <img style={{ width: "50px" }} src={CASE} />
          </button>
          <button
            className="btn-filtro-banner"
            onClick={() =>
              Filtrar(undefined, undefined, undefined, "FORD", undefined)
            }
          >
            <img style={{ width: "50px" }} src={FORD} />
          </button>
        </div>
        <div className="div-image-det-banner">
          <div className="div-filtros-banner">
            <div className="div-filtro-marca-modelo">
              <div>
                <input type="text" placeholder="MODELO" onChange={(e) => setModelo(e.target.value)} />
                <label>Modelo</label>
              </div>
              <div>
                <input type="text" placeholder="MARCA" onChange={(e) => setMarca(e.target.value)} />
                <label>Fabricante</label>
              </div>
              <div>
                <select onChange={(e) => setNegociacao(e.target.value)}>
                  <option value={3}>Situação do anuncio</option>
                  <option value={1}>Em negociação</option>
                  <option value={0} >Para venda</option>
                </select>
                <label>Situação do anuncio</label>
              </div>
              <div>
                <select onChange={(e) => setData(e.target.value)}>
                  <option value={999}>Data do anuncio</option>
                  <option value={1}>Publicado hoje</option>
                  <option value={7} >Ate 7 dias</option>
                  <option value={12} >Ate 12 dias</option>
                  <option value={24} >Ate 24 dias</option>
                  <option value={32} >Ate 32 dias</option>
                </select>
                <label>Data de publicação</label>
              </div>
              <div><button
                onClick={() => {
                  Filtrar(undefined, Modelo, undefined, Marca, undefined, undefined,  Data, Negocaicao)
                }}
              >Filtrar</button></div>
            </div>
          </div>
        </div>
      </div>
      <div className="imagem_banner_PagePrincipal"></div>
    </section>
  );
}
