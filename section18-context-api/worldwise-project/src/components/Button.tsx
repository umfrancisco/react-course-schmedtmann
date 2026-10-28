import type { ReactNode } from "react";
import styles from "./Button.module.css";

type Props = {
  children: ReactNode;
  onClick: () => void;
  type: string;
}

const getBtnType = (value: string) => {
  return value === "primary" ? "submit" : "button";
}

function Button({ children, onClick, type }: Props) {
  return (
    <button onClick={onClick} type={getBtnType(type)} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

export default Button;