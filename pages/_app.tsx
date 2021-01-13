import '../styles/tailwind.css'
import { ReactElement } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
// import SEO from '../next-seo.config'
// import { NextSeo } from 'next-seo'

//TODO:  fix app seo

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
