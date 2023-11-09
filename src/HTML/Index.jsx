import { Link } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'

import React from 'react'
import '../CSS/Tudo.css'
import './../CSS/Home.css'

function Index() {
  return (
    <>
      <body>
          <Header />
        <main>
          <section id='fundoum'>
            <div className='separar'>
              <div className='texto'>
                <h2 className='titulo'>Oque é  a caminus?</h2>
                <p>O nome caminus vem do latim, e significa estufa, que é basicamente o nosso projeto, uma estufa inteligente que busca ajudar produtores caseiros e que tenham uma rotina muito cheia, assim não conseguem cuidar de seus plantios, mas com nossa estufa tudo isso se resolve! Ela cuida de seus frutos da melhor forma possível, baseada em estudos científicos, ela deixa o ambiente perfeito para alcançar o melhor resultado possível!</p>
              </div>
            </div>
            <div className='separar'>
              <div id='imagemum'></div>
            </div>
          </section>

          <section id='fundodois'>
            <div className='separar'>
              <div id='imagemdois'></div>
            </div>
            <div className='separar'>
              <div className='texto3'>
                <h2 className='titulo'>Cultivo</h2>
                <p>Saiba que a época certa para o plantio é no fim do verão até o final do outono, porém com nossa estufa esse cultivo pode ser feito em qualquer  estação do ano, pois ela conta com um sistema de climatização,  e se for preciso, ativa o sistema de aclimatação, abaixando ou aumetando a temperatura um sistema para adquirir informações da umidade do solo, e caso necessario ativa o sistema de irrigação. </p>
              </div>
            </div>
          </section>

          <section id='fundotres'>
            <div className='separar'>
              <div className='texto2'>
                <h2 className='titulo'> Circuito</h2>
                <p>Com oque conta a nossa estufa? nossa estufa utiliza um sensor de temperatura para detectar a temperatura do ambiente, caso a temperatura esiver elevada, um sistema de ventilação com coolers é ativado, caso a temperatura for baixa uma lâmpada halógena é ligada, contamos também com um sensor de umidade do solo,  caso o solo esteja seco é ativada uma bomba de água que leva a água armazenada no reservatório de água até as o sistema de irrigação, um motor para abrir e fechar a tampa da estufa, que será toda feita em uma base de madeira, um arduíno uno para controlar todos esses componentes, e uma fonte de 12v para ligar todo este cirrcuito.</p>
              </div>
            </div>
            <div className='separar'>
              <div id='imagemtres'></div>
            </div>
          </section>
        </main>

        <Footer />
        
      </body>
    </>

  )
}

export default Index