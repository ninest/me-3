import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Spacer from "@/components/Space";

import "../styles/globals.scss";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <DefaultSeo
          titleTemplate="%s - Parth Kabra"
          defaultTitle="Parth Kabra"
          description="Computer Science Student at Northeastern University"
          openGraph={{
            site_name: "ninest",
            type: "website",
          }}
          twitter={{
            handle: "@nn9st",
            site: "@nn9st",
            cardType: "summary_large_image",
          }}
        ></DefaultSeo>
        <Navbar />

        <main>
          <Component {...pageProps} />

          {/* TODO: footer */}
          <Spacer size="xl"></Spacer>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
