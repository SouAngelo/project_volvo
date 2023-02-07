import { useState, useRef } from "react";
import styles from "./home.module.sass";
import { carousel } from "./carouselCars";
import ModalCarousel from "../modalCarousel";
import { carsEletric, carsHybrids } from "../modalCars/cars";

import { FaAngleRight } from "react-icons/fa";
import Footer from "../footer";

function HomePage() {
  const [carVisible, setCarVisible] = useState(true);
  const [visible, setVisible] = useState(false);
  const slide = useRef();

  function handleModal() {
    setVisible(!visible);

    if (visible) {
      slide.current.style.display = "flex";
    } else {
      slide.current.style.display = "none";
    }
  }

  function changeCarsCrossover() {
    setCarVisible(true);
  }

  function changeCarsSUV() {
    setCarVisible(false);
  }

  return (
    <main className={styles.container}>
      <div className={styles.headerContent}>
        <video preload="auto" loop autoPlay muted>
          <source
            src="https://www.volvocars.com/images/v/-/media/applications/homepage/homepage/landing/ex90-reveal-hero-21x9-video.mp4"
            type="video/mp4"
          ></source>
        </video>

        <div className={styles.contentVolvo}>
          <p>Conheça o novo SUV 100% elétrico</p>
          <h2>VOLVO EX90</h2>

          <span>EXPLORAR</span>
        </div>
      </div>

      <section className={styles.carouselCars}>
        <h1>
          <span>Volvo Recharge.</span> Apresentamos nossa nova linha de
          automóveis 100% elétricos e híbridos plug-in.
        </h1>

        <div className={styles.containerCar}>
          {carousel.map((car) => (
            <div key={car.id} className={styles.demoCar}>
              <img src={car.image} alt="imagem carro" onClick={handleModal} />
            </div>
          ))}
        </div>

        <ModalCarousel handleModal={handleModal} slide={slide} />
      </section>

      <section className={styles.carModels}>
        <h2>Todos os modelos Recharge</h2>

        <nav>
          <li
            onClick={changeCarsCrossover}
            style={
              carVisible
                ? { color: "#000", borderBottom: "1px solid #000" }
                : { color: "#9e9e9e" }
            }
          >
            Crossover (3)
          </li>
          <li
            onClick={changeCarsSUV}
            style={
              carVisible
                ? { color: "#9e9e9e" }
                : { color: "#000", borderBottom: "1px solid #000" }
            }
          >
            SUV (2)
          </li>
        </nav>

        <div className={styles.modelsContainer}>
          {carVisible ? (
            <>
              {carsEletric.map((car) => (
                <div className={styles.carContainer}>
                  <h3>Crossover</h3>
                  <p>
                    {car.name} <span>100% elétrico</span>
                  </p>
                  <div className={styles.image}>
                    <img src={car.image} alt={car.name} />
                    {car.isVerified && <span>DISPONÍVEL ONLINE</span>}
                  </div>

                  <div className={styles.information}>
                    <p>CONHEÇA</p>
                    <p>COMPRAR</p>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              {carsHybrids.map((car) => (
                <div className={styles.carContainer}>
                  <h3>Crossover</h3>
                  <p>
                    {car.name} <span>100% elétrico</span>
                  </p>
                  <div className={styles.image}>
                    <img src={car.image} alt={car.name} />
                    {car.isVerified && <span>DISPONÍVEL ONLINE</span>}
                  </div>

                  <div className={styles.information}>
                    <p>CONHEÇA</p>
                    <p>COMPRAR</p>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </section>

      <section className={styles.volvoCopy}>
        <div className={styles.containerCopy}>
          <h4>Por que um Volvo?</h4>
          <img
            src="https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/img/three-callouts/homepage-whyvolvo-desktop-16x9.jpg?iar=0&w=1366"
            alt="imagem"
          />

          <div className={styles.containerCards}>
            <div className={styles.card}>
              <h1>Simplificando a sua vida</h1>
              <p>
                Nosso novo jeito de ir de A até B. Tenha o seu Volvo quando
                quiser, como quiser.
              </p>
            </div>

            <div className={styles.card}>
              <h1>O futuro é elétrico</h1>
              <p>
                Todos os nossos automóveis estão disponíveis na versão elétrica.
                Nós te ajudamos a reduzir o impacto ambiental do dia a dia.
              </p>
            </div>

            <div className={styles.card}>
              <h1>Protegendo o que é importante</h1>
              <p>
                Estamos orgulhosos do nosso legado em segurança. Seguimos
                inovando a maneira de ajudá-lo a proteger aquilo que é mais
                importante.
              </p>
            </div>
          </div>

          <a>SAIBA MAIS SOBRE A VOLVO</a>
        </div>
      </section>

      <section className={styles.homeFooter}>
        <div className={styles.containerInformation}>
          <div className={styles.cardCar}>
            <img
              src="https://www.volvocars.com/images/v/-/media/market-assets/brazil/applications/dotcom/images/localcampaigns/home/concessionario_1680x718.jpg?iar=0&w=720"
              alt="imagem concessionária"
            />
            <h2>Encontre um concessionário</h2>
            <button>PESQUISAR</button>
          </div>

          <div className={styles.cardCar}>
            <img
              src="https://www.volvocars.com/images/v/-/media/market-assets/brazil/applications/dotcom/images/localcampaigns/home/planeje_1680x718.jpg?iar=0&w=720"
              alt="imagem revisões"
            />
            <h2>Planeje suas revisões</h2>
            <button>SAIBA MAIS</button>
          </div>
        </div>

        <div className={styles.containerVolvo}>
          <img
            src="https://www.volvocars.com/images/v/-/media/market-assets/brazil/applications/dotcom/images/localcampaigns/home/img_5120x2194_new.jpg?iar=0&w=1366"
            alt="imagem carro"
          />

          <div className={styles.contentVolvo}>
            <h1>Encontro nossos eletropostos</h1>
            <button>PROCURAR</button>
          </div>
        </div>

        <div className={styles.links}>
          <h1>Links rápidos </h1>

          <div className={styles.linksContainer}>
            <div className={styles.link}>
              <p>
                Configure o seu <FaAngleRight />
              </p>
              <p>
                Encontre uma concessionária <FaAngleRight />
              </p>
            </div>

            <div className={styles.link}>
              <p>
                Volvo Armoured Cars <FaAngleRight />
              </p>
              <p>
                Lifestyle collection <FaAngleRight />
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </main>
  );
}

export default HomePage;
