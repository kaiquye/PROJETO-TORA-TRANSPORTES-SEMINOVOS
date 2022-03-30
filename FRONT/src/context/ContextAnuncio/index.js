import { createContext, useState } from "react";
import { BuscarAnuncioPelaPlaca } from "../../Server/Server/BuscarAnuncioPelaPlaca";
import {BuscarAnunciosRecomendados} from '../../Server/Server/BuscarAnunciosRecomendados'
export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [error, setError] = useState(false);
  const [Anuncio, setAnuncio] = useState(null);
  const [Recomendados, setRecomendados] = useState(null)
  const [pageLoading, setPageLoading] = useState();

  let BuscarAnuncio = async function (VEICULO_id) {
    setPageLoading(true)
    try {
      let Anuncio_ = await BuscarAnuncioPelaPlaca(VEICULO_id);
      if (!Anuncio_) {
        throw new Error("Erro : Não foi possivel buscar Anuncio");
      }
      setAnuncio(Anuncio_);
      setPageLoading(false)
    } catch (error) {
      setError(true);
    }
  };

  let AnunciosRecomendados = async function(MODELO_VEI){
    try {
      let AnunciosRecomendado = await BuscarAnunciosRecomendados(MODELO_VEI);
      if (!AnunciosRecomendado) {
        throw new Error("Erro : Não foi possivel buscar Anuncio recomendados");
      }
      setRecomendados(AnunciosRecomendado);
    } catch (error) {
      setError(true);
    }
  }  

  return (
    <AuthContext.Provider value={{ BuscarAnuncio, pageLoading ,Anuncio, AnunciosRecomendados, Recomendados}}>
      {children}
    </AuthContext.Provider>
  );
}
