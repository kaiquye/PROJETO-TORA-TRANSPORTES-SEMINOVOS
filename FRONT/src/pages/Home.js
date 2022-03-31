import "./Style/Home.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/ContextHome/index";
import { Banner } from "../components/BannerPgPrincipal";
import { ListaAnuncios } from "../../src/components/ListaDeAnuncios/index";
import { Destaque } from "../components/ListaDeAnuncios/AnuncioDestaque";
import { PageLoading } from "../../src/components/PageLoading/PageLoading";
import { Data, Filtro } from "../components/FiltrosDoAnuncio";
import { Sobre } from "../components/SobreHome/index";
import { Proximo } from "../components/btnProximoHome";
import { ButtonContato } from "../components/ButtonEntrarEmContato";
import vd from "./Style/vendedor.png";
import { ComponenteErro } from "../components/ErrorBoundary/ComponetErro";
import selo from './Style/4456977.png'

function Home() {


  const { pageLoading, Anuncios, ref, error } = useContext(AuthContext);
  const [Ordem, setOrdem] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="section_home">
        <div className="banner_home">
          <Banner />
        </div>
        <div className="space_home">
          <h1 className="mensagemHomeSpace">
            As melhores opções de veiculos seminovos - TORA | seminovos
          </h1>
        </div>
        <div className="filtrosAnuncio_home">
          <Filtro Ordem={Ordem} />
        </div>
        <div className="listaAnuncio_home">
          {pageLoading && <PageLoading />}
          {error.status ? (
            <ComponenteErro error={error.menssage} />
          ) : (
            <>
              <div className="mensagemHome" >
                <label className="label1" >
                  As melhores opções de veiculos seminovos
                </label>
                <label className="label2">
                TORA | seminovos
                </label>
                <button>
                  Quem somos
                </button>
              </div>
              <div className="AnuncioDestaqueHome">
                <h1 style={{ color: "#ff7300" }}>Destaque</h1>
                <Destaque />
              </div>
              {/* <div>
                <h1 className="mensagemHome">
                  Nossos melhores seminovos
                </h1>
              </div> */}
              <div>{<Data setOrdem={setOrdem} />}</div>
              <ListaAnuncios />
              {ref === true ? <Proximo /> : <h3>Fim</h3>}
            </>
          )}
        </div>
        <div className="Sobre_home">
          <Sobre />
        </div>
      </section>
      <ButtonContato />
    </>
  );
}
export default Home;
