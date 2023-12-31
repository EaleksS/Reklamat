import { FC } from "react";
import styles from "./Footer.module.scss";
import { Card } from "../../../entities";
import { AiFillEye } from "react-icons/ai";
import { Button } from "../../../shared";
import { useBegin, useStore } from "../../../store/store";

export const Footer: FC = (): JSX.Element => {
  const { setViews, views } = useStore();
  const { setBegin, begin } = useBegin();

  return (
    <footer className={`${styles.footer} ${begin && styles.noActive}`}>
      <div className={styles.content}>
        <Card
          icon={<AiFillEye size={20} />}
          bgIcon="#ffc83a"
          title="Просмотры"
          count={views}
          color="373570F"
        />
        <Button type="circle" onClick={() => setBegin(true)}>
          Начать
        </Button>
        <Button type="bigCircle" onClick={() => setViews(1000)}>
          +1,000
        </Button>
        <Button type="help" />
      </div>
    </footer>
  );
};
