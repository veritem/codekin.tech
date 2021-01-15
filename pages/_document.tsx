import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta content="#ffffff" name="theme-color" />{' '}
                </Head>
                <body className=" dark:bg-black dark:text-black">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
