import { FC, useEffect, useRef } from "react";
import styles from "./Slots.module.scss";
import SlotCounter, { SlotCounterRef } from "react-slot-counter";
import { useStore } from "../../../store/store";

export const Slots: FC = (): JSX.Element => {
  const counterRef1 = useRef<SlotCounterRef>(null);
  const counterRef2 = useRef<SlotCounterRef>(null);
  const counterRef3 = useRef<SlotCounterRef>(null);
  const counterRef4 = useRef<SlotCounterRef>(null);

  const { begin, setBegin } = useStore();

  useEffect(() => {
    if (begin) {
      counterRef1.current?.startAnimation();
      counterRef2.current?.startAnimation();
      counterRef3.current?.startAnimation();
      counterRef4.current?.startAnimation();

      setBegin(false);
    }
  }, [begin]);

  return (
    <div className={styles.slots}>
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
            style={{ transform: "translateY(-70px)" }}
            src="/slide1.png"
            alt=""
          />,
        ]}
        value={[<img className={styles.item} src="/slide1.png" alt="" />]}
        dummyCharacters={[
          <img className={styles.item} src="/slide1.png" alt="" />,
          <img className={styles.item} src="/slide1.png" alt="" />,
          <img className={styles.item} src="/slide1.png" alt="" />,
          <img className={styles.item} src="/slide1.png" alt="" />,
          <img className={styles.item} src="/slide1.png" alt="" />,
        ]}
      />
      <SlotCounter
        ref={counterRef2}
        containerClassName={styles.cont}
        charClassName={styles.char}
        valueClassName={styles.value}
        separatorClassName={styles.separ}
        duration={2}
        startValue={[
          <img
            className={styles.item}
            style={{ transform: "translateY(-70px)" }}
            src="/Frame.png"
            alt=""
          />,
        ]}
        value={[<img className={styles.item} src="/Frame.png" alt="" />]}
        dummyCharacters={[
          <img className={styles.item} src="/Frame.png" alt="" />,
          <img className={styles.item} src="/Frame.png" alt="" />,
          <img className={styles.item} src="/Frame.png" alt="" />,
          <img className={styles.item} src="/Frame.png" alt="" />,
          <img className={styles.item} src="/Frame.png" alt="" />,
        ]}
      />
      <SlotCounter
        ref={counterRef3}
        containerClassName={styles.cont}
        charClassName={styles.char}
        valueClassName={styles.value}
        separatorClassName={styles.separ}
        duration={2}
        // sequentialAnimationMode
        startValue={[
          <img
            className={styles.item}
            style={{ transform: "translateY(-70px)" }}
            src="/Frame.png"
            alt=""
          />,
        ]}
        value={[<img className={styles.item} src="/Frame.png" alt="" />]}
        dummyCharacters={[
          <img className={styles.item} src="/Frame.png" alt="" />,
          <img className={styles.item} src="/Frame.png" alt="" />,
          <img className={styles.item} src="/Frame.png" alt="" />,
          <img className={styles.item} src="/Frame.png" alt="" />,
          <img className={styles.item} src="/Frame.png" alt="" />,
        ]}
      />
      <SlotCounter
        ref={counterRef4}
        containerClassName={styles.cont}
        charClassName={styles.char}
        valueClassName={styles.value}
        separatorClassName={styles.separ}
        duration={2}
        startValue={[
          <img
            className={styles.item}
            style={{ transform: "translateY(-70px)" }}
            src="/Frame.png"
            alt=""
          />,
        ]}
        value={[<img className={styles.item} src="/Frame.png" alt="" />]}
        dummyCharacters={[
          <img className={styles.item} src="/Frame.png" alt="" />,
          <img className={styles.item} src="/Frame.png" alt="" />,
          <img className={styles.item} src="/Frame.png" alt="" />,
          <img className={styles.item} src="/Frame.png" alt="" />,
          <img className={styles.item} src="/Frame.png" alt="" />,
        ]}
      />
    </div>
  );
};
