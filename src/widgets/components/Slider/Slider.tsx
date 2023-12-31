import { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.scss";

// import required modules
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import { useBegin } from "../../../store/store";
import { Loader } from "../../../shared";
import FilePlayer from "react-player/file";
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
            <FilePlayer
              className="iframe"
              width="800px"
              // height="472.5"
              // width="100%"
              height="100%"
              playing={begin ? false : activeIndex === index ? true : false}
              controls={false}
              // loop={true}
              // onPlay={() => setIsActive(true)}
              // onPause={() => setIsActive(false)}
              fallback={
                <div className="loaderPlayer">
                  <Loader />
                </div>
              }
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
