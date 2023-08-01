import { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.scss";

// import required modules
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
SwiperCore.use([Navigation]);

export const Slider: FC = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  console.log(activeIndex);

  const [swiper, setSwiper] = useState<SwiperCore>();
  const [prevActive, setPrevActive] = useState(true);
  const [nextActive, setNextActive] = useState(false);

  const isActice = () => {
    setPrevActive(1 === Number(swiper && swiper?.activeIndex + 1));
    setNextActive(
      Number(swiper?.slides?.length) ===
        Number(swiper && swiper?.activeIndex + 1)
    );
  };

  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={50}
        centeredSlides={true}
        onActiveIndexChange={(e) => setActiveIndex(e.realIndex)}
        modules={[Navigation]}
        onSwiper={(e) => setSwiper(e)}
        onSlideChange={() => isActice()}
      >
        {[1, 2, 3, 4, 5, 6, 7].map((e, index) => (
          <SwiperSlide
            key={e}
            className={activeIndex === index ? "active" : ""}
          >
            <img src="/slide1.png" alt="slider" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="arrow-next" onClick={() => swiper && swiper.slideNext()}>
        <img
          src="/arrownext.svg"
          alt="next"
          style={nextActive ? { opacity: 0.5 } : {}}
        />
      </div>
      <div className="arrow-prev" onClick={() => swiper && swiper.slidePrev()}>
        <img
          src="/arrowprev.svg"
          alt="next"
          style={prevActive ? { opacity: 0.2 } : {}}
        />
      </div>
    </>
  );
};
