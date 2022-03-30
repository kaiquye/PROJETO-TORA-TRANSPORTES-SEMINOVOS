import "./style.css";
import { useRef } from "react";
import img1 from "./image/lista-de-controle.png";
import logoPosto from "./image/posto-de-gasolina.png";
import suspensao from "./image/suspensao.png";
import eixo from "./image/TRACAO.png";
import diferencial from "./image/Difrencial.PNG";
import modelo from "./image/CABINE-COR.png";
import Potencia from "./image/PONTECIA.png";
import marca from "./image/MARCA.png";
import marcha from './image/MACHA.png'
import engrenagem from "./image/engrenagem.png";
import Cabine from "./image/CABINE.png";
import Data from "./image/calendar.png";
import MODELO_ from './image/MODELO.png'
import COMBUSTIVEL from './image/COMBUSTIVEL.png'
import CONSUMO from './image/CONSUMO.png'


export function Informacoes(props) {
  const ref_1 = useRef();
  const ref_2 = useRef();
  const ref_3 = useRef();
  const ref_4 = useRef();
  const ref_fabricacao = useRef();
  const ref_cabine = useRef();
  const ref_relacao = useRef();
  const ref_cor = useRef();
  const ref_eixo = useRef();
  const ref_modelo = useRef();
  const ref_marca = useRef();
  const ref_transmissao = useRef();
  const ref_tracao = useRef();
  const ref_combustivel = useRef();
  const ref_tanque = useRef();
  const ref_comsumo = useRef();
  const ref_potencia = useRef();
  const ref_torque = useRef();
  const ref_diferencial = useRef();
  const ref_suspensao = useRef();

  function modalInfo(ref_) {
    if (ref_.current.style.display === "none") {
      ref_.current.style.flexDirection = "column";
      return (ref_.current.style.display = "flex");
    }
    return (ref_.current.style.display = "none");
  }

  return (
    <section className="section_informacoes_anuncio">
      <div className="div_ficha_tecnica_anuncio">
        <div className="list_informacoes_anuncio">
      
          <div className='name_ficha_tecnica' ><h1 >FICHA TÉCNICA</h1></div>
          <ul>
          <li>
              <p>
                <button onClick={() => modalInfo(ref_modelo)}>MODELO</button>
              </p>
              <div ref={ref_modelo}>
                <img src={MODELO_} />
                <br />{" "}
                <label>
                  <label
                    style={{
                      color: "#009d44",
                      fontSize: "19px",
                      fontWeight: "500",
                    }}
                  >
                    Modelo do veiculo :
                  </label>
                  {props.MODELO_VEI || "N/A"}
                </label>
              </div>
            </li>
            <li>
              <p>
                <button onClick={() => modalInfo(ref_fabricacao)}>
                  {" "}
                  ANO DE FABRICAÇÃO{" "}
                </button>
              </p>
              <div className='teste2' style={{display : 'none'}} ref={ref_fabricacao}>
                <img src={Cabine} /> <br />
                <label>
                  <label
                    style={{
                      color: "#009d44",
                      fontSize: "19px",
                      fontWeight: "500",
                    }}
                  >
                    {" "}
                    Fabricado em :
                  </label>{" "}
                  {props.ANO_VEI || "N/A"}
                </label>
              </div>
            </li>

            <li>
              <p>
                <button onClick={() => modalInfo(ref_cor)}>COR</button>
              </p>
              <div style={{display : 'none'}} ref={ref_cor}>
                <img src={Cabine} /> <br />
                <label>
                  <label
                    style={{
                      color: "#009d44",
                      fontSize: "19px",
                      fontWeight: "500",
                    }}
                  >
                    Cor do veiculo :{" "}
                  </label>
                  {props.COR_VEI || "N/A"}
                </label>
              </div>
            </li>
            <li>
              <p>
                <button onClick={() => modalInfo(ref_cabine)}>CABINE</button>
              </p>
              <div style={{display : 'none'}} ref={ref_cabine}>
                <img src={Cabine} />
                <br />{" "}
                <label>
                  <label
                    style={{
                      color: "#009d44",
                      fontSize: "19px",
                      fontWeight: "500",
                    }}
                  >
                    Tipo da cabine :{" "}
                  </label>
                  {props.CABINE_VEI || "N/A"}
                </label>
              </div>
            </li>
            
            <li>
              <p>
                <button onClick={() => modalInfo(ref_marca)}>MARCA</button>
              </p>
              <div style={{display : 'none'}} ref={ref_marca}>
                <img src={marca} />
                <br />{" "}
                <label>
                  <label
                    style={{
                      color: "#009d44",
                      fontSize: "19px",
                      fontWeight: "500",
                    }}
                  >
                    Fabricante do veiculo:{" "}
                  </label>
                  {props.MARCA_VEI || "N/A"}
                </label>
              </div>
            </li>
            <li>
              <p>
                <button onClick={() => modalInfo(ref_transmissao)}>
                  TRANSMISSÃO
                </button>{" "}
              </p>
              <div style={{display : 'none'}} ref={ref_transmissao}>
                <img src={marcha} />
                <br />{" "}
                <label>
                  <label
                    style={{
                      color: "#009d44",
                      fontSize: "19px",
                      fontWeight: "500",
                    }}
                  >
                    {" "}
                    Câmbio :{" "}
                  </label>{" "}
                  N/D{" "}
                </label>
              </div>
            </li>
            <li>
              <p>
                <button onClick={() => modalInfo(ref_tracao)}>TRAÇÃO</button>
              </p>
              <div style={{display : 'none'}} ref={ref_tracao}>
                <img src={eixo} />
                <br />{" "}
                <label>
                  <label
                    style={{
                      color: "#009d44",
                      fontSize: "19px",
                      fontWeight: "500",
                    }}
                  >
                    {" "}
                    Tração :{" "}
                  </label>{" "}
                  N/D | Marchas : N/D{" "}
                </label>
              </div>
            </li>
            <li>
              <p>
                <button onClick={() => modalInfo(ref_combustivel)}>
                  COMBUSTIVEL
                </button>
              </p>
              <div style={{display : 'none'}} ref={ref_combustivel}>
                <img src={CONSUMO} />
                <br />{" "}
                <label>
                  <label
                    style={{
                      color: "#009d44",
                      fontSize: "19px",
                      fontWeight: "500",
                    }}
                  >
                    {" "}
                    Tipo de Combustivel :{" "}
                  </label>{" "}
                  Diseal
                </label>
              </div>
            </li>
            <li>
              <p>
                <button onClick={() => modalInfo(ref_tanque)}>
                  TANQUE DE COMBUSTIVEL
                </button>
              </p>
              <div style={{display : 'none'}} ref={ref_tanque}>
                <img src={COMBUSTIVEL} />
                <br />{" "}
                <label>
                  <label
                    style={{
                      color: "#009d44",
                      fontSize: "19px",
                      fontWeight: "500",
                    }}
                  >
                    {" "}
                    Capacidade do tanque :{" "}
                  </label>
                  {props.CAP_COMBUSTIVEL_VEI || "N/A"}{" "}
                </label>
              </div>
            </li>
          </ul>
        </div>
        <div className="list_informacoes_anuncio">
          <ul>
            <li>
              <p>
                <button onClick={() => modalInfo(ref_comsumo)}>COMSUMO</button>
              </p>
              <div  ref={ref_comsumo}>
                <img src={Potencia} />
                <br />{" "}
                <label>
                  <label
                    style={{
                      color: "#009d44",
                      fontSize: "19px",
                      fontWeight: "500",
                    }}
                  >
                    {" "}
                    Comsumo :{" "}
                  </label>{" "}
                  N/D | Urbano : N/D | Rodovia : N/D | Autonomia : N/D{" "}
                </label>
              </div>
            </li>
            <li>
              <p>
                <button onClick={() => modalInfo(ref_potencia)}>
                  POTENCIA
                </button>
              </p>
              <div style={{display : 'none'}} ref={ref_potencia}>
                <img src={Potencia} />
                <br />{" "}
                <label>
                  <label
                    style={{
                      color: "#009d44",
                      fontSize: "19px",
                      fontWeight: "500",
                    }}
                  >
                    Portencia do veiculo :{" "}
                  </label>
                  {props.POTENCIA_VEI + "CV" || "N/A"}
                </label>
              </div>
            </li>
            <li>
              <p>
                <button onClick={() => modalInfo(ref_torque)}>TORQUE</button>
              </p>
              <div style={{display : 'none'}} ref={ref_torque}>
                <img src={eixo} />
                <br />{" "}
                <label>
                  <label
                    style={{
                      color: "#009d44",
                      fontSize: "19px",
                      fontWeight: "500",
                    }}
                  >
                    Torque :
                  </label>
                  {props.TORQUE_VEI || "N/A"}
                </label>
              </div>
            </li>
            <li>
              <p>
                <button onClick={() => modalInfo(ref_diferencial)}>
                  DIFERENCIAL
                </button>
              </p>
              <div style={{display : 'none'}} ref={ref_diferencial}>
                <img src={diferencial} />
                <br />{" "}
                <label>
                  <label
                    style={{
                      color: "#009d44",
                      fontSize: "19px",
                      fontWeight: "500",
                    }}
                  >
                    Relacao do diferencial :
                  </label>
                  {props.REL_DIFERENCIAL_VEI || "N/A"} <br />{" "}
                  <label
                    style={{
                      color: "#009d44",
                      fontSize: "19px",
                      fontWeight: "500",
                    }}
                  >
                    {" "}
                    Coroa/Pinhão :
                  </label>{" "}
                </label>
              </div>
            </li>
            <li>
              <p>
                <button onClick={() => modalInfo(ref_suspensao)}>
                  SUSPENSÃO
                </button>
              </p>
              <div style={{display : 'none'}} ref={ref_suspensao}>
                <img src={suspensao} />
                <br />{" "}
                <label>
                  <label
                    style={{
                      color: "#009d44",
                      fontSize: "19px",
                      fontWeight: "500",
                    }}
                  >
                    Tipo da suspensão :
                  </label>
                  {props.TIP_SUSPENSAO_VEI || "N/A"}
                </label>
              </div>
            </li>
            <li>
              <p>
                <button onClick={() => modalInfo(ref_eixo)}>EIXO</button>
              </p>
              <div style={{display : 'none'}} ref={ref_eixo}>
                <img src={eixo} />
                <br />{" "}
                <label>
                  <label
                    style={{
                      color: "#009d44",
                      fontSize: "19px",
                      fontWeight: "500",
                    }}
                  >
                    Entre Eixos :
                  </label>
                  {props.ENT_EIXO_VEI || "N/A"}
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="div_informacoes_mais">
        <div>
          <h1 style={{ color: "#009d44" }}>Opcionais : </h1>
          <label>{props.OPC_VEI}</label>
        </div>
        <div>
          <h1 style={{ color: "#009d44" }}>Informações complementares : </h1>
          <label>{props.OBS_VEI}</label>
        </div>
      </div>
    </section>
  );
}
