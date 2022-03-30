import { useState, useEffect, createContext } from "react";
import { BuscarTodosAnuncios } from "../../Server/Server/BuscarAnuncios";
import { ComponenteErro } from "../../components/ErrorBoundary/ComponetErro";
import { ProximosAnuncios } from "../../Server/Server/ProximosAnuncio";
import { Filtro } from '../../Server/Server/FiltroHome';

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [Anuncios, setAnuncios] = useState();
  const [AnuncioDestaque, setDestaque] = useState();
  const [pageLoading, setPageLoading] = useState();
  const [error, setError] = useState({status : false, menssage : ''});
  const [number, setNumber] = useState(24);
  const [Det, setDet] = useState(false)
  const [ref, setRef] = useState(true)

  let BuscarAnuncioDestque = async function () {
    setPageLoading(true);
    let ANUNCIOS = await BuscarTodosAnuncios();
    try {
      if (!ANUNCIOS) {
        setPageLoading(false)
        setError({status : true, menssage : 'Não existe nenhum anuncio publicado, seja o primeiro ! '})
      }
      setDestaque(ANUNCIOS);
      setPageLoading(false);
    } catch (error) {
      setPageLoading(false)
      setError({status : true, menssage : 'Nossos servidores estão desligados.'})
    }

  };
  let BuscarAnuncios = async function () {
    setPageLoading(true);
    try {
     let ANUNCIOS = await BuscarTodosAnuncios();
     console.log('todos anucnios', ANUNCIOS)
      if (!ANUNCIOS) {
        setPageLoading(false)
        setError({status : true, menssage : 'Não existe nenhum anuncio publicado, seja o primeiro !'})
      }
      setAnuncios(ANUNCIOS);
      setPageLoading(false);
    } catch (error) {
      setPageLoading(false)
      setError({status : true, menssage : 'Nossos servidores estão desligados.'})
    }
  };
  let Proximo = async function () {
    try {
      setNumber(number + 24)
      let anuncios = await ProximosAnuncios(number);
      console.log('------------------', anuncios.length)
      if (anuncios instanceof Error) {
        setError(true)
      }
      if (anuncios < 24) {
        return setRef(false)
      }
      let Array_anuncios = new Array(...Anuncios, ...anuncios);
      setAnuncios(Array_anuncios);
    } catch (error) {
      setPageLoading(false)
      setError({status : true, menssage : 'Algo aconteceu, não foi possivel buscar mais anuncios.'})
    }
  };
  let Filtrar = async function (ORDEM, MODELO_VEI, KM_VEI, MARCA_VEI, 
    PRECO_VEI, TIPO_VEI, DATA_VEI, NEGOCIACAO_VEI) {
    setPageLoading(true);
    try {
      let anuncios = await Filtro(ORDEM, MODELO_VEI, KM_VEI, MARCA_VEI, 
        PRECO_VEI, TIPO_VEI, DATA_VEI, NEGOCIACAO_VEI);
      if (!anuncios) {
        alert('Aviso : Não foram encontrados nenhum anuncio correspondente à este filtro.')
        setRef(true)
        setPageLoading(false)
        setTimeout(()=>{
          document.location.reload()
        },9999)
        return setDet(true);
      }
      setAnuncios(anuncios)
      setRef(false)
      setPageLoading(false)
      setError({status : false, menssage : ''})
    } catch (error) {
      setPageLoading(false)
      setError({status : true, menssage : 'Não foi possivel encontrar anuncios.'})
      setTimeout( async ()=>{
         document.location.reload();
      },5000)
    }
  }
  return (
    <AuthContext.Provider
      value={{
        Proximo,
        BuscarAnuncios,
        Anuncios,
        BuscarAnuncioDestque,
        AnuncioDestaque,
        pageLoading,
        Filtrar,
        ref,
        error
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
