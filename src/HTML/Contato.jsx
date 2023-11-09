import { Link } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'

import React from 'react'
import '../CSS/Tudo.css'
import './../CSS/Contato.css'

import QR from "../img/Contatos/QR_atendimento.png"
import qrg from "../img/Contatos/QR_Glauco.png"
import Glauco from "../img/Contatos/Glauco.png"
import qrm from "../img/Contatos/QR_Matheus.png"
import Matheus from "../img/Contatos/Matheus.png"
import qrp from "../img/Contatos/QR_Pedro.png"
import Pedro from "../img/Contatos/Pedro.png"

function Contato() {
  return (
    <>
      <body>
        <Header />
        <main>
          <section className="naveg">
            <div className='navega'>
              <h1 className='Titulos'>Atendimento</h1>
              <p>De segunda a sexta feira, de 10:30 às 16:00
                Por e-mail: caminuszycie@gmail.com</p>
            </div>
            <div className='qrnaveg'>
              <figure>
                <img src={QR} alt="Imagem QR Code" />
              </figure>
            </div>
          </section>

          <section>
            <div className='header-desenvolvedor'>
              <h2 className='Titulos'>Contatos pessoais - Desenvolvedores</h2>
            </div>
            <div className='desenvolvedores'>
              <div className='textos'>
                <h3 className='Titulos'>glaucosanto@outlook.com</h3>
                <p>Glauco Santos, 17 anos, e estudante do Centro Universitário Adventista de São Paulo - SP, no curso de TI, principal responsável pela parte do projeto físico, sendo a estrutura da estufa e a parte elétrica do circuito e sistema</p>
              </div>
              <div className='imgs'>
                <figure className='pessoas'><img src={Glauco} alt="Imagem do Glauco" /></figure>
                <figure className='codes'><img src={qrg} alt="Imagem do QR Code" /></figure>
              </div>
            </div>
            <div className='desenvolvedores2'>
              <div className='textos'>
                <h3 className='Titulos'>soare.math@gmail.com</h3>
                <p>Matheus Sores , 19 anos,  e estudante do Centro Universitário Adventista de São Paulo - SP, no curso de TI, tem como papel ser o líder da equipe e ser o principal programador de automação</p>
              </div>
              <div className='imgs'>
                <figure className='pessoas'><img src={Matheus} alt="Imagem do Matheus" /></figure>
                <figure className='codes'><img src={qrm} alt="Imagem QR Code" /></figure>
              </div>
            </div>
            <div className='desenvolvedores'>
              <div className='textos'>
                <h3 className='Titulos'>pedrohcbx@gmail.com</h3>
                <p>Pedro Barbosa , 17 anos,  e estudante do Centro Universitário Adventista de São Paulo - SP, no curso de TI, o principal da equipe na área de estilização e produção do  site.</p>
              </div>
              <div className='imgs'>
                <figure className='pessoas'><img src={Pedro} alt="Imagem do Pedro" /></figure>
                <figure className='codes'><img src={qrp} alt="Imagem QR Code" /></figure>
              </div>
            </div>
          </section>
        </main>

        <Footer />

      </body>
    </>
  )
}

export default Contato