import { FC } from "react";
import styles from "./Footer.module.scss";
import { Card } from "../../../entities";
import { AiFillEye } from "react-icons/ai";
import { Button } from "../../../shared";

export const Footer: FC = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <Card
          icon={<AiFillEye size={20} />}
          bgIcon="#ffc83a"
          title="Просмотры"
          count={140003}
          color="373570F"
        />
        <Button type="circle">Начать</Button>
        <Button type="bigCircle">+1,000</Button>
        <Button type="help" />
      </div>
    </footer>
  );
};
