import wrapper from "@store/configureStore";
import "@styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import { ReactElement, ReactNode, useState } from "react";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import Layout from "@components/Layout";
import Head from "next/head";

//참고: https://nextjs.org/docs/basic-features/layouts#with-typescript
export type NextPageWithLayout<T> = NextPage<T> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface MyAppProps extends AppProps {
  Component: NextPageWithLayout<any>;
}

function MyApp({ Component, ...rest }: MyAppProps) {
  const getLayout = Component.getLayout
    ? Component.getLayout
    : (page: ReactNode) => <Layout>{page}</Layout>;
  const { store, props } = wrapper.useWrappedStore(rest);

  const [client] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 1,
          },
        },
      })
  );

  return (
    <>
      <Head>
        <meta name="application-name" content="HulTa" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="HulTa" />
        <meta name="description" content="HulTa" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#FBFBFB" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#FCDE58" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <QueryClientProvider client={client}>
        <Provider store={store}>
          <ToastContainer position="bottom-center" autoClose={3000} />
          {getLayout(<Component {...props.pageProps} />)}
        </Provider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
