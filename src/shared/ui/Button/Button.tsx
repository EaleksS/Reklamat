import { CSSProperties, FC, ReactNode } from "react";
import styles from "./Button.module.scss";
import { IoHelp } from "react-icons/io5";

interface Props {
  type?: "bigCircle" | "circle" | "help";
  children?: ReactNode;
  onClick?: () => void;
  mt?: string;
}

export const Button: FC<Props> = ({
  type = "bigCircle",
  children = "",
  mt = "0",
  onClick = () => "",
}): JSX.Element => {
  const styleComp: CSSProperties = {
    marginTop: mt,
  };

  switch (type) {
    case "circle":
      return (
        <button
          className={`${styles.btn} ${styles.circle}`}
          style={styleComp}
          onClick={onClick}
        >
          {children}
        </button>
      );

    case "help":
      return (
        <button
          className={`${styles.btn} ${styles.help}`}
          style={styleComp}
          onClick={onClick}
        >
          <IoHelp size={20} />
        </button>
      );

    default:
      return (
        <button
          className={`${styles.btn} ${styles.bigCircle}`}
          style={styleComp}
          onClick={onClick}
        >
          {children}
        </button>
      );
  }
};
