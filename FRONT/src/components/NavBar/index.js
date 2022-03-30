import './style.css'
import { useRef } from 'react'
import { Link } from 'react-router-dom';
import imgLogo from './black-logo-tora.png'

export function NavBar() {

    const ref = useRef();

    return (
        <>
            <section className='section_NavBar'>
                <div className='logo_NavBar'>
                    <div>
                        <img src={imgLogo} />
                    </div>
                    <button className='button_menu_NavBar'
                        onClick={() => {
                            if (ref.current.style.display === "none") {
                                return ref.current.style.display = "flex"
                            }
                            return ref.current.style.display = "none"
                        }
                        }>
                        MENU
                    </button>
                </div>
                <div className='lista_NavBar'>
                    <div>
                        <ul>
                            <li><Link className='link' to='/home'>Home</Link></li>
                            <li><Link className='link' to='/quemsomos' target={'_blank'}>Quem Somos</Link></li>
                            <li><Link className='link' to='/contato' target={'_blank'}>
                                    Entrar em contato
                            </Link>
                            </li>
                            <li><Link className='link' to='/administrador' target={'_blank'}>Sou Administrador</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='menu_cell_NavBar'>
                    <div ref={ref} className='menu_display_cell_NavBar'
                        style={{ transition: 'all 1.5s' }}>
                        <ul>
                            <li>Quem somos</li>
                            <li>Semi novos</li>
                            <li>Entrar em contato</li>
                            <li>Sou Administrador</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}