import "./Style.css";
import img1 from "./black-logo.png";
import img2 from "./calendar.png";
import img3 from "./delivery-truck.png";
import img4 from "./speedometer.png";
import { useRef } from "react";
import QRCode from "qrcode.react";
export function Lateral(props) {
  let ref = useRef();

  return (
    <section className="section_lateral_anuncio">
      <div className="div_lateral_1">
        <div className="div_titulo_lateral">
          <label className="titulo_lateral">R${props.PRECO_VEI}</label>
          <label className="modelo_lateral">{props.TIL_ANUNCIO_VEI}</label>
        </div>
        <div className="informacoes_lateral">
          <label>
            <img src={img4} /> {props.KM_VEI} Km
          </label>
          <label>
            <img src={img3} /> {props.MODELO_VEI} Modelo{" "}
          </label>
          <label>
            <img src={img2} /> {props.ANO_VEI} Ano de Fabricação{" "}
          </label>
          <label>
            <img src={img3} /> {props.MARCA_VEI} Fabricante{" "}
          </label>
        </div>
      </div>
      <div className="div_lateral_2">
        <div className="imagem_lateral">
          <img style={{width : '55px'}} src={img1} />
        </div>
        <div className="div_contato_lateral">
          <label>
            Não perca tempo, entre em contato <br /> com um vendendor.
          </label>

          {props.NEGOCIACAO_VEI ? (
            <>
              <button style={{ backgroundColor: "#ff7b00" }}>
                <a
                  href={`https://web.whatsapp.com/send?phone=${props.telefone}`}
                  target="_blank"
                >
                  ENTRAR EM CONTATO
                </a>{" "}
              </button>

              <button
                style={{ backgroundColor: "#04C4D9" }}
                onClick={() => {
                  if (ref.current.style.display === "none") {
                    return (ref.current.style.display = "flex");
                  }
                  return (ref.current.style.display = "none");
                }}
              >
                IMPRIMIR QR CODE
              </button>
            </>
          ) : (
            <button
              style={{ backgroundColor: "red", color : 'white' }}
            >
              EM NEGOCIAÇÃO
            </button>
          )}
          <div className="qrcodediv" ref={ref}>
            <QRCode value="http://facebook.github.io/react/" />
          </div>
          <button style={{ backgroundColor: "#038C33" }}>
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="https://www.google.com/maps?ll=-19.926773,-44.051447&z=13&t=m&hl=pt-BR&gl=BR&mapclient=embed&cid=18035905821170752959"
              target="_blank"
            >
              LOCALIZAÇÃO
            </a>
          </button>
        </div>
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15003.775197066048!2d-44.051447!3d-19.926773!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfa4c68c939485dbf!2sTORA%20TRANSPORTES%20-%20MATRIZ!5e0!3m2!1spt-BR!2sbr!4v1646921417556!5m2!1spt-BR!2sbr" style={{border : '0px', height : '100%'}} ></iframe>
        </div>
      </div>
    </section>
  );
}
