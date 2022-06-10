import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";
import { signIn, signOut, useSession } from "next-auth/react";

export function SignInButton() {
  const { data: session } = useSession();

  return session ? (
    <button
      type="button"
      className={styles["button-signin"]}
      onClick={() => signOut()}
    >
      <FaGithub color="#04d361" />
      {session.user.name}
      <FiX color="#737380" className={styles["close-icon"]} />
    </button>
  ) : (
    <button
      type="button"
      className={styles["button-signin"]}
      onClick={() => signIn("github")}
    >
      <FaGithub color="#eba417" />
      Entrar com Github
    </button>
  );
}
