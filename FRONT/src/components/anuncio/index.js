import { AuthContext } from "../../context/ContextAnuncio";
import { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Slider, Slider_teste } from "../SliderImage/Slider";
import { Lateral } from "../TabelaLateralAnuncio";
import { Informacoes } from "../informacoesAnuncio";
import { BoasVindas } from "../../components/boasVindasAnuncio";
import "./Style.css";

export function AnuncioVeiculo() {
  const { BuscarAnuncio, Anuncio, pageLoading } = useContext(AuthContext);
  let { VEICULO_id } = useParams();
  useEffect(() => {
    BuscarAnuncio(VEICULO_id);
  }, []);
  return (
    <>
      <div className="boasVindas_anuncio">
        {
          console.log(Anuncio)
        }
        {Anuncio && <BoasVindas TIL_ANUNCIO_VEI={Anuncio[0].TIL_ANUNCIO_VEI} PRECO_VEI={Anuncio[0].PRECO_VEI}
          MARCA_VEI={Anuncio[0].MARCA_VEI} />}
      </div>
      <section className="section_Pagina_Anuncio">

        <div className="div_slider_pagina_anuncio">
          {Anuncio && <Slider_teste imagems={Anuncio[1]} />}
          {Anuncio && <Slider imagems={Anuncio[1]} />}
        </div>
        <div className="div_info_lateral_pagina_anuncio">
          {Anuncio &&
            <Lateral
              MARCA_VEI={Anuncio[0].MARCA_VEI}
              NEGOCIACAO_VEI={Anuncio[0].NEGOCIACAO_VEI}
              PRECO_VEI={Anuncio[0].PRECO_VEI}
              ANO_VEI={Anuncio[0].ANO_VEI}
              MODELO_VEI={Anuncio[0].MODELO_VEI}
              KM_VEI={Anuncio[0].KM_VEI}
              TIL_ANUNCIO_VEI={Anuncio[0].TIL_ANUNCIO_VEI}
              telefone={Anuncio[0].TELEFONE_VEI}
            />}
        </div>
        <div className="div_info_bottom_pagina_anuncio">
          {Anuncio &&
            <Informacoes
              PRECO_VEI={Anuncio[0].PRECO_VEI}
              ANO_VEI={Anuncio[0].ANO_VEI}
              MODELO_VEI={Anuncio[0].MODELO_VEI}
              KM_VEI={Anuncio[0].KM_VEI}
              TIL_ANUNCIO_VEI={Anuncio[0].TIL_ANUNCIO_VEI}
              POTENCIA_VEI={Anuncio[0].POTENCIA_VEI}
              TIP_SUSPENSAO_VEI={Anuncio[0].TIP_SUSPENSAO_VEI}
              REL_DIFERENCIAL_VEI={Anuncio[0].REL_DIFERENCIAL_VEI}
              ENT_EIXO_VEI={Anuncio[0].ENT_EIXO_VEI}
              CAP_COMBUSTIVEL_VEI={Anuncio[0].CAP_COMBUSTIVEL_VEI}
              CABINE_VEI={Anuncio[0].CABINE_VEI}
              MARCA_VEI={Anuncio[0].MARCA_VEI}
              OBS_VEI={Anuncio[0].OBS_VEI}
              OPC_VEI={Anuncio[0].OPC_VEI}
              COR_VEI={Anuncio[0].COR_VEI}
            />}
        </div>
      </section>
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.9439192762384!2d-44.05363568440649!3d-19.92676794335627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa695a55ae2efad%3A0xfa4c68c939485dbf!2sTORA%20TRANSPORTES%20-%20MATRIZ!5e0!3m2!1spt-BR!2sbr!4v1648414068798!5m2!1spt-BR!2sbr" style={{ border: '0px', height: '400px' }}></iframe>
      </div>
    </>
  );
}
