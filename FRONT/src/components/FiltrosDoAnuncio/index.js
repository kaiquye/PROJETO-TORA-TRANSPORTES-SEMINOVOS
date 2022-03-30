import "./style.css";
import { useContext, useState, useRef } from "react";
import { AuthContext } from "../../context/ContextHome";
import { Marca } from "./FiltroModelo";
import img from "../../components/NavBar/black-logo.png";
import lupa from "./image/lupa.png";
import detetive from "./image/detetive.png";
export let Data = function (props) {
  const { Filtrar } = useContext(AuthContext);

  return (
    <div className="ordem">
      <label>Ordenar por : </label>
      <select onChange={(e) => Filtrar(e.target.value)}>
        <option value={"ASC"}> Mais recentes </option>
        <option value={"DESC"}> Menos recentes </option>
      </select>
    </div>
  );
};

export function Filtro(props) {
  const { Filtrar } = useContext(AuthContext);
  const [Ordem, setOrdem] = useState();
  const [Modelo_, setModelo] = useState();
  const [Preco_, setPreco] = useState();
  const [Km_, setKm] = useState();
  const [Fabricante, setFabricante] = useState();
  const [Negociacao, setNegociacao] = useState();
  const [Data, setData] = useState();
  const [tipo, setTipo] = useState()

  let Preco = function () {
    return (
      <div>
        <div>
          <label>Preço</label>
          <br />
          <input
            type="number"
            placeHolder="Ex : R$ 129,000"
            onChange={(e) => setPreco(e.target.value)}
          />
        </div>
      </div>
    );
  };

  let Km = function () {
    return (
      <div>
        <label>Kilometragem</label> <br />
        <input
          type="number"
          placeHolder="Ex : 300.000 Km"
          onChange={(e) => setKm(e.target.value)}
        />
      </div>
    );
  };

  let Ano = function () {
    return (
      <div>
        <label>Ano de fabricação</label>
        <input
          type="number"
          placeholder="Ex : 2014"
          onChange={(e) => setModelo(e.target.value)}
        />
      </div>
    );
  };

  let Modelo = function () {
    return (
      <div className="filtroModelo">
        <label>Modelo</label>
        <br />
        <input
          onChange={(e) => setModelo(e.target.value)}
          placeholder="Ex : Dolly"
          id="MODELO_VEI"
        ></input>
      </div>
    );
  };

  let Negociacao_ = function () {
    return (
      <div>
        <select onChange={(e) => setNegociacao(e.target.value)}>
          <option value={3}>Todos anuncios</option>
          <option value={1}>Em negociação</option>
          <option value={0}>Disponivel P/Venda</option>
        </select>
      </div>
    );
  };

  let Tipo = function () {
    return (
      <main className='section-modelo'>
        <div>
        <p>Caminhão</p>
        <input id='truck' type="checkbox" value='truck' onChange={(e)=>{
          setTipo(e.target.value)
          document.getElementById('sedan').checked = false
          document.getElementById('reboque').checked = false
          }} />
        </div>
        <div>
        <p>Sedan</p>
        <input id='sedan' type="checkbox"  value='sedan'  onChange={(e)=>
          {
            setTipo(e.target.value)
            document.getElementById('truck').checked = false
            document.getElementById('reboque').checked = false
            }}/>
        </div>
        <div>
        <p>Reboque</p>
        <input id='reboque' type="checkbox" value='reboque'  onChange={(e)=>{
          setTipo(e.target.value)
          document.getElementById('truck').checked = false
          document.getElementById('sedan').checked = false
        }}/>
        </div>
      </main>
    );
  };

  let DataPublicacao = function () {
    return (
      <div>
        <select onChange={(e) => setData(e.target.value)}>
          <option>Todos</option>
          <option value={1}>Hoje</option>
          <option value={7}>7 dias</option>
          <option value={14}>14 dias</option>
          <option value={21}>21 dias</option>
        </select>
      </div>
    );
  };

  return (
    <section className="section_filtro">
      <img style={{ width: "100px", paddingTop: "10px" }} src={img} />
      <h4>Filtrar por : </h4>
      <img style={{ width: "100px" }} src={detetive} />

      <div className="div_filtro">
        <div>{<Marca setFabricante={setFabricante} />}</div>
        <div>{Modelo()}</div>
        <div>{Preco()}</div>
        <div>{Km()}</div>
        <div  style={{display : 'flex'}} >{Tipo()}</div>
        <div>{DataPublicacao()}</div>
        <div>{Negociacao_()}</div>
        <div>
          <button
            className="buscar-anuncios-filtro-button"
            onClick={() => {
              Filtrar(
                props.Ordem,
                Modelo_,
                Km_,
                Fabricante,
                Preco_,
                tipo,
                Data,
                Negociacao
              );
            }}
          >
            {" "}
            BUSCAR{" "}
            <img
              style={{ width: "15px", paddingLeft: "5px" }}
              src={lupa}
            />{" "}
          </button>
        </div>
        <div>
          <button
            className="limpar-anuncios-filtro-button"
            onClick={() => {
              document.location.reload();
            }}
          >
            LIMPAR FILTRO{" "}
            <img style={{ width: "15px", paddingLeft: "5px" }} src={lupa} />{" "}
          </button>
        </div>
      </div>
    </section>
  );
}
