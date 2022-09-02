import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useSession } from "next-auth/react"
import { SessionProvider } from "next-auth/react"
import { Session } from '../types/'

function MyApp(Component: JSX.IntrinsicAttributes, pageProps: JSX.IntrinsicAttributes, session: AppProps) {

  return <SessionProvider session={session}>
  <Component {...pageProps} />
</SessionProvider>
}
