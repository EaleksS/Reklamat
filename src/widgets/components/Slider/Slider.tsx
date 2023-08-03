import { FC, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.scss";

// import required modules
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import ReactPlayer from "react-player";
import { useBegin } from "../../../store/store";
SwiperCore.use([Navigation]);

interface IVideo {
  id: number;
  url: string;
}

const video: IVideo[] = [
  {
    id: 1,
    url: "/video/video_1.mp4",
  },
  {
    id: 2,
    url: "/video/video_2.mp4",
  },
  {
    id: 3,
    url: "/video/video_3.mp4",
  },
];

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
  // const [isActive, setIsActive] = useState<boolean>(false);

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

  const { begin } = useBegin();

  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={50}
        centeredSlides={true}
        onActiveIndexChange={(e) => setActiveIndex(e.realIndex)}
        // modules={[Navigation]}
        onSwiper={(e) => setSwiper(e)}
        // loop={true}
        // loopedSlides={1}
        className={`slider-container ${begin && "noActive"}`}
        onSlideChange={() => {
          isActice();
        }}
      >
        {video.map((e, index) => (
          <SwiperSlide
            key={e.id}
            className={activeIndex === index ? "active" : ""}
          >
            {/* <img src="/slide1.png" alt="slider" /> */}
            <ReactPlayer
              className="iframe"
              width="100%"
              height="100%"
              playing={activeIndex === index ? true : false}
              controls={false}
              ref={player}
              loop={true}
              // onPlay={() => setIsActive(true)}
              // onPause={() => setIsActive(false)}
              url={e.url}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className={`arrow-next ${begin && "noActive"}`}
        onClick={() => swiper && swiper.slideNext()}
      >
        <img
          src="/arrownext.svg"
          alt="next"
          style={nextActive ? { opacity: 0.5 } : {}}
        />
      </div>
      <div
        className={`arrow-prev ${begin && "noActive"}`}
        onClick={() => swiper && swiper.slidePrev()}
      >
        <img
          src="/arrowprev.svg"
          alt="next"
          style={prevActive ? { opacity: 0.2 } : {}}
        />
      </div>
    </>
  );
};
