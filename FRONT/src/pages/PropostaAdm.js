import { useContext, useReducer, useRef } from "react";
import { AuthContext } from "../context/ContextProposta";
import { Escolha } from "../components/Proposta/Escolha";
import { io } from "socket.io-client";
import { Chat } from "../components/Proposta/Chat";
import { useParams } from "react-router-dom";
import { runWithAdal } from "react-adal";
import { authContext, getToken } from "../adalConfig/index";
import { useState, useEffect } from "react";

export function PropostaAdm() {
    const [TROCADEPOIS, setTROCA] = useState(false)

    useEffect(() => {
        const DO_NOT_LOGIN = false;
        runWithAdal(
            authContext,
            () => {
                setEmail(room)
                setusuario('Vendedor')
                setTROCA(true)
            },
            DO_NOT_LOGIN
        );
    }, [])


    let { room } = useParams()
    let { modelo } = useParams();
    let { id_vei } = useParams();
    const ref_chat = useRef()
    const ref_button = useRef()

    const {
        EnviarMsg,
        setMensagems,
        setEmail,
        setusuario,
        mensagems,
        SelecionarSala,
        escolha,
        responder,
        email,
        setEscolha,
        setMsg,
        msg,
        ApagarMensagemChat,
        id,
        setId
    } = useContext(AuthContext);
    return (
        <section className="princial-proposta">
            <div className="img-proposta">
                <p>Lembre-se de apagar a conversar quando sair</p>
            </div>
            <div className="conteudo-proposta" >
                <div className="buttons-escolhar-proposta" ref={ref_button} >
                    <button
                        onClick={() => {
                            ref_button.current.style.display = 'none'
                            ref_chat.current.style.display = 'flex'
                            SelecionarSala();
                        }}

                    >Entrar na sala</button>
                </div>

                {TROCADEPOIS === true ? <div style={{ display: 'flex' }} >
                    <div ref={ref_chat} style={{ display: 'none' }}>
                        <Chat
                            user={setusuario} ApagarMensagemChat={ApagarMensagemChat} usuario='Vendedor' msg={msg} id={id_vei} setId={setId} setMsg={setMsg} mensagems={mensagems}
                            EnviarMsg={EnviarMsg} email={email} setEmail={setEmail} setMensagems={setMensagems} />
                    </div>

                </div>
                    :
                    <h1>Carregando...</h1>
                }
            </div>
        </section>
    );
}
