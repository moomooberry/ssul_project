import type { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyles from "@/styles/GlobalStyles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { wrapper } from "@/store";
import { Provider as ReduxProvider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const { store, props } = wrapper.useWrappedStore(pageProps);

  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/images/youandmystory.ico" />
          <title>너와 나의 이야기</title>
        </Head>
        <GlobalStyles />
        <Component {...props} />
      </QueryClientProvider>
    </ReduxProvider>
  );
}

export default MyApp;
