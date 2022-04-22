import { SignInButton } from "../SignInButton";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles["header-container"]}>
      <div className={styles["header-content"]}>
        <img src="/images/logo.svg" alt="logo fofonews" />

        <nav>
          <a className={styles.active}>Início</a>
          <a>Postagens</a>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
