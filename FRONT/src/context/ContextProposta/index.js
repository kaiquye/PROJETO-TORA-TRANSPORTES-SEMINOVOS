import { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { EnviarProposta } from "../../Server/Server/EnviarProposta";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  useEffect(() => {
    //A CONEXÃO É ABERTA SOMENTE UMA VEZ QUANDO A PAGINA É RENDERIZADA OU CASO O  STATE MUDE.
    ConectarIo();
  }, []);

  const [socket, setSocket] = useState(null);
  const [mensagems, setMensagems] = useState();
  const [email, setEmail] = useState();
  const [usuario, setusuario] = useState();
  const [escolha, setEscolha] = useState("");
  const [msg, setMsg] = useState();
  const [id, setId] = useState();
  const [error, setError] = useState({ status: false, menssage: "" });
  const [Loading, setLoading] = useState(false);

  function ConectarIo() {
    if (socket === null) {
      setSocket(io("ws://localhost:8010", { transports: ["websocket"] }));
    }
  }

  function SelecionarSala() {
    socket.emit("select_room", {
      room: email,
    });
  }

  function EnviarMsg() {
    socket.emit("msg", {
      msg: msg,
      room: email,
      user: usuario ? usuario : "Cliente",
      id: id,
    });
    socket.on("msg", (data) => {
      console.log(data);
      setMensagems(data);
    });
  }

  function ApagarMensagemChat() {
    if (window.confirm("Apagar todas as mensagens ?")) {
      socket.emit("delChat", {
        id: id,
        room: email,
      });
      document.location.reload();
    }
  }
  async function EnviarPropostaFormulario(
    nome,
    email,
    Telefone,
    Modelo,
    Proposta,
    id_vei
  ) {
    try {
      setLoading(true);
      let resultado = await EnviarProposta(
        nome,
        email,
        Telefone,
        Modelo,
        Proposta,
        id_vei
      );
      console.log(resultado)
      if (resultado.ok) {
        socket.emit("proposta", {
          nome: nome,
          telefone: Telefone,
          proposta: Proposta,
          email: email,
          modelo: Modelo,
          id: id_vei,
        });
        setTimeout(() => {
          setLoading(false);
          document.location.reload();
          alert("Proposta enviada.");
        }, 3002);
      }else{
        setError({
          status: true,
          mensagems: resultado.mensagem,
        });
      }
    } catch (error) {
      alert('erooooooooooooooooooooooooo')
      setLoading(false);
      setError({
        status: true,
        mensagems: "Erro : Não foi possivel cadastrar sua proposta",
      });
    }
  }

  return (
    <AuthContext.Provider
      value={{
        ConectarIo,
        EnviarMsg,
        setMensagems,
        setEmail,
        setusuario,
        mensagems,
        escolha,
        SelecionarSala,
        setEscolha,
        email,
        setMsg,
        msg,
        setId,
        error,
        id,
        ApagarMensagemChat,
        Loading,
        EnviarPropostaFormulario,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
