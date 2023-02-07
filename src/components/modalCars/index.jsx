import React from "react";
import { useState } from "react";
import styles from "./modal.module.sass";

import { carsEletric, carsHybrids } from "./cars";

function Modalcars(props) {

  const { closeModal } = props

  const [title, setTitle] = useState("Crossover");
  const [visible, setVisible] = useState(true);

  const changeCars = () => {
    setVisible(true);
    setTitle('Crossover')
  };

  const changeCars2 = () => {
    setVisible(false);
    setTitle('Suvs')
  };

  return (
    <div className={styles.container}>
      <div className={styles.options}>
        <div className={styles.eletric} onClick={changeCars}>
          <h1>Elétrico</h1>
          <p>100% elétrico</p>
        </div>

        <div className={styles.hybrid} onClick={changeCars2}>
          <h1>Híbridos</h1>
          <p>Híbridos plug-in</p>
        </div>
      </div>

      <div className={styles.models}>
        <h2>{title}</h2>

        <div className={styles.carsContainer}>
          {visible ? (
            <div className={styles.carContainer}>
              {carsEletric.map((car, index) => (
                <div className={styles.car}>
                  <h1 key={index}>{car.name}</h1>
                  <img src={car.image} alt={car.name} />
                  {car.isVerified && <span>DISPONÍVEL ONLINE</span>}
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.carContainer}>
              {carsHybrids.map((car, index) => (
                <div className={styles.car}>
                  <h1 key={index}>{car.name}</h1>
                  <img src={car.image} alt={car.name} />
                  {car.isVerified && <span>DISPONÍVEL ONLINE</span>}
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
      <h3 className={styles.close} onClick={closeModal}>X</h3>
    </div>
  );
}

export default Modalcars;
