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
                            <Link to={'/'}>Tela Inicial </Link>
                            <Link to={'/ideia'}>Ideia</Link>
                            <Link to={'/objetivo'}>Objetivo</Link>
                            <Link to={'/explicacao'}>Explicação</Link>
                            <Link to={'/equipamentos'}>Equipamentos</Link>
                            <Link to={'/contato'}>Contato</Link>
                        </ul>

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
                                <li><Link to={'/'}>Tela Inicial </Link></li>
                                <li><Link to={'/ideia'}>Ideia</Link></li>
                                <li><Link to={'/objetivo'}>Objetivo</Link></li>
                                <li><Link to={'/explicacao'}>Explicação</Link></li>
                                <li><Link to={'/equipamentos'}>Equipamentos</Link></li>
                                <li><Link to={'/contato'}>Contato</Link></li>
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