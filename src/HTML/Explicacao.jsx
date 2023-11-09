import { Link } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'

import React from 'react'
import '../CSS/Tudo.css'
import './../CSS/Explicacao.css'

import Confuso from '../img/Explicacao/confuso.png'

function Explicacao() {
  return (
    <>
      <Header />

      <main>
        <section className='explicacao'>
          <div id='texto-img'>
            <h1 className='titulos'>Explicação:</h1>
            <img src={Confuso} alt="" />
          </div>
          <div>
            <p>Com base numa ascensão da automação em sistemas de agricultura, nosso grupo, de forma conjunta decidiu iniciar uma estufa totalmente automatizada, com fins de cultivar morangos. Para que tenha o melhor aproveitamento e maior qualidade no cultivo, usaremos um sensor de umidade do solo, para detectar quando for preciso a planta ser irrigada, o morango prefere solos ácidos, com um ph na faixa de 5,5 a 6,0, caso precise aumentar o nível de água no solo, será ativado o nosso sistema de irrigação, já imposto no sistema da estufa, também usaremos um sensor de temperatura para podermos aclimatar a estufa de acordo com a necessidade da planta, que no caso é entorno de 13°C a 26°C, caso seja necessário aumentar a temperatura, uma lâmpada será acesa, assim aumentando a temperatura do local, caso precise abaixar a temperatura será ativado o nosso sistema de refrigeração, composto por cooler's, além de toda a estrutura da estufa já ser apropriada para o plantio, tendo uma profundidade média de 20cm, e a distância de canteiros se aproxima dos 45cm, além de ter um terreno levemente inclinado, já que os morangos preferem terrenos que não ultrapassem a faixa de 2% a 3% de inclinação do solo.</p>
          </div>
        </section>

        <section className='fontes'>
          <div className='text-font'>
            <h2 className='titulos'>Fontes</h2>
          </div>
          <div className='video-site'>
            <div className='videos'>
              <a href="https://www.youtube.com/watch?v=X6rwb3tVbQk">Vídeo 1</a>
              <a href="https://www.youtube.com/watch?v=3S1bdJiJ4qk">Vídeo 2</a>
            </div>
            <div className='site'>
              <a href="https://www.plastprime.com/como-cultivar-morangos-em-vasos/#:~:text=Escolha%20o%20vaso%20adequado%20para,para%20a%20passagem%20da%20água">Site para informação do morango</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
    </>
  )
}

export default Explicacao