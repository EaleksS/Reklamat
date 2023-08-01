import { Dispatch, FC } from "react";
import styles from "./Input.module.scss";

interface Props {
  type?: "text" | "textarea";
  placholder?: string;
  value?: string;
  setValue?: Dispatch<React.SetStateAction<string>>;
  error?: boolean;
  name?: string;
}

export const Input: FC<Props> = ({
  type = "text",
  placholder,
  value,
  setValue,
  error = false,
  name = "",
}): JSX.Element => {
  switch (type) {
    case "textarea":
      return (
        <label
          className={`${styles.label} ${error && styles.error}`}
          style={{ height: "200px" }}
        >
          <textarea
            placeholder={placholder ? placholder : "Сообщения..."}
            value={value}
            onChange={(e) => setValue && setValue(String(e.target.value))}
            name={name}
          />
        </label>
      );

    default:
      return (
        <label className={`${styles.label}  ${error && styles.error}`}>
          <input
            type="text"
            placeholder={placholder ? placholder : "Текст"}
            value={value}
            onChange={(e) => setValue && setValue(String(e.target.value))}
            name={name}
          />
        </label>
      );
  }
};
