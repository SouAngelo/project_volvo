import React from "react";
import styles from "./navbar.module.sass";
import Link from "next/link";
import Modal from 'react-modal';
import Modalcars from "../modalCars";
import ModalMenu from "../modalMenu";
import { useState, useRef } from "react";

import Burger from '@animated-burgers/burger-squeeze' 
import '@animated-burgers/burger-squeeze/dist/styles.css' 

function Navbar() {

    const [open, setOpen] = useState(false)
    const hamb = useRef(null)

    const [modalIsOpen, setIsOpen] = useState(false);

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };

      function openModal() {
        setIsOpen(true);
      }
    
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
      }
    
      function closeModal() {
        setIsOpen(false);
      }


      const openHamburguer = () => {
        setOpen(!open)
        
        if(open === false){
            hamb.current.style.display ='flex'
            
        } else {
            hamb.current.style.display ='none'
        }
    }


  return (
    <header className={styles.headerContainer}>
      <Link href='/' legacyBehavior>
        <a>
          <img
            src="https://www.volvocars.com/static/shared/images/volvo-wordmark-black.svg"
            alt="logo"
          />
        </a>
      </Link>

      <nav>
        <ul>
          <li onClick={modalIsOpen ? closeModal : openModal}>Nossos carros</li>
          <Burger isOpen={ open } onClick={openHamburguer} id={styles.burguer}/>
        </ul>
      </nav>

     {/* Modal nossos carros abaixo */}
      <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      >
       <Modalcars closeModal={closeModal}/>
      </Modal>

      <ModalMenu hamb={hamb} openHamburguer={openHamburguer}/>
      
    </header>
  );
}

export default Navbar;
