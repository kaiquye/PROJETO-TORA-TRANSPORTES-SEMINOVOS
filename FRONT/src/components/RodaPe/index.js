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
          <h2>Av. Ápio Cardoso, 20 - Cincão
Contagem-MG | CEP: 32371-615 </h2>
          <li>(31) 2191-2522</li>
        </ul>
        <ul>
          <h2>Contatos - Filial </h2>
          <li>TRod. Fernão Dias, BR-381 (km 493) - B. Amazonas
Contagem-MG | CEP: 32260-5301</li>
          <li>(31) 3597-1604</li>
          <li>(31) 3592-0834</li>
          <li>(31) 9 9234-3283</li>
        </ul>
      </div>
    </section>
  );
}
