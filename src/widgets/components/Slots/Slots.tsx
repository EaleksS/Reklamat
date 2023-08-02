import { FC } from "react";
import styles from "./Slots.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay } from "swiper/modules";

export const Slots: FC = (): JSX.Element => {
  return (
    <div className={styles.slots}>
      <Swiper
        direction={"vertical"}
        slidesPerView={3}
        spaceBetween={50}
        centeredSlides={true}
        className={styles.mySwiper}
        modules={[Autoplay]}
        loop
        loopedSlides={0}
        autoplay={{ delay: 100 }}
      >
        <SwiperSlide>
          <img src="/slide1.png" alt="slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slide1.png" alt="slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slide1.png" alt="slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slide1.png" alt="slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/slide1.png" alt="slider" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        direction={"vertical"}
        slidesPerView={3}
        spaceBetween={50}
        centeredSlides={true}
        className={styles.mySwiper}
        modules={[Autoplay]}
        loop
        loopedSlides={0}
        autoplay={{ delay: 100 }}
      >
        <SwiperSlide>
          <img src="/Frame.png" alt="slider" className={styles.frame} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Frame.png" alt="slider" className={styles.frame} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Frame.png" alt="slider" className={styles.frame} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Frame.png" alt="slider" className={styles.frame} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Frame.png" alt="slider" className={styles.frame} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Frame.png" alt="slider" className={styles.frame} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        direction={"vertical"}
        slidesPerView={3}
        spaceBetween={50}
        centeredSlides={true}
        className={styles.mySwiper}
        modules={[Autoplay]}
        loop
        loopedSlides={0}
        autoplay={{ delay: 100 }}
      >
        <SwiperSlide>
          <img src="/Frame.png" alt="slider" className={styles.frame} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Frame.png" alt="slider" className={styles.frame} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Frame.png" alt="slider" className={styles.frame} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Frame.png" alt="slider" className={styles.frame} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Frame.png" alt="slider" className={styles.frame} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Frame.png" alt="slider" className={styles.frame} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        direction={"vertical"}
        slidesPerView={3}
        spaceBetween={50}
        centeredSlides={true}
        className={`${styles.mySwiper} ${styles.noborder}`}
        modules={[Autoplay]}
        loop
        loopedSlides={0}
        autoplay={{ delay: 100 }}
      >
        <SwiperSlide>
          <img src="/Frame.png" alt="slider" className={styles.frame} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Frame.png" alt="slider" className={styles.frame} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Frame.png" alt="slider" className={styles.frame} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Frame.png" alt="slider" className={styles.frame} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Frame.png" alt="slider" className={styles.frame} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Frame.png" alt="slider" className={styles.frame} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
