import { FC, useRef } from "react";
import styles from "./Slots.module.scss";
import SlotCounter, { SlotCounterRef } from "react-slot-counter";
import { useBegin, useStore } from "../../../store/store";

export const Slots: FC = (): JSX.Element => {
  const counterRef1 = useRef<SlotCounterRef>(null);
  const counterRef2 = useRef<SlotCounterRef>(null);
  const counterRef3 = useRef<SlotCounterRef>(null);
  const counterRef4 = useRef<SlotCounterRef>(null);

  const { views } = useStore();
  const { begin } = useBegin();

  // useEffect(() => {
  //   if (begin) {
  //     counterRef1.current?.startAnimation();
  //     counterRef2.current?.startAnimation();
  //     counterRef3.current?.startAnimation();
  //     counterRef4.current?.startAnimation();

  //     setBegin(false);
  //   }
  // }, [begin, setBegin]);

  const randomNumber = () => {
    return new Intl.NumberFormat("en").format(
      Math.round(Math.random() * 100000)
    );
  };

  return (
    <div className={`${styles.slots} ${begin && styles.active}`}>
      {begin && (
        <div className={styles.container}>
          <SlotCounter
            ref={counterRef1}
            containerClassName={styles.cont}
            charClassName={styles.char}
            valueClassName={styles.value}
            separatorClassName={styles.separ}
            duration={2}
            // startValueOnce
            // sequentialAnimationMode
            animateUnchanged
            startValue={[
              <img
                className={styles.item}
                style={{ transform: "translateY(-70px)", width: "300px" }}
                src="/slide1.png"
                alt=""
              />,
            ]}
            value={[
              <div className={styles.dubleslide}>
                <img
                  className={styles.item}
                  style={{ width: "300px" }}
                  src="/slide1.png"
                  alt=""
                />
              </div>,
            ]}
            dummyCharacters={[
              <img
                className={styles.item}
                style={{ width: "300px" }}
                src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000"
                alt=""
              />,
              <img
                className={styles.item}
                style={{ width: "300px" }}
                src="https://img.freepik.com/premium-photo/luxurious-floral-elements-botanical-background-or-wallpaper-design-prints-3d-render_717906-525.jpg?w=2000"
                alt=""
              />,
              <img
                className={styles.item}
                style={{ width: "300px" }}
                src="https://i.redd.it/lsknlqcnihza1.jpg"
                alt=""
              />,
              <img
                className={styles.item}
                style={{ width: "300px" }}
                src="https://i.pinimg.com/originals/ab/85/bf/ab85bffa87c5a40419b7e03f0ec7b8e0.jpg"
                alt=""
              />,
              <img
                className={styles.item}
                style={{ width: "300px" }}
                src="https://marketplace.canva.com/EAFHm4JWsu8/1/0/1600w/canva-pink-landscape-desktop-wallpaper-HGxdJA_xIx0.jpg"
                alt=""
              />,
            ]}
          />
          <SlotCounter
            ref={counterRef2}
            containerClassName={styles.cont}
            charClassName={styles.char}
            valueClassName={styles.value}
            separatorClassName={styles.separ}
            duration={2.5}
            startValue={[
              <div className={styles.numbers}>
                <img
                  className={styles.item}
                  style={{ transform: "translateY(-70px)" }}
                  src="/Frame.png"
                  alt=""
                />
                <h3>{randomNumber()}</h3>
              </div>,
            ]}
            value={[
              <div className={styles.numbers}>
                <img className={styles.item} src="/Frame-1.png" alt="" />
                <h3>{new Intl.NumberFormat("en").format(views)}</h3>
                <div className={styles.numbers2}>
                  <img className={styles.item} src="/Frame.png" alt="" />
                  <h3>{randomNumber()}</h3>
                </div>
              </div>,
            ]}
            dummyCharacters={[
              <div className={styles.numbers}>
                <img className={styles.item} src="/Frame-1.png" alt="" />
                <h3>{randomNumber()}</h3>
              </div>,
              <div className={styles.numbers}>
                <img className={styles.item} src="/Frame-2.png" alt="" />
                <h3>{randomNumber()}</h3>
              </div>,
              <div className={styles.numbers}>
                <img className={styles.item} src="/Frame.png" alt="" />
                <h3>{randomNumber()}</h3>
              </div>,
              <div className={styles.numbers}>
                <img className={styles.item} src="/Frame-1.png" alt="" />
                <h3>{randomNumber()}</h3>
              </div>,
              <div className={styles.numbers}>
                <img className={styles.item} src="/Frame-2.png" alt="" />
                <h3>{randomNumber()}</h3>
              </div>,
            ]}
          />
          <SlotCounter
            ref={counterRef3}
            containerClassName={styles.cont}
            charClassName={styles.char}
            valueClassName={styles.value}
            separatorClassName={styles.separ}
            duration={3}
            // sequentialAnimationMode
            startValue={[
              <div className={styles.numbers}>
                <img
                  className={styles.item}
                  style={{ transform: "translateY(-70px)" }}
                  src="/Frame.png"
                  alt=""
                />
                <h3>{randomNumber()}</h3>
              </div>,
            ]}
            value={[
              <div className={styles.numbers}>
                <img className={styles.item} src="/Frame-2.png" alt="" />
                <h3>{views}</h3>
                <div className={styles.numbers2}>
                  <img className={styles.item} src="/Frame-1.png" alt="" />
                  <h3>{randomNumber()}</h3>
                </div>
              </div>,
            ]}
            dummyCharacters={[
              <div className={styles.numbers}>
                <img className={styles.item} src="/Frame-1.png" alt="" />
                <h3>{randomNumber()}</h3>
              </div>,
              <div className={styles.numbers}>
                <img className={styles.item} src="/Frame-2.png" alt="" />
                <h3>{randomNumber()}</h3>
              </div>,
              <div className={styles.numbers}>
                <img className={styles.item} src="/Frame.png" alt="" />
                <h3>{randomNumber()}</h3>
              </div>,
              <div className={styles.numbers}>
                <img className={styles.item} src="/Frame-1.png" alt="" />
                <h3>{randomNumber()}</h3>
              </div>,
              <div className={styles.numbers}>
                <img className={styles.item} src="/Frame-2.png" alt="" />
                <h3>{randomNumber()}</h3>
              </div>,
            ]}
          />
          <SlotCounter
            ref={counterRef4}
            containerClassName={`${styles.cont} ${styles.noborder}`}
            charClassName={styles.char}
            valueClassName={styles.value}
            separatorClassName={styles.separ}
            duration={3.5}
            startValue={[
              <div className={styles.numbers}>
                <img
                  className={styles.item}
                  style={{ transform: "translateY(-70px)" }}
                  src="/Frame.png"
                  alt=""
                />
                <h3>{randomNumber()}</h3>
              </div>,
            ]}
            value={[
              <div className={styles.numbers}>
                <img className={styles.item} src="/Frame.png" alt="" />
                <h3>{views}</h3>
                <div className={styles.numbers2}>
                  <img className={styles.item} src="/Frame-2.png" alt="" />
                  <h3>{randomNumber()}</h3>
                </div>
              </div>,
            ]}
            dummyCharacters={[
              <div className={styles.numbers}>
                <img className={styles.item} src="/Frame-1.png" alt="" />
                <h3>{randomNumber()}</h3>
              </div>,
              <div className={styles.numbers}>
                <img className={styles.item} src="/Frame-2.png" alt="" />
                <h3>{randomNumber()}</h3>
              </div>,
              <div className={styles.numbers}>
                <img className={styles.item} src="/Frame.png" alt="" />
                <h3>{randomNumber()}</h3>
              </div>,
              <div className={styles.numbers}>
                <img className={styles.item} src="/Frame-1.png" alt="" />
                <h3>{randomNumber()}</h3>
              </div>,
              <div className={styles.numbers}>
                <img className={styles.item} src="/Frame-2.png" alt="" />
                <h3>{randomNumber()}</h3>
              </div>,
            ]}
          />
        </div>
      )}
    </div>
  );
};
