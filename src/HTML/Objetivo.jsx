import { Link } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'

import React from 'react'
import '../CSS/Tudo.css'
import './../CSS/Objetivo.css'

import Zitche from "./../img/Objetivo/Caminus_zitche.png"

function Objetivo() {
  return (
    <>
      <body>
      <Header />
        <main>
          <section className='imgzitche'>
            <figure className='figzitche'>
              <img src={Zitche} alt="Imagem Caminus Zitche"/>
            </figure>          
          </section>
          <section className='textoobj'>
            <p>Temos como objetivo, ajudar produtores caseiros de morango! Com nossa estufa facilitamos o cultivo de pessoas com uma rotina muito cheia e que não conseguem monitorar sempre de perto o plantio, com isso acabam não tendo o resultado esperado ou até mesmo não alcaçam a etapa do cultivo pois o fruto vem a morrer, pois o morrango requer uma atenção e um cuidado muito alto, e frequente, mas com nossa estufa cuidamos disso e sem o uso de agrotóxicos tendo um fruto 100% saudável pra o consumo.</p>
          </section>
        </main>

        <Footer />
        
      </body>
      </>
  )
}

export default Objetivo