import "./style.css";
import img from './solidao.png'

export function ListaPropostas(props) {
  return (
    <section className="lista-propostas">
      <div className="lista-pr">
        {props.listProposta ?
          <div className="lista-propostas-">
            {
              props.listProposta.map((proposta) => (
                <div className="div-mensagem">
                  <label><strong>E-mail</strong> {proposta.nome}  </label>
                  <label><strong>interesse : </strong> {proposta.modelo} </label>
                  <label><strong>identificação : </strong> {proposta.id}</label>
                  <label style={{ textAlign: 'end' }} ><strong>Contato : </strong> {proposta.email}</label>
                  <p><strong>Assunto :</strong> {proposta.proposta}</p>
                  <div className='button-list-propostas'>
                    <button>RESPONDER</button>
                    <button>EXCLUIR</button>
                  </div>
                </div>
              ))
            }
          </div>
          :
          <div className='solidao'>
             <label>Suas propostas ainda não foram carregadas, clique para carregar novas mensagens.</label>
            <img src={img} />
          </div>
        }
      </div>
    </section>
  );
}
