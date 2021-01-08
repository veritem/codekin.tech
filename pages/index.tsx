import React from 'react'
import Container from '@/layouts/index'
import Head from 'next/head'

export default function Home(): React.ReactElement {
    return (
        <>
            <Head>
                <title>codeKin</title>
            </Head>
            <Container>
                <div className="mb-8">
                    <h2 className=" text-4xl dark:text-white pb-1">Welcome to codeKin</h2>
                    <p className=" text-xl text-primary dark:text-white">
                        The programming blog for Software enthusiasts
                    </p>
                </div>
                <div>
                    <h2 className="text-3xl dark:text-white">Recent posts</h2>
                </div>
            </Container>
        </>
    )
}
