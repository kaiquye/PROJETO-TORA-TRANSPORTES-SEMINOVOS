import { useParams } from "react-router";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/ContextAnuncio";
import { AnuncioVeiculo } from "../components/anuncio";

import { Recomendados } from '../components/recomendadosAnuncio';
import { PageLoading } from "../../src/components/PageLoading/PageLoading";
import './Style/Anuncio.css'
import { ButtonContato } from "../components/ButtonEntrarEmContato";

export function Anuncio() {
  
  const { pageLoading } = useContext(AuthContext)

  return (
    <section className="section-anuncio-page">
    <ButtonContato/>
    <main className="main_anuncio">
       {pageLoading && <PageLoading/>}
      <div className="div-lista-anuncios-page">
        <AnuncioVeiculo />
      </div>
      <div>
        <div className="recomendados_msg">
           <p>RECOMENDADOS</p>
        </div>
        <Recomendados />
      </div>
    </main>
    </section>
   
  );
}
