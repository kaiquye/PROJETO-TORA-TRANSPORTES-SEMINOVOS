import { useContext, useReducer, useRef } from "react";
import { AuthContext } from "../context/ContextProposta";
import { Escolha } from "../components/Proposta/Escolha";
import { io } from "socket.io-client";
import { Chat } from "../components/Proposta/Chat";
import { useParams } from "react-router-dom";
import img from '../components/BannerPgPrincipal/image/men.jpg'
import logo from '../components/NavBar/black-logo.png'
import './Style/proposta2.css'
import { Formulario } from "../components/Formulario-Proposta";
export function Proposta(props) {


  let { modelo } = useParams();
  let { id_vei } = useParams();

  const ref_img = useRef()
  const ref_chat = useRef()
  const ref_formulario = useRef()

  const {
    EnviarMsg,
    setMensagems,
    setEmail,
    setusuario,
    mensagems,
    SelecionarSala,
    escolha,
    email,
    setEscolha,
    setMsg,
    msg,
    Loading,
    id,
    ApagarMensagemChat,
    setId,
    EnviarPropostaFormulario,
    ConectarIo,
    error
  } = useContext(AuthContext);
    
  return (
    <section className="princial-proposta">
      <div className="img-proposta"> 
         <p>Os melhores seminovos do mercado <br/> você encontrar aqui na Tora Seminovos</p>
        <img src={img}  />
      </div>
      <main className="conteudo-proposta">
        <div className="buttons-escolhar-proposta" ref={ref_img} >
          <img src={logo}  ref={ref_img} />
          <Escolha ref_chat={ref_chat} ref_img={ref_img} ref_formulario={ref_formulario} />
        </div>
        <div  ref={ref_chat} style={{ display: 'none', width : '100%' }} >
          <Chat SelecionarSala={SelecionarSala} 
            user={setusuario} ConectarIo={ConectarIo} msg={msg} ApagarMensagemChat={ApagarMensagemChat}  id={id_vei} usuario={'Cliente'} setId={setId} setMsg={setMsg} mensagems={mensagems}
            EnviarMsg={EnviarMsg} email={email} setEmail={setEmail} setMensagems={setMensagems} />
        </div>
        <div ref={ref_formulario} style={{ display: 'none', width : '100%', height : '100%' }} >
          <Formulario error={error} Loading={Loading} EnviarPropostaFormulario={EnviarPropostaFormulario} />
        </div>
      </main>
    </section>
  );
}
