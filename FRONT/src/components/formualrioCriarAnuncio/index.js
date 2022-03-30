import "./style.css";
import { useReducer, useRef, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/ContextAdm";
import { UploadImg } from "./uploadImg";
import { PreviwImg } from "../SliderPreviwImg";
import { UploadImageMessage } from "../mensagemImg";
import { useNavigate } from "react-router-dom";
import { PageLoading } from "../PageLoading/PageLoading";
import "./style.css";
import lupa from "./uploadImg/lupa.png";
import imgs from "../informacoesAnuncio/image/delivery-truck.png";
import adm from '../../components/TabelaAnuncios/imagem/formulario-de-contato.png'
import save from '../../components/TabelaAnuncios/imagem/salve-.png'

export function Formulario() {
  const { NovoAnuncio, ValidarCampos, BuscarInformacoes_sit, Loading } =
    useContext(AuthContext);

  const Navigate = useNavigate();
  const [Proprietario, setProprietario] = useState();
  const [Placa, setPlaca] = useState();
  const [Chassi, setChassi] = useState();
  const [Telefone, setTelefone] = useState();
  const [Ano, setAno] = useState();
  const [Cor, setCor] = useState();
  const [Modelo, setModelo] = useState();
  const [Crv, setCrv] = useState();
  const [Renavam, setRenavam] = useState();
  const [Obs, setObs] = useState();
  const [Preco, setPreco] = useState();
  const [Potencia, setPotencia] = useState();
  const [Torque, setTorque] = useState();
  const [Km, setKm] = useState();
  const [Cabine, setCabine] = useState();
  const [Diferencial, setDiferencial] = useState();
  const [Suspensao, setSuspensao] = useState();
  const [Eixo, setEixo] = useState();
  const [Combustivel, setCombustivel] = useState();
  const [Opc, setOpc] = useState();
  const [Titulo, setTitulo] = useState();
  const [imagems, setImagems] = useState();
  const [Informacoes, setInformacoes] = useState();
  const [Fabricante, setFabricante] = useState();
  const [Tipo, setTipo] = useState()
  const [Autonomia, setAutonima] = useState()

  let ref_placa = useRef(null);
  let ref_cabine = useRef(null);
  let ref_combustivel = useRef(null);
  let ref_diferencial = useRef(null);
  let ref_potencia = useRef(null);
  let ref_telefone = useRef(null);
  let ref_titulo = useRef(null);
  let ref_torque = useRef(null);
  let ref_preco = useRef(null);
  let ref_km = useRef(null);
  let ref_modal = useRef(null);
  let ref_eixo = useRef(null);
  let ref_fabricante = useRef(null);
  let ref_cor = useRef(null);
  let ref_proprietario = useRef(null);
  let ref_Ano = useRef(null);
  let ref_Chassi = useRef(null);
  let ref_Modelo = useRef(null);
  let ref_Crv = useRef(null);
  let ref_renavam = useRef(null);
  let ref_infos = useRef(null);
  let ref_tipo = useRef(null);
  let ref_fabricante1 = useRef(null)
  let ref_fabricante2 = useRef(null)
  let ref_btn = useRef(null)
  let ref_msg = useRef(null)

  return (
    <>
      <section>
        {imagems ? <PreviwImg Previw={imagems} /> : <UploadImageMessage />}
      </section>

      <section className="section-formulario-novo-anuncio">
        <section className="section-upload-novo-anuncio">
          <div>
            <UploadImg setImages={setImagems} />
          </div>
        </section>
        <section className="section-body-formulario">
          <div className="mensagem-novo-anuncio">
            <h1>CADASTRAR UM NOVO ANUNCIO</h1>
          </div>
          <form
            ref={ref_modal}
            className="formulario-cadastro-novo-veiculo"
            onSubmit={(e) =>
                    NovoAnuncio(
                      e,
                      Proprietario,
                      Telefone,
                      Placa,
                      Chassi,
                      Ano,
                      Cor,
                      Modelo,
                      Crv,
                      Renavam,
                      Obs,
                      Preco,
                      Potencia,
                      Torque,
                      Km,
                      Cabine,
                      Diferencial,
                      Suspensao,
                      Eixo,
                      Combustivel,
                      Opc,
                      Titulo,
                      Informacoes,
                      imagems,
                      Fabricante,
                      Tipo
                    )
            }
          >
            {Loading ? (
              <PageLoading />
            ) : (
              <section className="section-campos-form">
                <div className="div-novoanuncio">
                  <img style={{ width: '150px', height: '150px', paddingTop: '150px' }} src={adm} />
                  <label>Você esta criando <br/> um novo anuncio</label>
                </div>
                <section className="section-informacoes_sit_formulario">
                  <h2>Formulario</h2>
                  <div className="titulo-anuncio ">

                    <label>Titulo do anuncio : </label>
                    <input
                      style={{ width: "70%" }}
                      onChange={(e) => setTitulo(e.target.value)}
                      placeholder="Titulo do anuncio"
                      type="text"
                    />
                    <label
                      ref={ref_titulo}
                      style={{
                        fontSize: "11px",
                        fontWeight: "300",
                        display: "none",
                        color: "red",
                      }}
                    >
                      Campo obrigatorio*
                    </label>
                  </div>
                  <div className="text-div">
                    <label>Selecione oque esta anunciando</label>
                    <select onChange={(e) => {
                      if(e.target.value !== null){
                        ref_btn.current.style.display = 'flex'
                        ref_msg.current.style.display = 'none'
                      }
                      setTipo(e.target.value)
                      if (e.target.value === 'REBOQUE') {
                        return ref_infos.current.style.display = 'none';
                      } else {
                        return ref_infos.current.style.display = 'flex';
                      }
                    }} >
                      <option>Tipo</option>
                      <option value={'SEDAN'} >Carro</option>
                      <option value={'TRUCK'} >Caminhão</option>
                      <option value={'REBOQUE'}>Semi Reboque</option>
                      <option value={'REBOQUE'}>outros</option>
                    </select>
                    <label
                      ref={ref_tipo}
                      style={{
                        fontSize: "11px",
                        fontWeight: "300",
                        display: "none",
                        color: "red",
                      }}
                    >
                      Campo obrigatorio*
                    </label>
                  </div>
                  <div className="text-div">
                    <label>Proprietario : </label>
                    <input
                      style={{ width: "300px" }}
                      placeholder="Proprietario do veiculo"
                      value={Proprietario}
                      onChange={(e) => setProprietario(e.target.value)}
                      type="text"
                    />
                    <label
                      ref={ref_proprietario}
                      style={{
                        fontSize: "11px",
                        fontWeight: "300",
                        display: "none",
                        color: "red",
                      }}
                    >
                      Campo obrigatorio*
                    </label>
                  </div>
                  <div className="text-div">
                    <label>Ano de fabricação : </label>
                    <input
                      MAXLENGTH="4"
                      style={{ width: "80px" }}
                      placeholder="Ano de fabricação"
                      onChange={(e) => setAno(e.target.value)}
                      value={Ano}
                      type="text"
                    />
                    <label
                      ref={ref_Ano}
                      style={{
                        fontSize: "11px",
                        fontWeight: "300",
                        display: "none",
                        color: "red",
                      }}
                    >
                      Campo obrigatorio*
                    </label>
                  </div>
                  <div className="text-div">
                    <label>Cor : </label>
                    <input
                      MAXLENGTH="11"
                      style={{ width: "80px" }}
                      placeholder="Cor do Veiculo"
                      onChange={(e) => setCor(e.target.value)}
                      value={Cor}
                      type="text"
                    />
                    <label
                      ref={ref_cor}
                      style={{
                        fontSize: "11px",
                        fontWeight: "300",
                        display: "none",
                        color: "red",
                      }}
                    >
                      Campo obrigatorio*
                    </label>
                  </div>
                  <div className="text-div">
                    <label>Modelo: </label>
                    <input placeholder={'Modelo'} onChange={(e)=>setModelo(e.target.value)}/>
                    <label
                      ref={ref_Modelo}
                      style={{
                        fontSize: "11px",
                        fontWeight: "300",
                        display: "none",
                        color: "red",
                      }}
                    >
                      Campo obrigatorio*
                    </label>
                  </div>
                  <div className="text-div">
                    <label>Observações: </label>
                    <input
                      placeholder="Observações"
                      onChange={(e) => setObs(e.target.value)}
                      style={{ width: "350px" }}
                      value={Obs}
                      type="text"
                    />
                  </div>
                  <div className="text-div">
                    <label> Fabricante : </label>
                    <input type='text' placeholder='Ex : SCANIA' onChange={(e)=>setFabricante(e.target.value.toUpperCase())} />
                    <label
                      ref={ref_fabricante}
                      style={{
                        fontSize: "11px",
                        fontWeight: "300",
                        display: "none",
                        color: "red",
                      }}
                    >
                      Campo obrigatorio*
                    </label>
                  </div>
                  <div className="text-div">
                    <label>Preco : </label>
                    <input
                      style={{ width: "100px" }}
                      value={Preco}
                      onChange={(e) => {
                        setPreco(e.target.value);
                        if ((Preco.length > 2) & (Preco.length < 4)) {
                          if (Preco.indexOf(".") < 1)
                            return setPreco(Preco + ".");
                        }
                        if ((Preco.length > 6) & (Preco.length < 8)) {
                          return setPreco(Preco + ".");
                        }
                        console.log(e.target.value.length);
                      }}
                      type="text"
                    />
                    <label
                      ref={ref_preco}
                      style={{
                        fontSize: "11px",
                        fontWeight: "300",
                        display: "none",
                        color: "red",
                      }}
                    >
                      Campo obrigatorio*
                    </label>
                  </div>
                  <div className="text-div">
                    <label>Telefone : </label>
                    <input
                      MAXLENGTH="11"
                      placeholder="Telefone"
                      style={{ width: "150px" }}
                      onChange={(e) => setTelefone(e.target.value)}
                      type="text"
                    />
                    <label
                      ref={ref_telefone}
                      style={{
                        fontSize: "11px",
                        fontWeight: "300",
                        display: "none",
                        color: "red",
                      }}
                    >
                      Campo obrigatorio*
                    </label>
                  </div>
                  <div className="text-div">
                    <label>Tipo da Suspensâo : </label>
                    <input
                      MAXLENGTH="14"
                      placeholder="Tipo de suspensão"
                      style={{ width: "250px" }}
                      onChange={(e) => setSuspensao(e.target.value)}
                      type="text"
                    />
                  </div>
                  <div className="text-div">
                    <label>Relação do Diferencial : </label>
                    <input
                      MAXLENGTH="5"
                      placeholder="Relação do diferencial"
                      style={{ width: "80px" }}
                      onChange={(e) => setDiferencial(e.target.value)}
                      type="number"
                    />
                    <label
                      ref={ref_diferencial}
                      style={{
                        fontSize: "11px",
                        fontWeight: "300",
                        display: "none",
                        color: "red",
                      }}
                    >
                      Campo obrigatorio*
                    </label>
                  </div>
                  <div className="text-div">
                    <label>Entre Eixos : </label>
                    <input
                      MAXLENGTH="5"
                      placeholder="Entre eixos"
                      style={{ width: "80px" }}
                      onChange={(e) => setEixo(e.target.value)}
                      type="number"
                    />
                    <label
                      ref={ref_eixo}
                      style={{
                        fontSize: "11px",
                        fontWeight: "300",
                        display: "none",
                        color: "red",
                      }}
                    >
                      Campo obrigatorio*
                    </label>
                  </div>
                  <section className="modal-informacoes" ref={ref_infos} style={{display : 'flex'}}>
                    <div className="text-div buscarporplaca">
                      <label>PLACA :  <button
                        className="buttonLupa"
                        onClick={async () => {
                          let info = await BuscarInformacoes_sit(Placa);
                          setProprietario(info[0]);
                          setAno(info[2]);
                          setCor(info[3]);
                          setChassi(info[4]);
                          setModelo(info[5]);
                          setCrv(info[6]);
                          setRenavam(info[7]);
                          setObs(info[8]);
                        }}
                      >
                        <img style={{ width: "20px" }} src={lupa} />
                      </button></label>
                      <input
                        MAXLENGTH="7"
                        style={{ width: "400px" }}
                        placeholder="Placa do veiculo"
                        onChange={(e) => setPlaca(e.target.value)}
                      />
                      <label
                        ref={ref_placa}
                        style={{
                          fontSize: "11px",
                          fontWeight: "300",
                          display: "none",
                          color: "red",
                        }}
                      >
                        Campo obrigatorio*
                      </label>
                    </div>
                    <div className="text-div">
                      <label>Chassi : </label>
                      <input
                        placeholder="Chassi do veiculo"
                        onChange={(e) => setChassi(e.target.value)}
                        value={Chassi}
                        type="text"
                      />
                      <label
                        ref={ref_Chassi}
                        style={{
                          fontSize: "11px",
                          fontWeight: "300",
                          display: "none",
                          color: "red",
                        }}
                      >
                        Campo obrigatorio*
                      </label>
                    </div>
                    <div className="text-div">
                      <label>Crv:</label>
                      <input
                        style={{ width: "300px" }}
                        placeholder="Certificado do veiculo"
                        onChange={(e) => setCrv(e.target.value)}
                        value={Crv}
                        type="text"
                      />
                      <label
                        ref={ref_Crv}
                        style={{
                          fontSize: "11px",
                          fontWeight: "300",
                          display: "none",
                          color: "red",
                        }}
                      >
                        Campo obrigatorio*
                      </label>
                    </div>
                    <div className="text-div">
                      <label>Renavam: </label>
                      <input
                        placeholder="Renavam"
                        style={{ width: "300px" }}
                        onChange={(e) => setRenavam(e.target.value)}
                        value={Renavam}
                        type="text"
                      />
                      <label
                        ref={ref_renavam}
                        style={{
                          fontSize: "11px",
                          fontWeight: "300",
                          display: "none",
                          color: "red",
                        }}
                      >
                        Campo obrigatorio*
                      </label>
                    </div>
                    <div className="text-div">
                      <label>Potencia : </label>
                      <input
                        placeholder="WHP/CV"
                        MAXLENGTH="3"
                        style={{ width: "55px" }}
                        onChange={(e) => setPotencia(e.target.value)}
                        type="text"
                      />
                      <label
                        ref={ref_potencia}
                        style={{
                          fontSize: "11px",
                          fontWeight: "300",
                          display: "none",
                          color: "red",
                        }}
                      >
                        Campo obrigatorio*
                      </label>
                    </div>
                    <div className="text-div">
                      <label>Kilometragem : </label>
                      <input
                        value={Km}
                        MAXLENGTH="11"
                        style={{ width: "200px" }}
                        placeholder="Kilometragem | Ex : 300,000"
                        onChange={(e) => {
                          setKm(e.target.value);
                          if ((Km.length > 2) & (Km.length < 4)) {
                            if (Km.indexOf(".") < 1) return setKm(Km + ".");
                          }
                          if ((Km.length > 6) & (Km.length < 8)) {
                            return setKm(Km + ".");
                          }
                          console.log(e.target.value.length);
                        }}
                        type="text"
                      />
                      <label
                        ref={ref_km}
                        style={{
                          fontSize: "11px",
                          fontWeight: "300",
                          display: "none",
                          color: "red",
                        }}
                      >
                        Campo obrigatorio*
                      </label>
                    </div>
                    <div className="text-div">
                      <label>Tipo da Cabine : </label>
                      <input
                        MAXLENGTH="12"
                        placeholder="Tipo da cabine"
                        style={{ width: "200px" }}
                        onChange={(e) => setCabine(e.target.value)}
                        type="text"
                      />
                      <label
                        ref={ref_cabine}
                        style={{
                          fontSize: "11px",
                          fontWeight: "300",
                          display: "none",
                          color: "red",
                        }}
                      >
                        Campo obrigatorio*
                      </label>
                    </div>
                    <div className="text-div">
                      <label>Capacdade do tanque: </label>
                      <input
                        placeholder="Capacidade do tanque"
                        MAXLENGTH="4"
                        style={{ width: "50px" }}
                        onChange={(e) => setCombustivel(e.target.value)}
                        type="number"
                      />
                      <label
                        ref={ref_combustivel}
                        style={{
                          fontSize: "11px",
                          fontWeight: "300",
                          display: "none",
                          color: "red",
                        }}
                      >
                        Campo obrigatorio*
                      </label>
                    </div>
                    <div className="text-div">
                      <label>Torque: </label>
                      <input
                        MAXLENGTH="3"
                        placeholder="Torque"
                        style={{ width: "50px" }}
                        onChange={(e) => setTorque(e.target.value)}
                        type="number"
                      />
                      <label
                        ref={ref_torque}
                        style={{
                          fontSize: "11px",
                          fontWeight: "300",
                          display: "none",
                          color: "red",
                        }}
                      >
                        Campo obrigatorio*
                      </label>
                    </div>
                    <div className="div-text">
                    </div>
                    <div className="text-div">
                      <div>
                        <label>Autonomia : </label>
                        <label>Cidade : </label>
                        <input
                          style={{ width: "40px" }}
                          placeholder="Ex: 2.4"
                          value={Autonomia}
                          onChange={(e) => setAutonima(e.target.value)}
                          type="text"
                        />km/l
                        <label> Estrada : </label>
                        <input
                          style={{ width: "40px" }}
                          placeholder="Ex: 5.4"
                          value={Autonomia}
                          onChange={(e) => setAutonima(e.target.value)}
                          type="text"
                        />km/l
                      </div>
                    </div>
                  </section>
                  <div className="text-livre">
                    <label>Informações: </label>
                    <textarea
                      MAXLENGTH="140"
                      placeholder="Informações"
                      onChange={(e) => setInformacoes(e.target.value)}
                      type="text"
                    />
                  </div>
                  <div className="text-livre">
                    <label>Opcionais: </label>
                    <textarea
                      MAXLENGTH="140"
                      placeholder="Informações"
                      style={{ marginLeft: "50px" }}
                      onChange={(e) => setOpc(e.target.value)}
                      type="text"
                    />
                  </div>
                </section>
              </section>
            )}
            <div className="btn_form" ref={ref_btn} style={{display : 'none'}} >
              <button
                type="submit"
                onClick={() => {
                  if(imagems < 1){
                    return alert('Faça o upload das imagems')
                  }
                  let TelefoneCp = () => {
                    ref_telefone.current.style.display = "flex";
                    return new Error("Erro, campos obrigatorios em banco");
                  };
                  let PlacaCp = () => {
                    ref_placa.current.style.display = "flex";
                    return new Error("Erro, campos obrigatorios em banco");
                  };
                  let PrecoCp = () => {
                    ref_preco.current.style.display = "flex";
                    return new Error("Erro, campos obrigatorios em banco");
                  };
                  let PotenciaCp = () => {
                    ref_potencia.current.style.display = "flex";
                    return new Error("Erro, campos obrigatorios em banco");
                  };
                  let TorqueCp = () => {
                    ref_torque.current.style.display = "flex";
                    return new Error("Erro, campos obrigatorios em banco");
                  };
                  let KmCp = () => {
                    ref_km.current.style.display = "flex";
                    return new Error("Erro, campos obrigatorios em banco");
                  };
                  let CabineCp = () => {
                    ref_cabine.current.style.display = "flex";
                    return new Error("Erro, campos obrigatorios em banco");
                  };
                  let DiferencialCp = () => {
                    ref_diferencial.current.style.display = "flex";
                    return new Error("Erro, campos obrigatorios em banco");
                  };
                  let CombustivelCp = () => {
                    ref_combustivel.current.style.display = "flex";
                    return new Error("Erro, campos obrigatorios em banco");
                  };
                  let TituloCp = () => {
                    ref_titulo.current.style.display = "flex";
                    return new Error("Erro, campos obrigatorios em banco");
                  };
                  let EixoCp = () => {
                    ref_eixo.current.style.display = "flex";
                    return new Error("Erro, campos obrigatorios em banco");
                  };
                  let FabricanteCp = () => {
                    ref_fabricante.current.style.display = "flex";
                    return new Error("Erro, campos obrigatorios em banco");
                  };
                  let ProprietarioCp = () => {
                    ref_proprietario.current.style.display = "flex";
                    return new Error("Erro, campos obrigatorios em banco");
                  };
                  let AnoCp = () => {
                    ref_Ano.current.style.display = "flex";
                    return new Error("Erro, campos obrigatorios em banco");
                  };
                  let ChassiCp = () => {
                    ref_Chassi.current.style.display = "flex";
                    return new Error("Erro, campos obrigatorios em banco");
                  };
                  let ModeloCp = () => {
                    ref_Modelo.current.style.display = "flex";
                    return new Error("Erro, campos obrigatorios em banco");
                  };
                  let CrvCp = () => {
                    ref_Crv.current.style.display = "flex";
                    return new Error("Erro, campos obrigatorios em banco");
                  };
                  let RenavamCp = () => {
                    ref_renavam.current.style.display = "flex";
                    return new Error("Erro, campos obrigatorios em banco");
                  };
                  let CorCp = () => {
                    ref_cor.current.style.display = "flex";
                    return new Error("Erro, campos obrigatorios em banco");
                  };
                  let TipoCp = () => {
                    ref_tipo.current.style.disabled = 'flex';
                    return new Error('Erro')
                  }
                  console.log('campos', Preco, Titulo, Eixo, Fabricante, Proprietario, Ano, Cor, Modelo, Tipo)
                  ValidarCampos([
                    Preco !== null ? Preco : PrecoCp(),
                    Titulo !== null ? Titulo : TituloCp(),
                    Eixo !== null ? Eixo : EixoCp(),
                    Fabricante !== null ? Fabricante : FabricanteCp(),
                    Proprietario !== null ? Proprietario : ProprietarioCp(),
                    Ano !== null ? Ano : AnoCp(),
                    Cor !== null ? Cor : CorCp(),
                    Modelo !== null ? Modelo : ModeloCp(),
                    Tipo !== null ? Tipo : TipoCp()
                  ]);
                }}
              >
                Anunciar  
                <img  src={save} style={{width : '10px', paddingLeft : '3px'}} />
              </button>
              <button
                style={{ backgroundColor: "rgb(189, 0, 0)", color: "white" }}
                onClick={() => {
                  window.scrollTo(0, 0)
                  Navigate("/administrador");
                }}
              >
                Voltar
              </button>
            </div>
            <p ref={ref_msg} style={{color : 'red'}}>Selecione oque esta vendendo</p>
          </form>
        </section>
      </section>
    </>
  );
}
