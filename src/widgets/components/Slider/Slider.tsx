import { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.scss";

// import required modules
import { Navigation } from "swiper/modules";

export const Slider: FC = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  console.log(activeIndex);

  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={50}
      centeredSlides={true}
      onActiveIndexChange={(e) => setActiveIndex(e.realIndex)}
      navigation={true}
      modules={[Navigation]}
    >
      {[1, 2, 3, 4, 5, 6, 7].map((e, index) => (
        <SwiperSlide key={e} className={activeIndex === index ? "active" : ""}>
          <img src="/slide1.png" alt="slider" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
