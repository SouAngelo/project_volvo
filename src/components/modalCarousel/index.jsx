import React from "react";
import { carousel } from "../home/carouselCars";

import styles from "./carousel.module.sass";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Navigation, Pagination } from "swiper";
import { EffectFade } from "swiper";
import { useState } from "react";

function ModalCarousel(props) {

    const { handleModal, slide } = props

  return (
    <div className={styles.container} ref={slide}>
        <span onClick={handleModal}>X</span>
      <section className={styles.modal}>
        
        <Swiper
          modules={[Navigation, Pagination, EffectFade]}
          effect={"fade"}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          loop={true}
          className={styles.mySwiper}
        >
          {carousel.map((car) => (
            <SwiperSlide className={styles.slide} key={car.id}>
              <img src={car.image} alt="carro" />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}

export default ModalCarousel;
