import "./Style.css";
import ImgC from "../../components/informacoesAnuncio/image/delivery-truck.png";
import img2 from "../../components/informacoesAnuncio/image/speedometer.png";
import img3 from "../../components/informacoesAnuncio/image/posto-de-gasolina.png";
import img4 from "../../components/informacoesAnuncio/image/calendar.png";
import { Link, useNavigate } from "react-router-dom";
import money from "./money.png";
import chat from './chat (3).png'
import nego from './negociacao.png'


export function PreviwAnuncio(props) {
  const Navigate = useNavigate();

  return (
    <section className="section_PreviwAnuncio">
      {props.NEGOCIACAO_VEI ? (
        <>
          <div className="imagem_PreviwAnuncio">
            <img
              src={
                "data:image/jpeg;base64," +
                btoa(
                  String.fromCharCode(...new Uint32Array(props.IMG_PRIN_VEI))
                )
              }
            />
          </div>
          <div className="div_informacoes_anuncio">
            <h2> R$ {props.PRECO_VEI}</h2>
            <label className="titulo_previwAnuncio">
              {props.TIL_ANUNCIO_VEI}
            </label>{" "}
            <br />
            <label className="informacoes_previwAnuncio">
              <img style={{ width: "13px" }} src={img4} /> Ano : {props.ANO_VEI}
            </label>
            <label className="informacoes_previwAnuncio">
              <img style={{ width: "13px" }} src={ImgC} /> KM : {props.KM_VEI} |{" "}
            </label>{" "}
            <br />
            <label className="informacoes_previwAnuncio">
              <img style={{ width: "13px" }} src={img2} /> WHP :{" "}
              {props.POTENCIA_VEI}
            </label>
            <label className="informacoes_previwAnuncio">
              <img style={{ width: "13px" }} src={img3} /> Combustivel : Diseal{" "}
            </label>
          </div>
          {props.buttonProposta && (
            <div className="proposta-previw" >
              <button
              >
                Publicado há {props.DATA_PUBLICACAO} {props.DATA_PUBLICACAO <= 1 ? 'dia' : 'dias'}.
              </button>
            </div>
          )}
          <div className="div_button_anuncio_previw">
            <button className="button-visitar"><img src={chat} style={{width : '20px'}} />
              <Link
                className="link-visitar"
                style={{ textDecoration: "none", color: "green" }}
                to={`/proposta/`+props.MODELO_VEI+'/'+props.VEICULO_id}
                target="_blank"
              >
                Fazer proposta
              </Link>
            </button>
            <button className="enviar-proposta">
              <Link
                className="link-visitar"
                style={{ textDecoration: "none", color: "white" }}
                to={`/anuncio/${props.VEICULO_id}/${props.MODELO_VEI}`}
                target="_blank"
              >
                Visitar
              </Link>
            </button>
          </div>
        </>
      ) : (
        <>
          <div style={{ opacity: "30%" }} className="imagem_PreviwAnuncio">
            <img
              src={
                "data:image/jpeg;base64," +
                btoa(
                  String.fromCharCode(...new Uint32Array(props.IMG_PRIN_VEI))
                )
              }
            />
          </div>
          <div className="div_informacoes_anuncio">
            <h2> R$ {props.PRECO_VEI}</h2>
            <label className="titulo_previwAnuncio">
              {props.TIL_ANUNCIO_VEI}
            </label>{" "}
            <br />
            <label className="informacoes_previwAnuncio">
              <img style={{ width: "13px" }} src={img4} /> Ano : {props.ANO_VEI}
            </label>
            <label className="informacoes_previwAnuncio">
              <img style={{ width: "13px" }} src={ImgC} /> KM : {props.KM_VEI} |{" "}
            </label>{" "}
            <br />
            <label className="informacoes_previwAnuncio">
              <img style={{ width: "13px" }} src={img2} /> WHP :{" "}
              {props.POTENCIA_VEI}
            </label>
            <label className="informacoes_previwAnuncio">
              <img style={{ width: "13px" }} src={img3} /> Combustivel : Diseal{" "}
            </label>
          </div>
          {props.buttonProposta && (
            <div className="proposta-previw-em-negociacao" >
                  <div className="img-proposta2">
                    <img  src={nego} style={{width : '50px'}} />
                    <p>Em negociação</p>
                  </div>
            </div>
          )}
          <div className="div_button_anuncio_previw">
              <button style={{backgroundColor : 'white', color : 'red'}} className="button-visitar">
              <Link
                className="link-visitar"
                style={{ textDecoration: "none", color: "red" }}
                to={`/anuncio/${props.VEICULO_id}/${props.MODELO_VEI}`}
                target="_blank"
              >
                Em negociação
              </Link>
            </button>
          <button className="enviar-proposta">
              <Link
                className="link-visitar"
                style={{ textDecoration: "none", color: "white" }}
                to={`/anuncio/${props.MODELO_VEI}`}
                target="_blank"
              >
                Visitar
              </Link>
            </button>
          </div>
        </>
      )}
    </section>
  );
}
