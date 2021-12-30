import Document, { Html, Head, Main, NextScript } from "next/document";

const GA_TRACKING_ID = "G-QWQTL26TSK";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          {process.env.NODE_ENV === "production" && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                  `,
                }}
              />
            </>
          )}

          <link
            rel="preload"
            href="/karla.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/inter.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link rel="stylesheet" href="/font.css" />
          <meta name="theme-color" content="#111111" />
        </Head>
        <body className="bg-light">
          <Main />
          <script
            dangerouslySetInnerHTML={{
              __html: `document.body.dataset.theme = window.localStorage.getItem("theme") || "light";
              console.log("Hello")`,
            }}
          ></script>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
