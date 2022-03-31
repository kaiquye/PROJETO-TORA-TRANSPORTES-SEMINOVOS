import { createContext, useEffect, useState } from "react";
import { BuscarTodosAnunciosAdministrador } from "../../Server/Server/BuscarTodosAnuncios_Administrador";
import { DeletarAnucio } from "../../Server/Server/DeletarAnuncio";
import { EditarAnuncio } from "../../Server/Server/EditarAnuncio";
import { EditarStatusAnuncio } from "../../Server/Server/EditartStatusAnuncio";
import { BuscarAnuncioPelaPlaca } from "../../Server/Server/BuscarAnuncioPelaPlaca";
import { CriarNovoAnuncio } from "../../Server/Server/NovoAnuncio";
import { informacoes_sit } from "../../Server/Server/Sit/BuscarVeiculo";
import { useNavigate } from "react-router";
import { dashboardFiltro } from "../../Server/Server/DashboardFiltro";
import { PageLoading } from "../../components/PageLoading/PageLoading";
import { Buscar } from "../../Server/Server/BuscarImagem";
import { BuscarQtsAnuncios } from "../../Server/Server/QtsAnuncios";
import { isStrategy } from "./Strategy";
import { EditarNegociacao } from "../../Server/Server/Negociacao";
import { io } from "socket.io-client";
import { BuscarTodasPropostas } from "../../Server/Server/BuscarTodasPropostas";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [error, setError] = useState({ status: false, menssage: "" });
  const [anuncios, setAnuncio] = useState();
  const [boolean, setBoolean] = useState();
  const [Loading, setLoading] = useState();
  const [imagem, setImagem] = useState();
  const [QtsAnuncios, setQtsAnuncios] = useState({
    qts: 0,
    ativos: 0,
    sedan: 0,
    truck: 0,
    reboque: 0,
  });
  const [message, setListMenssage] = useState();
  const [listProposta, setListProposta] = useState();
  const [socket, setSocket] = useState(null);
  const [propostas, setPropostas] = useState();
  const Navigate = useNavigate();

  useEffect(() => {
    if (socket === null) {
      setSocket(io("ws://localhost:8010", { transports: ["websocket"] }));
    }
  }, []);

  let BuscarInformacoes = async function () {
    try {
      let Qts = await BuscarQtsAnuncios();
      setQtsAnuncios({
        qts: anuncios.length,
        ativos: Qts.Ativos,
        sedan: Qts.Sedan,
        truck: Qts.Truck,
        reboque: Qts.Reboque,
      });
    } catch (error) {
      throw new Error("Não foi possivel buscar dados do dahsboard");
    }
  };
  let Negociacao = async function (VEICULO_id) {
    setLoading(true);
    try {
      if (await EditarNegociacao(VEICULO_id)) {
        setLoading(false);
        document.location.reload();
        return alert("Alterado com sucesso.");
      }
    } catch (error) {
      setLoading(false);
      setError({
        status: true,
        menssage: "Erro, Procure um administrador ou envie um e-mail",
      });
    }
  };
  let BuscarTodosanuncios = async function () {
    setLoading(true);
    try {
      let Anuncios = await BuscarTodosAnunciosAdministrador();
      setTimeout(() => {
        setLoading(false);
        setAnuncio(Anuncios);
      }, 229);
    } catch (error) {
      setLoading(false);
      setError({
        status: true,
        menssage:
          "Erro, não foi possivel buscar os anuncios. Procure um administrador ou envie um e-mail",
      });
    }
  };
  let ApagarAnuncio = async function (PLACA_VEI) {
    if (window.confirm("Confimar ?")) {
      try {
        if (DeletarAnucio(PLACA_VEI)) {
          document.location.reload();
          return alert("Anuncio apagado com sucesso.");
        }
        throw new Error("erro");
      } catch (error) {
        alert("Erro : Procure um Administrador");
        setError(true);
      }
    }
  };
  let EditarStatus = async function (VEICULO_id) {
    try {
      if (EditarStatusAnuncio(VEICULO_id)) {
        document.location.reload();
        return alert("Status alterado.");
      }
      throw new Error("erro");
    } catch (error) {
      console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%", { error });
      setError(true);
    }
  };
  let Salvar = async function (
    Cor,
    Ano,
    id,
    Km,
    Opcionais,
    Preco_not_formt,
    Potencia,
    Diferencial,
    Suspensao,
    Torque,
    Combustivel,
    Eixo,
    Titulo,
    Cabine,
    Tipo,
    Fabricante,
    Modelo,
    imagem,
    Negociacao
  ) {
    try {
      const files = new FormData();
      if (imagem) {
        for (let i = 0; imagem.length >= i; ++i) {
          files.append("image", imagem[i]);
        }
      }
      const Preco = Preco_not_formt.replace(/,/g, "").replace(/\./g, "");
      files.append("COR_VEI", Cor);
      files.append("ANO_VEI", Ano);
      files.append("MODELO_VEI", Modelo);
      files.append(
        "PRECO_VEI",
        Preco === null ? undefined : Preco.substring(0, Preco.length - 2)
      );
      files.append("POTENCIA_VEI", Potencia === null ? 0 : Potencia);
      files.append("TORQUE_VEI", Torque === null ? 0 : Torque);
      files.append("KM_VEI", Km === null ? 0 : Km);
      files.append("CABINE_VEI", Cabine === null ? undefined : Cabine);
      files.append(
        "REL_DIFERENCIAL_VEI",
        Diferencial === null ? 0 : Diferencial
      );
      files.append("ENT_EIXO_VEI", Eixo === null ? undefined : Eixo);
      files.append(
        "CAP_COMBUSTIVEL_VEI",
        Combustivel === null ? 0 : Combustivel
      );
      files.append("TIL_ANUNCIO_VEI", Titulo === null ? undefined : Titulo);
      files.append(
        "TIP_SUSPENSAO_VEI",
        Suspensao === null ? undefined : Suspensao
      );
      files.append("MARCA_VEI", Fabricante === null ? undefined : Fabricante);
      files.append("TIPO_VEI", Tipo === null ? undefined : Tipo);
      files.append("INF_VEI", Opcionais === null ? undefined : Opcionais);
      await EditarAnuncio(id, files);
    } catch (error) {
      console.log("erro____");
      console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%", { error });
      const { data } = error.response;
      alert(data.message);
      setLoading(false);
      setError({
        status: true,
        menssage:
          "Erro, não foi possivel buscar os anuncios. Procure um administrador ou envie um e-mail",
      });
    }
  };
  let BuscarAnuncio = async function (placa) {
    setLoading(true);
    try {
      let anuncio = await BuscarAnuncioPelaPlaca(placa);
      console.log([anuncio[0]]);
      if (!(anuncio === undefined)) {
        setTimeout(() => {
          setLoading(false);
          return setAnuncio([anuncio[0]]);
        }, 1000);
      }
      setLoading(false);
      return alert("Aviso : Nenhum anuncio encontrado.");
    } catch (error) {
      setLoading(false);
      setError({
        status: true,
        menssage:
          "Aviso : Não foram encontrados resultado para essa PLACA ! :( ",
      });
    }
  };
  let ValidarCampos = function (array) {
    console.log("validnado");
    for (let i = 0; array.length >= i; ++i) {
      if (array[i] instanceof Error) {
        console.log("false");
        return setBoolean(false);
      }
    }
    console.log("true");
    return setBoolean(true);
  };
  let NovoAnuncio = async function (
    event,
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
    Preco_not_formt,
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
  ) {
    setLoading(true);
    event.preventDefault();
    if (!boolean) {
      return setLoading(false);
    }
    if (imagems < 1) {
      alert("upload");
      return setLoading(false);
    }
    const files = new FormData();
    for (let i = 0; imagems.length >= i; ++i) {
      files.append("image", imagems[i]);
    }
    const Preco = parseInt(Preco_not_formt.replace(/\./g, ""));
    isStrategy.ADICIONAR(files, "PROPRIETARIO_VEI", Proprietario);
    isStrategy.ADICIONAR(files, "TELEFONE_VEI", Telefone);
    isStrategy.ADICIONAR(files, "PLACA_VEI", Placa);
    isStrategy.ADICIONAR(files, "CHASSI_VEI", Chassi);
    isStrategy.ADICIONAR(files, "ANO_VEI", Ano);
    isStrategy.ADICIONAR(files, "COR_VEI", Cor);
    isStrategy.ADICIONAR(files, "MODELO_VEI", Modelo);
    isStrategy.ADICIONAR(files, "CRV_VEI", Crv);
    isStrategy.ADICIONAR(files, "RENAVAM_VEi", Renavam);
    isStrategy.ADICIONAR(files, "OBS_VEI", Obs);
    isStrategy.ADICIONAR(files, "PRECO_VEI", Preco);
    isStrategy.ADICIONAR(files, "POTENCIA_VEI", Potencia);
    isStrategy.ADICIONAR(files, "TORQUE_VEI", Torque);
    isStrategy.ADICIONAR(files, "KM_VEI", Km);
    isStrategy.ADICIONAR(files, "CABINE_VEI", Cabine);
    isStrategy.ADICIONAR(files, "REL_DIFERENCIAL_VEI", Diferencial);
    isStrategy.ADICIONAR(files, "ENT_EIXO_VEI", Eixo);
    isStrategy.ADICIONAR(files, "CAP_COMBUSTIVEL_VEI", Combustivel);
    isStrategy.ADICIONAR(files, "OPC_VEI", Opc);
    isStrategy.ADICIONAR(files, "TIL_ANUNCIO_VEI", Titulo);
    isStrategy.ADICIONAR(files, "TIP_SUSPENSAO_VEI", Suspensao);
    isStrategy.ADICIONAR(files, "INF_VEI", Informacoes);
    isStrategy.ADICIONAR(files, "MARCA_VEI", Fabricante);
    isStrategy.ADICIONAR(files, "TIPO_VEI", Tipo);
    try {
      let Cadastrado = await CriarNovoAnuncio(files);
      if (Cadastrado) {
        alert(Cadastrado);
        setLoading(false);
        Navigate("/administrador");
        window.scrollTo(0, 0);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  let filtroDahs = async function (
    Modelo,
    Fabricante,
    Valor,
    Ativo,
    Data,
    negociacao
  ) {
    setLoading(true);
    try {
      let anuncios = await dashboardFiltro(
        Modelo,
        Fabricante,
        Valor,
        Ativo,
        Data,
        negociacao
      );
      setAnuncio(anuncios);
      setLoading(false);
      setError({ status: false, menssage: "" });
    } catch (error) {
      setLoading(false);
      setError({
        status: true,
        menssage:
          "Aviso, não foi encontrado nenhum anuncio correspondente a sua pesquisa . Limpe seus filro de pesquisa :)",
      });
      setLoading(false);
      setTimeout(async () => {
        document.location.reload();
      }, 5000);
    }
  };
  let BuscarInformacoes_sit = async (placa) => {
    setLoading(true);
    let informacoes = await informacoes_sit(placa);
    setLoading(false);
    return informacoes.data.Objeto;
  };
  let Buscar_Imagem = async (id) => {
    try {
      let imagems = await Buscar(id);
      setImagem(imagems);
    } catch (error) {
      console.log(error);
    }
  };
  let getListMsg = (params) => {
    socket.emit("getList", {
      id: params,
    });
    socket.on("getList", (data) => {
      setListMenssage(data);
    });
  };
  let delChat = (id, room) => {
    alert("delCat");
    socket.emit("delChat", {
      id: id,
      room: room,
    });
    socket.on("delChat", (data) => {
      setListMenssage(data);
    });
  };
  let BuscarTodosMensagens =(state) => {
    // let resultado = await BuscarTodasPropostas();
    socket.emit("proposta")
    socket.on("proposta", (data) => {
      console.log('=======',data)
       state(data)
    })
  };
  let buscarTodasPropostasDb = async (state) =>{
     if(state){
        try {
           let propostas = await BuscarTodasPropostas()
           state(propostas)
        } catch (error) {
            alert('Erroooooooooooooooooooooooooooor')      
        }
    }
  }
  return (
    <AuthContext.Provider
      value={{
        PageLoading,
        buscarTodasPropostasDb,
        Loading,
        BuscarInformacoes_sit,
        BuscarTodosanuncios,
        BuscarAnuncio,
        Salvar,
        EditarStatus,
        ApagarAnuncio,
        anuncios,
        NovoAnuncio,
        ValidarCampos,
        filtroDahs,
        Buscar_Imagem,
        imagem,
        error,
        BuscarInformacoes,
        QtsAnuncios,
        Negociacao,
        getListMsg,
        message,
        delChat,
        listProposta,
        BuscarTodosMensagens,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
