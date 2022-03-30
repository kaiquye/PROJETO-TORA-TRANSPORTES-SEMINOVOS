import { useState } from "react";
import './style.css'
import img from '../imagem/check.png'
import editar from '../imagem/botao-editar.png'
import definicoes from '../imagem/definicoes.png'
import fechar from '../imagem/fechar.png'
import lupa from '../imagem/lupa.png'

export function Filtros(props) {

  const [Modelo, setModelo] = useState();
  const [Fabricante, setFabricante] = useState();
  const [Valor, setValor] = useState();
  const [Ativo, setAtivo] = useState();
  const [data, setData] = useState();
  const [negociacao, setNegociacao] =  useState();

  return (
    <div className="FILTROS-ADM">
      <p> ATIVO : </p>
      <select onChange={(e) => setAtivo(e.target.value)}>
        <option value={3}>Todos</option>
        <option value={0}>ATIVOS</option>
        <option value={1}>INATIVO</option>
      </select>

      <p> Modelo : </p>
      <input
        type={"text"}
        onChange={(e) => setModelo(e.target.value)}
      />
      <p> Fabricante : </p>
      <input
        type={"text"}
        onChange={(e) => setFabricante(e.target.value)}
      />
      <p> Valor maximo : </p>
      <input
        type={"text"}
        onChange={(e) => setValor(e.target.value)}
      />
      <p> Data de publicação : </p>
      <select onChange={(e) => setData(e.target.value)}>
        <option>Periodo publicado</option>
        <option value={5}>Publicado a mais de 5 dias</option>
        <option value={10}>Publicado a mais de 10 dias</option>
        <option value={15}>Publicado a mais de 15 dias </option>
        <option value={20}>Publicado a mais de 20 dias </option>
        <option value={25}>Publicado a mais de 25 dias </option>
        <option value={30}>Publicado a mais de 30 dias </option>
      </select>
      <p> Em negociação : </p>
      <select onChange={(e) => setNegociacao(e.target.value)}>
        <option>Situacao </option>
        <option value={3}>Todos</option>
        <option value={1}>Negociação</option>
        <option value={0}>Pra venda</option>
      </select>
      <button
        onClick={() => {
          props.Filtro(Modelo, Fabricante, Valor, Ativo, data, negociacao);
        }}
      >
        <img style={{ width: '13px' }} src={lupa} />  BUSCAR
      </button>
      <button style={{ marginLeft: '2px', backgroundColor : 'white', color : 'black' }} onClick={() => document.location.reload()}>
        LIMPAR
      </button>
    </div>
  );
}
