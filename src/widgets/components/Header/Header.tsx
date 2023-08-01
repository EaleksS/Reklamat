import { FC } from "react";
import styles from "./Header.module.scss";
import { useNavigate } from "react-router-dom";
import { Card } from "../../../entities";
import { AiFillEye } from "react-icons/ai";
import { PiCurrencyDollarBold } from "react-icons/pi";
import { useStore } from "../../../store/store";

export const Header: FC = (): JSX.Element => {
  const navigate = useNavigate();
  const { views, balance, setBalance } = useStore();

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.logo} onClick={() => navigate("/")}>
          <h2>
            REKL<span>AMAT</span>
          </h2>
        </div>
        <div className={styles.nav}>
          <Card
            icon={<AiFillEye size={20} />}
            bgIcon="#ffc83a"
            title="Просмотры"
            count={views}
            color="373570F"
          />
          <Card
            icon={<PiCurrencyDollarBold size={20} />}
            bgIcon="#8747C9"
            title="Баланс"
            count={balance}
            color="51257E"
            add={true}
            onClick={() => setBalance(1000)}
          />
        </div>
      </div>
    </header>
  );
};
