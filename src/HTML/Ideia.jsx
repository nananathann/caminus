import { Link } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'

import React from 'react'
import '../CSS/Tudo.css'
import './../CSS/Ideia.css'

import Morango from '../img/Ideia/morango.png'
import Estufa from '../img/Ideia/estufa.png'
import Lampada from '../img/Ideia/lampada.png'
import Planta from '../img/Ideia/planta.png'
import Vaso from '../img/Ideia/vaso.png'

function Ideia() {
  return (
    <>
    <body>
    <Header />
        <main>
          <section>
            <div className='base'>
              <div className='base1'>
                <h1>Ideia base:</h1>
                <img src={Lampada} alt="Imagem de uma lâmpada" />
              </div>
              <div className='base2'>
                <p>Tivemos a ideia de fazer algo diferente do que já vimos antes. Essa ideia já existe; porém, não é algo muito recorrente. Pensamos em fazer essa estufa inteligente para o cultivo de morangos na sua própria casa. Como já dito antes, o período de cultivo do morango é no fim do verão até o final do outono. Com a estufa inteligente, você poderá cultivá-los em qualquer época do ano. Criamos a estufa em uma escala "pequena", exatamente para ser usada dentro de sua casa.</p>
              </div>
            </div>
            <div className='blcestufa'>
              <div className='estufa1'>
                <p>Nosso projeto ainda está em fase de construção; porém, temos um esboço 3D do projeto e temos essas duas imagens ao lado de como planejamos basear nosso projeto.</p>
              </div>
              <div className='estufa2'>
                <img src={Estufa} alt="Imagem de uma estufa" />
              </div>
            </div>
            <div className='blcvaso'>
              <div className='vaso1'>
                <img src={Vaso} alt="Imagem de um vaso dentro de uma casa" />
              </div>
              <div className='vaso2'>
                <p>Temos o objetivo de usar um pouco dos elementos de cada uma, criando assim uma estufa com muitas funcionalidades e que seja muito simples de ser usada.</p>
              </div>
            </div>
            <div className='blcplanta'>
              <div cclassName='planta1'>
                <p>Descrevemos antes que com a "caminus" você poderá cultivar seus morangos em qualquer estação do ano, pois ela vem equipada com quatro ventoinhas (como o exemplo 3D ao lado), uma em cada vértice da estrutura, para resfriar os morangos, e uma lâmpada caso você queira aquecê-los, possibilitando assim o cultivo em qualquer estação.</p>
              </div>
              <div className='planta2'>
                <img src={Planta} alt="Imagem de uma planta dentro de uma casa" />
              </div>
            </div>
            <div className='blcmorango'>
              <div className='morango1'>
                <img src={Morango} alt="Imagem de um morango" />
              </div>
              <div className='morango2'>
                <p>Nossa estufa contará com uma estrutura de madeira com 36 cm de largura, 120 cm de comprimento, 20 cm de profundidade para terra, e uma tampa com altura de 50 cm, o tamanho ideal para o fruto crescer e ser manuseado, como toda essa estrutura nossa estufa tem a capacidade de cultivar 6 pés de morango por vez</p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        
      </body>
    </>
  )
}

export default Ideia