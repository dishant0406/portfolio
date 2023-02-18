import '../styles/globals.css'
import 'react-medium-image-zoom/dist/styles.css'
import type { AppProps } from 'next/app'
import { DataProvider } from 'utils'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DataProvider>
      <Component {...pageProps} />
    </DataProvider>
  )
}
