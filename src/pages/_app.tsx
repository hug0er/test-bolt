import { AppProps } from "next/app";
import { NextComponentType, NextPageContext } from "next";
import "~/styles/globals.css";
import RootLayout from "~/layouts/root";

type AppPropsWithLayout = AppProps & {
  Component: NextComponentType<NextPageContext, any, any> & {
    PageLayout?: React.ComponentType<{ children: React.ReactNode }>;
  };
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <RootLayout>
      {Component.PageLayout ? (
        <Component.PageLayout>
          <Component {...pageProps} />
        </Component.PageLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </RootLayout>
  );
}
