import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Script defer src="https://analytics.us.umami.is/script.js" data-website-id="f85088d6-f79d-45a1-844e-45417e551ac4"></Script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
