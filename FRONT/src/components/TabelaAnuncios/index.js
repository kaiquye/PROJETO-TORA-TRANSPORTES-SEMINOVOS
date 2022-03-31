import { AuthContext } from "../../context/ContextAdm";
import { useContext, useEffect, useState, useRef } from "react";
import { UploadImgF } from "./input/index";
import imagem_cam from "./campanha.png";
import { Link } from "react-router-dom";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import mensagem from "./enviar-mensagem.png";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Sliderimg } from "./Slider/slider";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { Filtros } from "./FiltroDahs";
import img from "./imagem/check.png";
import img_edit from "./imagem/editar.png";
import editar from "./imagem/botao-editar.png";
import definicoes from "./imagem/definicoes.png";
import lupa from "./imagem/lupa.png";
import adm from "./imagem/administrador.png";
import adm2 from "./imagem/administrador (1).png";
import fechar from "./imagem/fechar.png";
import { PreviwImg } from "../SliderPreviwImg";
import { SliderimgPreviw } from "./PreviwImg";
import { ErroAdm } from "../ErrorBoundary/ErroAdm";
import { LoadingAdm } from "../PageLoading/pageloadinAdm";
import { Dahsboard } from "./Dahs";
import img_ from "../SobreHome/imagem/bullitouren-oliverraatz-png--81224-.jpg";
import { ListMsg } from "./getListMsg";
import { ListaPropostas } from "./listaProposta";

