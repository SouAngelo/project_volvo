import React from 'react'
import styles from './menu.module.sass'
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa'

function ModalMenu(props) {

    const { hamb, openHamburguer } = props

  return (
    <div className={styles.container} ref={hamb}>

        <div className={styles.closeMenu}>
            <img src="https://www.volvocars.com/static/shared/images/volvo-wordmark-black.svg" alt="logo" />
            <span onClick={openHamburguer}>X</span>
        </div>

        <nav className={styles.navegation}>
            <ul>
                <li>Iniciar sessão com o Volvo ID</li>
                <li>Configurador de carro</li>
                <li>Comprar</li>
                <li>Proprietário</li>
                <li>Porque Volvo</li>
                <li>Saiba Mais</li>
                <li>Mais</li>
                <li className={styles.national}>Brazil</li>
            </ul>
        </nav>

        <div className={styles.networks}>
           <FaFacebook/>
           <FaInstagram/>
           <FaYoutube/>
           <FaLinkedin/>
        </div>

    </div>
  )
}

export default ModalMenu