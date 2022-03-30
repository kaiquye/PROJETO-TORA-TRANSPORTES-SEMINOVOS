
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import lixeira from './excluir.png'
import voltar from './de-volta.png'
import './style.css'


export function Chat(props) {

  const Navigate = useNavigate();
  const ref_chat = useRef();
  const ref_email = useRef();

  return (
    <section className='section-main-proposta' >
      <div className='email-chat-propostas' style={{ display: props.usuario === 'Vendedor' ? 'none' : 'flex' }} ref={ref_email}>
        <input className='email-sala' type='email' placeholder='E-MAIL'
          onChange={(e) => props.setEmail(e.target.value)} />
        <button className='iniciar-bate-papo' onClick={() => {
          if (!props.email) return alert('digite um email valido.')
          ref_chat.current.style.display = 'flex'
          ref_email.current.style.display = 'none'
          props.setId(props.id)
          props.SelecionarSala()
        }}  >Iniciar bate-papo</button>
      </div>
      <main ref={ref_chat} style={{ display: props.usuario === 'Vendedor' ? 'flex' : 'none' }} className='main-proposta'>
        <label style={{ textAlign: 'center', color: '#4e4e4e', fontWeight: '600' }} >Você tem 24Hrs para ser respondido. <br /> Apos esse periodo suas mensagems serão apagadas</label>
        <div className='input-nome-cliente-proposta' >
          <input
            type="text"
            placeholder={props.usuario}
            onChange={(e) => props.user(e.target.value)}
          />
        </div>
        <div className='campo-1-mensagens-proposta' >
          <section className='campo-2-mensagens-proposta'>
            <div className='campo-mensagens-proposta'>
              {props.mensagems &&
                props.mensagems.map((mensagem) => (
                  <div className={mensagem.user === 'Vendedor' ? 'mensagem-vendedor' : 'mensagem-cliente'}
                  >
                    {console.log(mensagem)}
                    <p><stron>{mensagem.user}</stron></p>
                    <label>{mensagem.msg}</label>
                  </div>
                ))
              }
            </div>
          </section>
          <section className='mensagem-input-section'>
            <div className='input-mensagem'>
              <input
                onChange={(e) => props.setMsg(e.target.value)}
                type="text"
                placeholder="mensagem...."
              />
            </div>
          </section>
        </div>
        <div className='buttons-propostas' >
          <div className='buttons-conversa'>
            <button
              onClick={() => {
                props.ApagarMensagemChat();
              }}
              className='button-apagar-'
            ><img src={lixeira} style={{ width: '30px' }} /></button>
            <button style={{ border : '7px', backgroundColor : 'white' }}
              className='button-voltar-'
              onClick={() => {
                Navigate('/home')
              }}
            ><img src={voltar} style={{ width: '30px'}} /></button>
          </div>
          <button className='button-enviar'
            onClick={() => {
              if (!props.msg) return alert('mensagem vazia');
              props.ConectarIo()
              props.EnviarMsg();
            }}
          >
            Enviar mensagem
          </button>

        </div>
      </main>
    </section>
  );
}
