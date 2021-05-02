import Container from '@/layouts/index'
import Head from 'next/head'
import Link from 'next/link'

export default function NotFound() {
    return (
        <>
            <Head>
                <title>404 - Not found</title>
            </Head>

            <Container>
                <div className=" flex justify-center place-items-center h-screen w-screen flex-col">
                    <p className="text-6xl text-center mb-4">404 | Page not found</p>
                    <p>
                        <Link href="/">
                            <a className=" text-blue-600 font-bold text-2xl">Back to home</a>
                        </Link>
                    </p>
                </div>
            </Container>
        </>
    )
}
