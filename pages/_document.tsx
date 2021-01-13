import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    render() {
        return (
            <Html lang="en">
                <Head />
                <body className="bg-white dark:bg-primary-dark h-screen">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
