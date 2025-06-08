import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ResizableNavbar } from '../components/ui/resizable-navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ResizableNavbar />
      <Component {...pageProps} />
    </>
  )
}
