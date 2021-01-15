import '../styles/tailwind.css'
import { ReactElement } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
    return (
        <ThemeProvider attribute="class">
            <Head>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
            </Head>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
