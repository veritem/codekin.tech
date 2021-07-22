import { GA_TRACKING_ID } from '@/lib/gtag'
import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta content="#ffffff" name="theme-color" />{' '}
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                    });
          `
                        }}></script>
                </Head>
                <body className="bg-white text-white dark:bg-black dark:text-black">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
