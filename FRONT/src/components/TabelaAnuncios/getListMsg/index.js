import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import './style.css'
import imagem from './do-utilizador.png'
import  chat from './chat.png'

export function ListMsg(props) {


    return (
        <section className="section-msg">
             <h4 style={{textAlign : 'center', paddingLeft : '0px', marginLeft : '0px'}} > <img src={chat} style={{ width: '25px' }} /> Novas mensagens. </h4>
            {props.message &&
                props.message.map((mensagem) => (
                    <>
                        <div className="msg">
                            <div>
                                <img src={chat} style={{ width: '15px' }} />
                            </div>
                            <label>  <img src={imagem} style={{ width: '10px' }} /> Enviada por :  <strong> {mensagem.user}  </strong></label>
                            <h4  >Mensagem : {mensagem.msg}</h4>
                            <label> Room :  <strong>{mensagem.room}</strong></label>
                            <div className="button-list-msg">
                                <button className="button-responder">
                                    <Link className="link-responder" to={'/proposta/adm/' + props.modelo + '/' + props.id + '/' + mensagem.room} target='_blank' >
                                        responder
                                    </Link>
                                </button>
                                <button className="button-apagar-msg"
                                    onClick={() => props.delChat(mensagem.id, mensagem.room)} >
                                    X
                                </button>
                            </div>
                        </div>

                    </>
                ))
            }
        </section>
    )
}