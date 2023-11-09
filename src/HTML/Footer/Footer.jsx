import { Link } from 'react-router-dom'
import React from 'react'

import styles from './Footer.module.css'

import Empresa from "../../img/qrcode_empresa.png"

function Footer() {
    return(
        <footer>
          <div className={styles.texto_img}>
            <h2>PDF DO PROJETO</h2>
            
            <img src={Empresa} alt=""/>
          </div>
        </footer>
    )
}

export default Footer