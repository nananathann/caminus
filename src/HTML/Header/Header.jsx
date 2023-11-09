import { Link, NavLink } from 'react-router-dom'
import { useState } from "react"
import React from 'react'

import { List, X } from "@phosphor-icons/react"

import Logo_Header from "../../img/logoheader.png"
import Cartinha from "../../img/Cartinha.png"
import './Header.css'
import Caminus from './../../img/Caminus.png'

function Header() {

    const [abrirFechar, setAbrirFechar] = useState(false)

    function handleAbrirFecharMenu() {
        if (abrirFechar) {
            setAbrirFechar(false)
            return
        }

        setAbrirFechar(true)
    }

    return (
        <header>

            <div className="menu_mobile">
                <div className="botao_menu">
                    <button onClick={handleAbrirFecharMenu}>{abrirFechar == true ? <X size={20} /> : <List size={20} />}</button>
                    <div className='imgs_header'>
                        <img src={Caminus} alt="" id='img1_header'/>
                        <img src={Logo_Header} alt="" id='img2_header' />
                    </div>
                </div>


                <div className={`menu ${abrirFechar == true ? "" : "close"}`}>
                    <nav>
                        <ul>
                            <NavLink><Link to={'/'}>Tela Inicial </Link>/</NavLink>
                            <NavLink><Link to={'/ideia'}>Ideia</Link></NavLink>
                            <NavLink><Link to={'/objetivo'}>Objetivo</Link></NavLink>
                            <NavLink><Link to={'/explicacao'}>Explicação</Link></NavLink>
                            <NavLink><Link to={'/equipamentos'}>Equipamentos</Link></NavLink>
                            <NavLink><Link to={'/contato'}>Contato</Link></NavLink>
                        </ul>

                        <a href="https://doc-0k-30-prod-03-apps-viewer.googleusercontent.com/viewer2/prod-03/pdf/bbcunj2h3o3odbcl8mq10gcfod80dgdk/9u5fg0233av935m1ea7bsd9icsjquf7t/1692281850000/3/107439570428730947018/APznzaZO92KL9EQdCxye3yIklaf-Kd9e-E-TfQE9ztNlySuddTpUQ0ItgyBHM9tCsp2Ix_8rORVhCbjogI28pLAOU4YRupjLNrIMHgoPpi7KiF3danBeNlUigdmW27xdVaGDXcMV9A00irUAc6rJJTqbP0l0d39yjsvrQ4PybP-tE2I5YL90JP2NFTYqtZ1FORjD0y7y4yuP7pRgB45QyJe_K_MEBE81ftP9PQtSrfYEGSUH9cfgqDYYr1MaMVO69i1EOywdozSY0PyH12YuKM7I9ntL7M-S_ltmWhAVm3ADFHVxzJXqyBXjUqpioc1o7Yfw2f6AyzqIzsc6VIU7S3zK0kQ_-BAugTnWRrc-noQGHR6dnfWsQTDP7kAGogFcvpCHyeQJ24UASZ7aVapexkelLbSiTaSN-g==?authuser=1&nonce=erjdhpdi60h0k&user=107439570428730947018&hash=37ggi7tbh4qb2hdigeb8omq6dkl1lk9h">PDF DO PROJETO</a>
                    </nav>

                </div>
            </div>

            <div className="menu_desktop">
                <div className="menun">
                    <div className="imagens_logo">
                        <div className="logo"></div>
                        <img src={Logo_Header} alt="Logo Caminus" />
                    </div>

                    <div id="navegacao">
                        <nav>
                            <ul>
                                <li><a href={'/'}>Tela Inicial</a></li>
                                <li><a href={'/ideia'}>Ideia</a></li>
                                <li><a href={'/objetivo'}>Objetivo</a></li>
                                <li><a href={'/explicacao'}>Explicação</a></li>
                                <li><a href={'/equipamentos'}>Equipamentos</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="cartinha">
                        <a href={'/contato'}><img src={Cartinha} alt="Imagem de carta" /></a>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header