/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps } from "next";
import Head from "next/head";
import { stripe } from "../services/stripe";
import { SubscribeButton } from "../components/SubscribeButton";
import styles from "./home.module.scss";

interface IHomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: IHomeProps) {
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
            por apenas <span>{product.amount}</span> ao mês
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>

        <img src="/images/avatar.svg" alt="girl coding" />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve("price_1KsSmtDZqHKh5G5fFMtLLTRo");

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price.unit_amount / 100),
  };

  return {
    props: { product },
  };
};
