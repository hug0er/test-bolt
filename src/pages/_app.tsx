import { AppProps } from "next/app";
import "~/styles/globals.css";
import RootLayout from "~/layouts/root";

type AppPropsWithLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: React.ComponentType<{ children: React.ReactNode }>;
  };
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const PageLayout =
    Component.PageLayout || (({ children }) => <>{children}</>);

  return (
    <RootLayout>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </RootLayout>
  );
}
