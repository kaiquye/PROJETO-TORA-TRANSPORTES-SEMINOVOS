import { io } from "socket.io-client";
import { useState } from "react";
import { useRef, useEffect } from "react";
import './Style/proposta.css'
import img from './Style/vendedor.png'
import { useParams } from "react-router-dom";

export default function Proposta() {
  const [email, setEmail] = useState();
  const [msg, setMsg] = useState();
  const [user, setUser] = useState();

  const ref_chat = useRef();
  const ref_contato = useRef();
  const ref_buttons = useRef();
  const ref_email = useRef();

  let { modelo, TIL_ANUNCIO } = useParams();

  const [mensagems, setMensagems] = useState();

  let socket = io("ws://localhost:8010", { transports: ["websocket"] });

  socket.on('msg', (data) => {
    setMensagems(data)
  })

  return (
    <section className="section-main-proposta">
      <div className="div-proposa">
        <div ref={ref_buttons} className="escolha-proposta">
          <button className="button1-proposta" onClick={() => {
            ref_buttons.current.style.display = "none";
            ref_email.current.style.display = "flex";
          }} >
            Conversar por chat
          </button>
          <button className="button2-proposta"
            onClick={() => {
              ref_buttons.current.style.display = "none";
              ref_contato.current.style.display = "flex";
            }}
          > Quero que um vendedor entre em contato comigo.
          </button>
        </div>
        <section
          className="escolha-email-proposta"
          ref={ref_email}
          style={{ display: "none" }}
        >
          <input className="email-proposta"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-MAIL"
          />
          <button className="button-email-proposta"
            onClick={() => {
              if (!email) {
                return alert("E-mail não pode ser nullo");
              }
              socket.emit("select_room", {
                room: email
              });
              ref_chat.current.style.display = "flex";
              ref_email.current.style.display = "none";
            }}
          >
            Entrar na sala
          </button>
        </section>
        <section
          className="chat-proposta"
          style={{ display: "none" }}
          ref={ref_chat}>
          <main className="main-mensagems">
          <button className='voltar-btn-proposta'>Voltar</button>
            <p>Conversar com um vendedor</p>
            <div className="nome-div-proposta" >
              <p>Digite seu nome  </p>
              <input type='text' placeholder="Digite seu nome" onChange={(e) => setUser(e.target.value)} />
            </div>
            <div className="div-todas-msg">
              <div className='mensagem-proposta'>
                {mensagems &&
                  mensagems.map((men, key) => (
                      <div className='mensagem-proposta-tl'>
      <label className={'env'}  > <img src={img} style={{width : '15px'}} /> <strong>{men.user}</strong> <br/> {men.msg} </label>
                      </div>
                  ))
                }
              </div>
            </div>
            <div className="div-enviar-msg">
              <input
                type="text"
                placeholder="digite aqui"
                onChange={(e) => setMsg(e.target.value)}
              />
              <button onClick={() => {
                socket.emit('msg', {
                  msg: msg,
                  room: email,
                  user: user
                })
              }}>Enviar mensagem</button>
            </div>
          </main>
        </section>
        <section
          className="contato-proposta"
          style={{ display: "none" }}
          ref={ref_contato}
        >
          <form>
            <input
              type={"text"}
              placeholder="E-MAIL"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type={"text"}
              placeholder="PROPOSTA"
              onChange={(e) => setMsg(e.target.value)}
            />
            <button type="submit">Enviar proposta</button>
          </form>
        </section>
      </div>
    </section>
  );
}
