import wrapper from "@store/configureStore";
import "@styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import { ReactElement, ReactNode, useState } from "react";
import { ToastContainer } from "react-toastify";
import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";

//참고: https://nextjs.org/docs/basic-features/layouts#with-typescript
export type NextPageWithLayout<T> = NextPage<T> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface MyAppProps extends AppProps {
  Component: NextPageWithLayout<any>;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  const getLayout = Component.getLayout ?? ((page) => page);

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
      <QueryClientProvider client={client}>
        <ToastContainer position="bottom-center" autoClose={3000} />
        {getLayout(<Component {...pageProps} />)}
      </QueryClientProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
