import { Link } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'

import React from 'react'
import '../CSS/Tudo.css'
import './../CSS/Equipamentos.css'

import Arduino from '../img/Equipamentos/arduino.png'
import Bomba from '../img/Equipamentos/bombaag.png'
import Cooler from '../img/Equipamentos/cooler.png'
import Fonte from '../img/Equipamentos/fonte12v.png'
import Sensortemp from '../img/Equipamentos/sensortemp.png'
import Sensorumd from '../img/Equipamentos/sensorumd.png'

function Equipamentos() {
  return (
    <>
      <body>
        <Header />

        <main>
          <section className="separar_img">
            <div className='blocoum'>
              <a href="https://www.eletrogate.com/cooler-ventoinha-dc-12v-">Quatro Cooler's</a>
            </div>
            <div className='blocodois'>
              <figure className='imgs'>
                <img src={Cooler} alt="" />
              </figure>
            </div>
          </section>
          <section className="separar_img_">
            <div className='blocoum'>
              <a href="https://www.mamuteeletronica.com.br/fonte-12v-5a-zsqh06012-9394">Duas Fontes 12V</a>
            </div>
            <div className='blocodois'>
              <figure className='imgs'>
                <img src={Fonte} alt="" />
              </figure>
            </div>
          </section>
          <section className="separar_img">
            <div className='blocoum'>
              <a href="https://www.eletrogate.com/sensor-de-temperatura-ds18b20-a-prova-dagua">Sensor de temperatura</a>
            </div>
            <div className='blocodois'>
              <figure className='imgs'>
                <img src={Sensortemp} alt="" />
              </figure>
            </div>
          </section>
          <section className="separar_img_">
            <div className='blocoum'>
              <a href="https://www.eletrogate.com/mini-bomba-submersa-5v-p-agua">Bomba de água</a>
            </div>
            <div className='blocodois'>
              <figure className='imgs'>
                <img src={Bomba} alt="" />
              </figure>
            </div>
          </section>
          <section className="separar_img">
            <div className='blocoum'>
              <a href="https://www.eletrogate.com/uno-r3-cabo-usb-para-arduino">Arduino</a>
            </div>
            <div className='blocodois'>
              <figure className='imgs'>
                <img src={Arduino} alt="" />
              </figure>
            </div>
          </section>
          <section className="separar_img_">
            <div className='blocoum'>
              <a href="https://www.eletrogate.com/modulo-sensor-de-umidade-de-solo">Sensor de umidade</a>
            </div>
            <div className='blocodois'>
              <figure className='imgs'>
                <img src={Sensorumd} alt="" />
              </figure>
            </div>
          </section>
        </main>

        <Footer />
        
      </body>
    </>
  )
}

export default Equipamentos