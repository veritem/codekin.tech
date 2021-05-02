import Container from '@/layouts/index'
import Head from 'next/head'
import Link from 'next/link'
import { Fragment } from 'react'

export default function NotFound() {
    return (
        <Fragment>
            <Head>
                <title>404 - Not found</title>
            </Head>

            <Container>
                <div className=" flex justify-center place-items-center h-screen w-screen flex-col">
                    <p className="text-6xl text-center mb-4">
                        500 | We are facing a critical situation on our side
                    </p>
                    <p>
                        <Link href="/">
                            <a className=" text-blue-600 font-bold text-2xl">Check the site soon</a>
                        </Link>
                    </p>
                </div>
            </Container>
        </Fragment>
    )
}
