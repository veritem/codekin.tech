import '../styles/tailwind.css'
import { ReactElement } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
    return (
        <ThemeProvider attribute="class">
            <Head>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
            </Head>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
