import type { ReactNode } from "react";
import styles from "./Button.module.css";

type Props = {
  children: ReactNode;
  onClick: () => void;
  type: string;
}

function Button({ children, onClick, type }: Props) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

export default Button;