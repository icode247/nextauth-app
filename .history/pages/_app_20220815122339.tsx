import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useSession } from "next-auth/react"
import { SessionProvider } from "next-auth/react"


function MyApp({ Component, pageProps, session`````````` }: AppProps) {

  return <SessionProvider session={session}>
  <Component {...pageProps} />
</SessionProvider>
}
