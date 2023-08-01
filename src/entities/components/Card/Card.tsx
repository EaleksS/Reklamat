import { FC } from "react";
import styles from "./Card.module.scss";
import { IoAddOutline } from "react-icons/io5";

interface Props {
  icon: JSX.Element;
  bgIcon: string;
  title: string;
  count: number;
  color: string;
  add?: boolean;
  onClick?: () => void;
}

export const Card: FC<Props> = ({
  icon,
  bgIcon,
  title,
  count,
  color,
  add = false,
  onClick = () => "",
}): JSX.Element => {
  return (
    <div className={styles.card}>
      <div
        className={styles.icon}
        style={{
          background: bgIcon,
          boxShadow: `0px 3px 0px 0px #2e2100, 0px 4px 7px 0px ${bgIcon} inset`,
          color: color,
        }}
      >
        <span>{icon}</span>
      </div>
      <div className={styles.title}>
        <h3>{title}</h3>
        <h2>
          {new Intl.NumberFormat("en").format(count)}
          {title === "Баланс" && "₽"}
        </h2>
      </div>
      {add && (
        <button className={styles.add} onClick={onClick}>
          <IoAddOutline size={20} />
        </button>
      )}
    </div>
  );
};