export function TabelaAnuncios(props) {
  const ref = useRef();
  const ref2 = useRef();
  const ref_list = useRef();
  const ref_propostasDb = useRef();
  const ref_propostasSocket = useRef();

  const {
    BuscarTodosanuncios,
    teste,
    Loading,
    imagem,
    anuncios,
    ApagarAnuncio,
    EditarStatus,
    Negociacao,
    BuscarAnuncio,
    Salvar,
    filtroDahs,
    Buscar_Imagem,
    error,
    QtsAnuncios,
    BuscarInformacoes,
    getListMsg,
    message,
    listProposta,
    delChat,
    BuscarTodosMensagens,
    buscarTodasPropostasDb,
    SelecionarSala,
  } = useContext(AuthContext);
  const [placa, setPlaca] = useState();
  const [id, setId] = useState();
  const [Km, setKm] = useState();
  const [Obs, setObs] = useState();
  const [Opcionais, setOpicionais] = useState();
  const [Preco, setPreco] = useState();
  const [Potencia, setPotencia] = useState();
  const [Diferencial, setDiferencial] = useState();
  const [Suspensao, setSuspensao] = useState();
  const [Torque, setTorque] = useState();
  const [Titulo, setTitulo] = useState();
  const [Cabine, setCabine] = useState();
  const [Eixo, setEixo] = useState();
  const [Combustivel, setCombustivel] = useState();
  const [Tipo, setTipo] = useState();
  const [Fabricante, setFabricante] = useState();
  const [image, setImages] = useState();
  const [Modelo, setModelo] = useState();
  const [Ano, setAno] = useState();
  const [Cor, setCor] = useState();
  const [proposta, setPropostas] = useState();
  const Navigate = useNavigate();

  useEffect(() => {
    BuscarTodosanuncios();
  }, []);

  useEffect(() => {
    BuscarInformacoes();
  }, [anuncios]);

  return (
    <div className="div-anuncios-table">
      <div className="background">
        <div className="mensagem-listadeanuncios">
          <h1>PAINEL DE ADMINISTRADORES</h1>
        </div>
        <div className="wallpaper_adm"></div>
        <div className='button-propotas' >
          <button
            onClick={() => {
              BuscarTodosMensagens(setPropostas);
              ref_propostasDb.current.style.display = "none";
              ref_propostasSocket.current.style.display = "flex";
            }}
          >
            ULTIMAS PROPOSTAS
          </button>
          <button
            onClick={() => {
              ref_propostasDb.current.style.display = "flex";
              ref_propostasSocket.current.style.display = "none";
              buscarTodasPropostasDb(setPropostas);
            }}
          >
            TODAS PROPOSTAS
          </button>
        </div>
        <div ref={ref_propostasSocket} className="listas-proposta">
          <div className="mensagem-ps">
            <p>Suas ultimas propostas</p>
          </div>
          <ListaPropostas listProposta={proposta} />
        </div>
        <div
          ref={ref_propostasDb}
          style={{ display: "none" }}
          className="listas-proposta"
        >
          <div className="mensagem-ps">
            <p>Todas propostas</p>
          </div>
          <ListaPropostas listProposta={proposta} />
        </div>
        <Dahsboard Qts={QtsAnuncios.qts} />
        <div className="buscarporplaca-adm">
          <input
            type={"text"}
            placeholder="Ex : KHE-4322"
            onChange={(e) => setPlaca(e.target.value)}
          />
          <button
            onClick={() => {
              if (placa < 1) {
                return BuscarTodosanuncios();
              }
              BuscarAnuncio(placa);
            }}
          >
            <img style={{ width: "13px" }} src={lupa} /> BUSCAR PELA PLACA
          </button>
        </div>

        {error.status ? (
          <ErroAdm error={error.menssage} />
        ) : (
          <section className="main-table">
            <div className="titulo-tabela">
              <div>
                <p>FILTROS</p>
              </div>
              <div>
                <p>Ngc</p>
              </div>
              <div>
                <p>Status</p>
              </div>
              <div>
                <p>ID</p>
              </div>
              <div>
                <p>Anuncio</p>
              </div>
              <div>
                <p>Proprietario</p>
              </div>
              <div>
                <p>Preço</p>
              </div>
              <div>
                <p>Modelo</p>
              </div>
              <div>
                <p>Ação</p>
              </div>
            </div>
            <div className="div-main-table">
              {QtsAnuncios && console.log("anuncios", QtsAnuncios)}
              <Filtros Filtro={filtroDahs} />
              <div className="div-table">
                {Loading ? (
                  <LoadingAdm />
                ) : (
                  <>
                    <table>
                      {anuncios && (
                        <>
                          <thead className="menu-table">
                            <tr className="til-fixed">
                              <th style={{ width: "70px" }}>Negociaçâo</th>
                              <th style={{ width: "10px" }}>STATUS</th>
                              <th>ID</th>
                              <th>Anuncio</th>
                              <th style={{ width: "500px" }}>Proprietario</th>
                              <th style={{ width: "100px" }}>Preco</th>
                              <th style={{ width: "100px" }}>Modelo</th>
                              <th style={{ width: "100px" }}>Ação</th>
                            </tr>
                          </thead>
                          <tbody>
                            {anuncios.map((anuncio, key) => (
                              <tr className={key % 2 ? "teste" : "teste2"}>
                                <td>
                                  <img
                                    src={imagem_cam}
                                    style={{ width: "18px" }}
                                  />
                                  <input
                                    type="checkbox"
                                    onChange={(e) => {
                                      Negociacao(anuncio.VEICULO_id);
                                    }}
                                    checked={
                                      anuncio.NEGOCIACAO_VEI ? false : true
                                    }
                                    value={
                                      anuncio.NEGOCIACAO_VEI ? true : false
                                    }
                                  />
                                  {anuncio.NEGOCIACAO_VEI ? (
                                    <label>NGC</label>
                                  ) : (
                                    ""
                                  )}
                                </td>
                                <td>
                                  <input
                                    type="checkbox"
                                    onChange={(e) =>
                                      EditarStatus(anuncio.VEICULO_id)
                                    }
                                    checked={anuncio.STATUS_VEI ? true : false}
                                    value={anuncio.STATUS_VEI ? true : false}
                                  />
                                </td>
                                <td className="id_anuncio">{anuncio.id}</td>
                                <td
                                  style={{ width: "300px", marginLeft: "25px" }}
                                  className="til_anuncio"
                                >
                                  <Link
                                    style={{
                                      width: "300px",
                                      marginLeft: "15px",
                                    }}
                                    to={`/anuncio/${anuncio.VEICULO_id}/${anuncio.MODELO_VEI}`}
                                    target="_blank"
                                  >
                                    {anuncio.TIL_ANUNCIO_VEI}
                                  </Link>
                                </td>
                                <td>{anuncio.PROPRIETARIO_VEI}</td>
                                <td>{anuncio.PRECO_VEI}</td>
                                <td>{anuncio.MODELO_VEI}</td>
                                <td className="btn-editar-table">
                                  <div>
                                    <button
                                      onClick={() => {
                                        alert("button", anuncio.VEICULO_id);
                                        setModelo(anuncio.MODELO_VEI);
                                        setId(anuncio.VEICULO_id);
                                        getListMsg(anuncio.VEICULO_id);
                                        ref_list.current.style.display = "flex";
                                      }}
                                    >
                                      <img
                                        src={mensagem}
                                        style={{ width: "22px" }}
                                      />
                                    </button>
                                  </div>

                                  <button
                                    onClick={async () => {
                                      //abilitar e desativar modal
                                      setId(anuncio.VEICULO_id);
                                      setCor(anuncio.COR_VEI);
                                      setAno(anuncio.ANO_VEI);
                                      setPlaca(anuncio.PLACA_VEI);
                                      setCabine(anuncio.CABINE_VEI);
                                      setCombustivel(
                                        anuncio.CAP_COMBUSTIVEL_VEI
                                      );
                                      setDiferencial(
                                        anuncio.REL_DIFERENCIAL_VEI
                                      );
                                      setEixo(anuncio.ENT_EIXO_VEI);
                                      setKm(anuncio.KM_VEI);
                                      setObs(anuncio.OBS_VEI);
                                      setOpicionais(anuncio.OPC_VEI);
                                      setPotencia(anuncio.POTENCIA_VEI);
                                      setTorque(anuncio.TORQUE_VEI);
                                      setTitulo(anuncio.TIL_ANUNCIO_VEI);
                                      setSuspensao(anuncio.TIP_SUSPENSAO_VEI);
                                      setPreco(anuncio.PRECO_VEI);
                                      setTipo(anuncio.TIPO_VEI);
                                      setFabricante(anuncio.MARCA_VEI);
                                      Buscar_Imagem(anuncio.VEICULO_id);
                                      setModelo(anuncio.MODELO_VEI);
                                      alert(anuncio.MARCA_VEI);
                                      if (
                                        ref.current.style.display === "none"
                                      ) {
                                        ref.current.style.display = "flex";
                                      }
                                    }}
                                  >
                                    <img
                                      style={{ width: "15px" }}
                                      src={img_edit}
                                    />
                                  </button>
                                  <button
                                    style={{ paddingLeft: "20px" }}
                                    onClick={() =>
                                      ApagarAnuncio(anuncio.PLACA_VEI)
                                    }
                                  >
                                    x
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </>
                      )}
                    </table>
                  </>
                )}
              </div>
            </div>
          </section>
        )}

        <div
          ref={ref}
          style={{ display: "none" }}
          className="modal-editar-anuncio"
        >
          <div className="btn_fecha">
            <button className="minimizar">-</button>
            <button
              style={{ backgroundColor: "red", paddingBottom: "1px" }}
              onClick={() => {
                if (window.confirm("Deseja cancelar ? ")) {
                  document.location.reload();
                }
                ref.current.style.display = "none";
              }}
            >
              X
            </button>
          </div>

          <div className="formulario-editar-anuncio">
            <h1>Editar Anuncio</h1>
            <div className="div-slider-imagem-editar">
              {image ? (
                <SliderimgPreviw Previw={image} />
              ) : (
                imagem && <Sliderimg imagem={imagem} />
              )}
            </div>
            <div className="input-upload">
              <input
                id="input-edit"
                type="file"
                multiple="multipart"
                onChange={(e) => {
                  if (e.target.files.length > 10) {
                    console.log(e.target.files.length);
                    return alert("passou do limte de 10 imagems");
                  }
                  return setImages(e.target.files);
                }}
              />
            </div>
            <div>
              <label>Placa :</label>
              <input type="text" placeholder="Ex : HGE-7531" value={placa} />
            </div>
            <div>
              <label>Indentificação</label>
              <input type={"text"} value={id} />
            </div>
            <div>
              <label>Titulo :</label>
              <input
                type="text"
                placeholder={Titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </div>
            <div>
              <label>Tipo :</label>
              <select onChange={(e) => setTipo(e.target.value)}>
                <option>{Tipo !== undefined ? Tipo : "Não definido."}</option>
                <option value={"truck"}>TRUCK</option>
                <option value={"SEDAN"}>SEDAN</option>
                <option value={"SEMIREBOQUE"}>SEMI REBOQUE</option>
              </select>
            </div>
            <div>
              <label>Cor :</label>
              <input
                type="text"
                placeholder={Cor}
                onChange={(e) => setCor(e.target.value)}
              />
            </div>
            <div>
              <label>Ano de Fabricação :</label>
              <input
                type="text"
                placeholder={Ano}
                onChange={(e) => setAno(e.target.value)}
              />
            </div>
            <div>
              <label>Cabine :</label>
              <input
                type="text"
                placeholder={Cabine}
                onChange={(e) => setCabine(e.target.value)}
              />
            </div>
            <div>
              <label>Capacidade de Combustivel :</label>
              <input
                type="text"
                placeholder={Combustivel}
                onChange={(e) => setCombustivel(e.target.value)}
              />
            </div>
            <div>
              <label>Preco :</label>
              <input
                type="text"
                placeholder={Preco}
                onChange={(e) => setPreco(e.target.value)}
              />
            </div>
            <div>
              <label>Km :</label>
              <input
                type="text"
                placeholder={Km}
                onChange={(e) => setKm(e.target.value)}
              />
            </div>
            <div>
              <label>Fabricante :</label>
              <select onChange={(e) => setFabricante(e.target.value)}>
                <option>{Fabricante}</option>
                <option value={"SCANIA"}>SCANIA</option>
                <option value={"VOLVO"}>VOLVO</option>
                <option value={"DAF"}>DAF</option>
                <option value={"IVECO"}>IVECO</option>
                <option value={"MAN"}>MAN</option>
                <option value={"FORD"}>FORD</option>
                <option value={"TOYOTA"}>TOYOTA</option>
                <option value={"VOLKSWAGEM"}>VOLKSWAGEM</option>
                <option value={"MERCEDES-BENZ"}>MERCEDES-BENZ</option>
              </select>
            </div>
            <div>
              <label>Entre eixos :</label>
              <input
                type="text"
                placeholder={Eixo}
                onChange={(e) => setEixo(e.target.value)}
              />
            </div>
            <div>
              <label>Potencia :</label>
              <input
                type="text"
                placeholder={Potencia}
                onChange={(e) => setPotencia(e.target.value)}
              />
            </div>
            <div>
              <label>Modelo :</label>
              <input
                type="text"
                placeholder={Modelo}
                onChange={(e) => setModelo(e.target.value)}
              />
            </div>
            <div>
              <label>Rel Diferencial :</label>
              <input
                type="text"
                placeholder={Diferencial}
                onChange={(e) => setDiferencial(e.target.value)}
              />
            </div>
            <div>
              <label>Tip Suspensão :</label>
              <input
                type="text"
                placeholder={Suspensao}
                onChange={(e) => setSuspensao(e.target.value)}
              />
            </div>
            <div>
              <label>Torque :</label>
              <input
                type="text"
                placeholder={Torque}
                onChange={(e) => setTorque(e.target.value)}
              />
            </div>
            <div>
              <label>Opcionais :</label>
              <textarea
                placeholder={Opcionais}
                onChange={(e) => setOpicionais(e.target.value)}
                style={{
                  width: "auto",
                  height: "200px",
                  marginTop: "10px",
                }}
              />
            </div>
            <div>
              <label>observação :</label>
              <textarea
                placeholder={Obs}
                onChange={(e) => setObs(e.target.value)}
                style={{
                  width: "auto",
                  height: "200px",
                  marginBottom: "20px",
                }}
              />
            </div>
            <div
              style={{ display: "flex", flexDirection: "row" }}
              className="div-button-form-anuncio"
            >
              <button
                onClick={async () => {
                  alert("Anuncio editado com sucesso");
                  await Salvar(
                    Cor,
                    Ano,
                    id,
                    Km,
                    Opcionais,
                    Preco,
                    Potencia,
                    Diferencial,
                    Suspensao,
                    Torque,
                    Combustivel,
                    Eixo,
                    Titulo,
                    Cabine,
                    Tipo,
                    Fabricante,
                    Modelo,
                    image
                  );
                }}
              >
                <img style={{ width: "15px" }} src={img_edit} /> Salvar tudo
              </button>
            </div>
          </div>
        </div>
        <div
          className="modal-mensagens"
          style={{ display: "none" }}
          ref={ref_list}
        >
          <div className="div-buttons-msg">
            <button
              className="minize-btn-msg"
              onClick={() => {
                ref_list.current.style.display = "none";
              }}
            >
              -
            </button>
            <button
              className="fechar-btn-msg"
              onClick={() => {
                document.location.reload();
              }}
            >
              X
            </button>
          </div>
          <ListMsg
            getListMsg={getListMsg}
            modelo={Modelo}
            id={id}
            message={message}
            delChat={delChat}
          />
        </div>
      </div>
      <div className="divnovoanuncio">
        <button
          className="novoanuncio1"
          onClick={() => {
            Navigate("/novoanuncio");
            window.scrollTo(0, 0);
            document.location.reload();
          }}
        >
          CADASTRAR NOVO ANUNCIO
        </button>
        <button
          className="novoanuncio2"
          onClick={() => {
            Navigate("/home");
            window.scrollTo(0, 0);
          }}
        >
          VOLTAR
        </button>
      </div>
    </div>
  );
}
