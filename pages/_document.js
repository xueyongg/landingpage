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
          <style>{"body { margin: 0 } /* custom! */"}</style>
          <meta
            content="initial-scale=1.0, width=device-width, maximum-scale=1"
            key="viewport"
            name="viewport"
          />
          <link
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css"
            rel="stylesheet"
          />
          <link
            href="/static/images/favicon/favicon.ico?v=2"
            rel="shortcut icon"
          />
          <link
            href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"
            rel="stylesheet"
          />

          <link href="/_next/static/style.css" rel="stylesheet" />
        </Head>

        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
