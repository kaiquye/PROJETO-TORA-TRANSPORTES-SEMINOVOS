import "./style.css";
import { useState } from "react";
import { useParams } from "react-router";
import { LoadingFormulario } from "./pageLoading/index";
import { PageError } from "./pageError";

export function Formulario(props) {
  const [nome, setNome] = useState(null);
  const [email, setEmail] = useState(null);
  const [Telefone, setTelefone] = useState(null);
  const [Modelo, setModelo] = useState(null);
  const [Proposta, setProposta] = useState(null);

  let { id_vei } = useParams();

  function CheckCpm() {
    if (
      nome === null ||
      email === null ||
      Telefone === null ||
      Modelo === null ||
      Proposta === null
    ) {
      return false;
    }
    return true;
  }

  return (
    <section className="section-form-proposta">
      {props.error.status === true ? 
        <PageError  msg={props.error.mensagems} />
       : 
        <div className="div-form-proposta">
          {props.Loading ? (
            <LoadingFormulario />
          ) : (
            <form
              className="form-proposta"
              onSubmit={(e) => {
                e.preventDefault();
                console.log(nome, email, Telefone, Modelo, Proposta, id_vei);
                if (CheckCpm()) {
                  props.EnviarPropostaFormulario(
                    nome,
                    email,
                    Telefone,
                    Modelo,
                    Proposta,
                    id_vei
                  );
                } else {
                  alert("Aviso : Preencha todos os campos.");
                }
                CheckCpm();
              }}
            >
              <p>Nova proposta</p>
              <div>
                <input
                  type="text"
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Nome : Kaic"
                />
              </div>
              <div>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail : fullpower@gmail.com"
                />
              </div>
              <div>
                <input
                  type="text"
                  onChange={(e) => setTelefone(e.target.value)}
                  placeholder="Telefone : (31)9932-4343"
                />
              </div>
              <div>
                <input
                  type="text"
                  onChange={(e) => setModelo(e.target.value)}
                  placeholder="Modelo : Scania R460 2017"
                />
              </div>
              <div>
                <textarea
                  onChange={(e) => setProposta(e.target.value)}
                  placeholder="Descrição sobre o assunto : Tenho interesse no veiculo anunciado no seu site, gostaria de ser contactado."
                />
              </div>
              <button>Enviar</button>
            </form>
          )}
        </div>
      }
    </section>
  );
}
