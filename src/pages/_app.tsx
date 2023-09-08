import type { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyles from "@/styles/GlobalStyles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { wrapper } from "@/store";
import { Provider as ReduxProvider } from "react-redux";
import "@/styles/font/font.css";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const TITLE = "너와 나의 이야기";
const DESCRIPTION =
  "너와 나의 이야기, 우리 주변에서 일어나는 모든 이야기들을 모아서 들려드려요.";
const URL = "https://www.youandmystory.com";
const IMG_ICON_SRC = "/images/youandmystory.ico";
const IMG_BANNER_SRC = "/images/youandmystory_banner.png";

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
          <title>{TITLE}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="title" content={TITLE} />
          <meta name="description" content={DESCRIPTION} />
          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content={TITLE} />
          <meta property="og:description" content={DESCRIPTION} />
          <meta property="og:image" content={IMG_BANNER_SRC} />
          <meta property="og:url" content={URL} />
          {/* Twitter */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={TITLE} />
          <meta name="twitter:description" content={DESCRIPTION} />
          <meta name="twitter:image" content={IMG_BANNER_SRC} />
          <meta name="twitter:domain" content={TITLE} />
          {/* Search Adviser Verification */}
          <meta
            name="naver-site-verification"
            content="bbbd34a0630611f8432795ff3bb4a4bc443f0857"
          />
          <meta
            name="google-site-verification"
            content="Q7Oki3htl6XdMskyV4aU4UcdS_Jw_6Au66idMKhjsjA"
          />
          {/* ICON */}
          <link rel="shortcut icon" href={`${URL}${IMG_ICON_SRC}`} />
          <link rel="icon" href={IMG_ICON_SRC} />
        </Head>
        <GlobalStyles />
        <Component {...props} />
        {/* <ReactQueryDevtools initialIsOpen={true} /> */}
      </QueryClientProvider>
    </ReduxProvider>
  );
}

export default MyApp;
