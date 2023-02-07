import React from 'react'
import styles from './footer.module.sass'

function Footer() {
  return (
    <footer className={styles.footer}>
        <p>As características apresentadas poderão não pertencer ao equipamento de série ou não estar disponíveis para todas as configurações, opções de motorização e países.</p>

        <nav>
            <li>Cookies</li>
            <li>Legal</li>
            <li>Privacy</li>
            <li>Recalls</li>
            <li>Etiquetas de Segurança</li>
        </nav>

        <span>Copyright © 2023 Volvo Car Corporation (ou suas afiliadas ou licenciadoras).</span>

    </footer>
  )
}

export default Footer