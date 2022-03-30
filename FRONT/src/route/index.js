import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider as ContextHome } from "../context/ContextHome";
import { AuthContextProvider as ContextAnuncio } from "../context/ContextAnuncio";
import { AuthContextProvider as ContextAdm } from "../context/ContextAdm";
import { AuthContextProvider as  ContextProposta } from "../context/ContextProposta";

import { NavBar } from "../components/NavBar";
import Home from "../pages/Home.js";
import { RadaPe } from "../../src/components/RodaPe/index";
import { Anuncio } from "../pages/Anuncio";
import { Administrator } from "../pages/Adm";
import { NovoAnuncio } from "../pages/NovoAnuncio";
import { QuemSomos } from "../pages/QuemSomos";
import { Proposta } from "../pages/PageProposta";
import { PropostaAdm } from "../pages/PropostaAdm";

export function Router() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <ContextProposta>
            <Routes>
              <Route path='/proposta/:modelo/:id_vei' element={<Proposta />}/>
              <Route path="/proposta/adm/:modelo/:id_vei/:room" element={<PropostaAdm />}/>
            </Routes>
        </ContextProposta>
        <ContextHome>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/QuemSomos" element={<QuemSomos />} />
          </Routes>
        </ContextHome>
        <ContextAnuncio>
          <Routes>
            <Route
              path="/anuncio/:VEICULO_id/:MODELO_VEI"
              element={<Anuncio />}
            />
          </Routes>
        </ContextAnuncio>
        <ContextAdm>
          <Routes>
            <Route path="/administrador" element={<Administrator />} />
            <Route path="/novoanuncio" element={<NovoAnuncio />} />
          </Routes>
        </ContextAdm>
        <RadaPe />
      </BrowserRouter>
    </>
  );
}
