import styles from "./styles.module.scss";

interface ISubscribeButtonProps {
  priceId: string
}

export function SubscribeButton({ priceId }: ISubscribeButtonProps) {
  return (
    <button type="button" className={styles["subscribe-button"]}>
      Me inscrever
    </button>
  );
}
