import Img1 from '../../image/images/hand.png'
import Img2 from '../../image/images/street.png'
import Img3 from '../../image/images/truck.png'
import Img4 from './imagem/maps.png'
import Img5 from './imagem/confiar.png'

import './Style.css'

export function Sobre() {


    return (
        <div className="div_SobreHome">
            <div className="div_condicoes_SobreHome">

                {/* <div className='box-condicoes'>
                    <img src={Img3} />
                    <label>Plano de manutenção <br /> de fábrica</label>
                </div>
                <div className='box-condicoes'>
                    <img src={Img5} />
                    <label>Plano de manutenção <br /> de fábrica</label>
                </div> */}
            </div>
            <div className='div_local_SobreHome'>
                <div>
                    <div className='div_endereço_SobreHome'>
                        <ul>
                            <li><h1> <img src={Img4} style={{ height: '30px', width: '30px' }} /> MATRIZ </h1></li>
                            <li>Av. Ápio Cardoso, 20 - Cincão</li>
                            <li>Contagem-MG | CEP: 32371-615</li>
                            <li><h1> <img src={Img4} style={{ height: '30px', width: '30px' }} /> FILIAL </h1></li>
                            <li>Rod. Fernão Dias, BR-381 (km 493) - B. Amazonas</li>
                            <li>Contagem-MG | CEP: 32260-530</li>
                        </ul>
                    </div>
                </div>

                <div>

                </div>
            </div>
            <div className='div_maps_SobreHome'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15003.775197066048!2d-44.051447!3d-19.926773!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfa4c68c939485dbf!2sTORA%20TRANSPORTES%20-%20MATRIZ!5e0!3m2!1spt-BR!2sbr!4v1646921417556!5m2!1spt-BR!2sbr"></iframe>
                </div>
        </div>
    )
}