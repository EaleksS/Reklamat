import { FC } from "react";
import styles from "./Header.module.scss";
import { useNavigate } from "react-router-dom";
import { Card } from "../../../entities";
import { AiFillEye } from "react-icons/ai";
import { PiCurrencyDollarBold } from "react-icons/pi";

export const Header: FC = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.logo} onClick={() => navigate("/")}>
          REKLAMAT
        </div>
        <div className={styles.nav}>
          <Card
            icon={<AiFillEye size={20} />}
            bgIcon="#ffc83a"
            title="Просмотры"
            count={140003}
            color="373570F"
          />
          <Card
            icon={<PiCurrencyDollarBold size={20} />}
            bgIcon="#8747C9"
            title="Баланс"
            count={7367}
            color="51257E"
            add={true}
            onClick={() => console.log("click")}
          />
        </div>
      </div>
    </header>
  );
};
