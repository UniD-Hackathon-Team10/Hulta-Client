import wrapper from "@store/configureStore";
import "@styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import { ReactElement, ReactNode, useState } from "react";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";

//참고: https://nextjs.org/docs/basic-features/layouts#with-typescript
export type NextPageWithLayout<T> = NextPage<T> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface MyAppProps extends AppProps {
  Component: NextPageWithLayout<any>;
}

function MyApp({ Component, ...rest }: MyAppProps) {
  // const getLayout = Component.getLayout ?? ((page) => page);
  const getLayout = Component.getLayout ?? ((page) => page);
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
