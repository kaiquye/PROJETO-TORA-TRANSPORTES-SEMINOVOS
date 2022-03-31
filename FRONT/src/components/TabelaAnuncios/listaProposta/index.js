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
                  {
                console.log(proposta)
                  }
                  <label><strong>E-mail</strong> {proposta.email || proposta.email_CLI}  </label>
                  <label><strong>interesse : </strong> {proposta.modelo || proposta.modelo_vei} </label>
                  <label><strong>identificação : </strong> {proposta.id || proposta.VEICULO_id}</label>
                  <label style={{ textAlign: 'end' }} ><strong>Contato : </strong> {proposta.telefone}</label>
                  <p><strong>Assunto :</strong> {proposta.proposta}</p>
                  <h3>Nome : {proposta.nome || proposta.nome_CLI}</h3>
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
