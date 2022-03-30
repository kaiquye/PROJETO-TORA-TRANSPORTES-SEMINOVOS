import "./style.css";
import {useRef} from 'react'

export function Escolha(props) {

  const ref_escolha = useRef();

  return (
    <main className="principal-button-escolha ">
        <div  className="conteudo-button-escolha" ref={ref_escolha}>
          <button className="button-chat"
            onClick={() => {
              props.ref_formulario.current.style.display = "none";
              props.ref_chat.current.style.display = "flex";
              ref_escolha.current.style.display = 'none'
              props.ref_img.current.style.display = 'none'
            }}
          >
            CHAT EM TEMPO REAL
          </button>
          <button className="button-formulario"
            onClick={() => {
              props.ref_chat.current.style.display = "none";
              props.ref_formulario.current.style.display = "flex";
              ref_escolha.current.style.display = 'none'
              props.ref_img.current.style.display = 'none'
            }}
          >
            PREENCHER FORMULARIO
          </button>
        </div>
    </main>
  );
}
