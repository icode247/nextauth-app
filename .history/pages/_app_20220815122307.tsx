import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useSession } from "next-auth/react"
import { SessionProvider } from "next-auth/react"


function MyApp({ Component, pageProps, session }: AppProps) {
  const { data: session } = useSession()
  return <Component {...pageProps} />
}

export default MyApp



export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    
  )
}