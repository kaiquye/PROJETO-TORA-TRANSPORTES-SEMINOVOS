import "./style.css";

export function RadaPe() {
  return (
    <section className="section_rodape">
      <div className="mensagem-rodape">
        <div>
          <h4>
            Uma empresa do Grupo Tora, <br /> um dos maiores operadores
            logísticos do país. <br /> Adquira o seu seminovo com qualidade,
            segurança <br />  e as melhores condições do mercado.
          </h4>
        </div>
        <div>
          <button>Falar com um vendedor</button>
          <button>Enviar e-mail</button>
        </div>
      </div>
      <div className="contatos-rodape">
        <ul>
          <h2>Contatos - Matriz </h2>
          <li>Teste 1</li>
          <li>Teste 1</li>
          <li>Teste 1</li>
        </ul>
        <ul>
          <h2>Contatos - Filial </h2>
          <li>Teste 1</li>
          <li>Teste 1</li>
          <li>Teste 1</li>
          <li>Teste 1</li>
        </ul>
      </div>
    </section>
  );
}
