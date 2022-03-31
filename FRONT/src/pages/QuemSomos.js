import { Index } from "../components/QuemSomos";
import "./Style/quemsomos.css";
import logo from "../components/NavBar/black-logo-tora.png";

export function QuemSomos() {
  return (
    <section className="main-quemsomos">
      <div className="pag page-inicial">
        <div className="info-page1">
          <img style={{ width: "200px" }} src={logo} />
          <h1>Bem Vindo a Tora Seminovos</h1>
          <button>RECINTOS ALFANDEGADOS</button>
          <button>TERMINAIS MULTIMODAIS</button>
          <button>TRANSPORTES</button>
        </div>
      </div>
      <div className="pag page-2">
        <div className="info-page2">
          <h1> RECINTOS ALFANDEGADOS </h1>
          <p>RECINTO ALFANDEGADO – CLIA</p>
          <label>
            O CLIA – Centro Logístico Industrial Aduaneiro está localizado na
            Região Metropolitana de Belo Horizonte/MG, às margens da BR-381, com
            acesso facilitado aos principais portos e aeroportos da região
            Sudeste.
            <br />
            <br />
            Dispõe de 75 mil m² de área alfandegada, incluindo pátio de
            containers, com capacidade para receber cargas refrigeradas e acesso
            ferroviário. Está inserido em um complexo industrial estruturado
            para instalação de empresas, facilitando ística de importação e
            exportação. Além de entreposto aduaneiro e industrial, conta também
            com regime de armazém geral.
          </label>
        </div>
        {/* <img src={img} /> */}
      </div>
      <div className="pag page-3">
        <h1> QUEM SOMOS </h1>
        {/* <img src={img} /> */}
      </div>
      <div className="pag page-4">
        <div className="info-page2">
          <h1>TERMINAIS MULTIMODAIS </h1>
          <p>Integração Rodoferroviária</p>
          <label>
            A preocupação de oferecer ao mercado soluções cada vez mais eficazes
            e seguras levou a TORA a desenvolver um eficiente sistema de
            logística, que privilegia a integração rodoferroviária. Ferramentas
            inteligentes e inovadoras facilitam a movimentação, armazenagem e
            transporte de cargas em todo o Brasil, por meio de um sistema
            multimodal.
            <br />
            <br />
            Os terminais da TORA possibilitam integrar rodovias e ferrovias. A
            elevada capacidade de operação, que inclui a utilização simultânea
            de duas bitolas, favorece as operações de transbordo ferroviário e
            possibilita grande agilidade tanto na consolidação quanto na
            distribuição de cargas e no atendimento às operações portuárias.
          </label>
        </div>
        {/* <img src={img} /> */}
      </div>
      <div className="pag page-5">{/* <img src={img} /> */}</div>
      <div className="pag page-6">
        <div className="info-page2">
          <h1>TRANSPORTES</h1>
          <p>NACIONAL e INTERNACIONAL</p>
          <label>
            A TORA reúne experiência e capacitação necessárias ao transporte da
            sua carga. Atua nos segmentos siderúrgico, petroquímico, automotivo,
            de mineração, cargas a granel e contêineres, em todo o território
            nacional.
            <br />
            <br />
            Possuímos filiais estrategicamente posicionadas para movimentar sua carga no MERCOSUL, 
            além de contarmos com o centro de distribuição em fronteira, situado em Uruguaiana/RS, 
            que facilita o gerenciamento dos serviços e permite, nos seus 40 mil m² de área total,
             a movimentação e a armazenagem de materiais.
          </label>
        </div>
        {/* <img src={img} /> */}
      </div>
      <div className="pag page-6">{/* <img src={img} /> */}</div>
    </section>
  );
}
