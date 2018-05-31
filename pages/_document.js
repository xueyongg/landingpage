import Document, { Head, Main, NextScript } from "next/document";
import Layout from "./utils/layout";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
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
          <Layout>
            <Main />
            <NextScript />
          </Layout>
        </body>
      </html>
    );
  }
}
