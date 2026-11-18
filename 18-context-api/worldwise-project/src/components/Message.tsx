import styles from "./Message.module.css";

type Props = {
  message: string
}

function Message({ message }: Props) {
  return (
    <p className={styles.message}>
      {message}
    </p>
  );
}

export default Message;
