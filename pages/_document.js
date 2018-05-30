import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          {/* <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-119971042-1"
          />
          <script>
            window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(
              arguments
            )}
            gtag('js', new Date()); gtag('config', 'UA-119971042-1');
          </script> */}
          <style>{`body { margin: 0 } /* custom! */`}</style>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width, maximum-scale=1"
            key="viewport"
          />
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
          />
          <link
            rel="shortcut icon"
            href="/static/images/favicon/favicon.ico?v=2"
          />
          <link
            rel="stylesheet"
            href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"
          />

          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
