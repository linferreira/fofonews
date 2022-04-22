/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { SubscribeButton } from "./components/SubscribeButton";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fofonews | Início</title>
      </Head>
      <main className={styles["content-container"]}>
        <section className={styles.hero}>
          <span>👏 Hey, turu pom?</span>
          <h1>
            Apenas conteúdos <span> edificantes</span>
          </h1>
          <p>
            Acesse todas as publicações <br />
            por apenas <span>R$ 0.99</span> ao mês
          </p>
          <SubscribeButton />
        </section>

        <img src="/images/avatar.svg" alt="girl coding" />
      </main>
    </>
  );
}
