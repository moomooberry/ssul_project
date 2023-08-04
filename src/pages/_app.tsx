import type { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyles from "@/styles/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/youandmystory.ico" />
        <title>너와 나의 이야기</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
