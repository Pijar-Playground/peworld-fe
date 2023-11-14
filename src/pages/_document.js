import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <title>Home | Peworld</title> */}
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
        {/* <script /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
