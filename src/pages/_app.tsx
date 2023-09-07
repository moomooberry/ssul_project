import type { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyles from "@/styles/GlobalStyles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { wrapper } from "@/store";
import { Provider as ReduxProvider } from "react-redux";
import "@/styles/font/font.css";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });
  const { store, props } = wrapper.useWrappedStore(pageProps);

  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="naver-site-verification"
            content="bbbd34a0630611f8432795ff3bb4a4bc443f0857"
          />
          <meta
            name="google-site-verification"
            content="Q7Oki3htl6XdMskyV4aU4UcdS_Jw_6Au66idMKhjsjA"
          />
          <link rel="icon" href="/images/youandmystory.ico" />
          <title>너와 나의 이야기</title>
        </Head>
        <GlobalStyles />
        <Component {...props} />
        {/* <ReactQueryDevtools initialIsOpen={true} /> */}
      </QueryClientProvider>
    </ReduxProvider>
  );
}

export default MyApp;
