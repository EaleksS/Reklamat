import { FC, Ref, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.scss";

// import required modules
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import ReactPlayer from "react-player";
SwiperCore.use([Navigation]);

export const Slider: FC = (): JSX.Element => {
  // slider
  const [activeIndex, setActiveIndex] = useState<number>(0);
  console.log(activeIndex);

  const [swiper, setSwiper] = useState<SwiperCore>();
  const [prevActive, setPrevActive] = useState<boolean>(true);
  const [nextActive, setNextActive] = useState<boolean>(false);

  const isActice = () => {
    setPrevActive(1 === Number(swiper && swiper?.activeIndex + 1));
    setNextActive(
      Number(swiper?.slides?.length) ===
        Number(swiper && swiper?.activeIndex + 1)
    );
  };
  // /slider

  // video
  const [isActive, setIsActive] = useState<boolean>(false);

  // const [volume, setVolume] = useState<number>(0.8);
  // const [muted, setMuted] = useState<boolean>(false);

  const player = useRef(null);

  // const onReady = () => {
  //   if (!player) return;
  //   if (!player.current) return;

  //   const internalPlayer = player.current.getInternalPlayer();
  //   internalPlayer.addEventListener(
  //     "volumechange",
  //     function () {
  //       setVolume(internalPlayer.volume);
  //       if (internalPlayer.muted) {
  //         setMuted(true);
  //       } else {
  //         setMuted(false);
  //         setVolume(internalPlayer.volume);
  //       }
  //     },
  //     false
  //   );
  // };

  // /video

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
            {/* <img src="/slide1.png" alt="slider" /> */}
            <ReactPlayer
              className="iframe"
              width="100%"
              height="100%"
              playing={activeIndex === index ? true : false}
              controls
              ref={player}
              loop={true}
              onPlay={() => setIsActive(true)}
              onPause={() => setIsActive(false)}
              url={"https://www.youtube.com/watch?v=L2SeR_ggu4Y"}
            />
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
