import '../styles/tailwind.css'
import { ReactElement, useEffect } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import { MDXProvider } from '@mdx-js/react'
import MDXComponents from '@/components/MdxComponent'
// import * as gtag from '@/lib/gtag'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
    const router = useRouter()

    // useEffect(() => {
    //     const handleRouteChange = (url) => {
    //         gtag.preview(url)
    //     }
    //     router.events.on('routeChangeComplete', handleRouteChange)
    //     return () => {
    //         router.events.off('routeChangeComplete', handleRouteChange)
    //     }
    // }, [router.events])

    return (
        <ThemeProvider attribute="class" defaultTheme="dark">
            <MDXProvider components={MDXComponents}>
                <Head>
                    <meta content="width=device-width, initial-scale=1" name="viewport" />
                </Head>
                <DefaultSeo {...SEO} />
                <Component {...pageProps} />
            </MDXProvider>
        </ThemeProvider>
    )
}

export default MyApp
