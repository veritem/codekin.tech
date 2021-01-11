/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import Container from '@/layouts/index'
import Head from 'next/head'
import { getAllPosts } from '../lib/posts'
import Link from 'next/link'

export default function Home({ posts }): React.ReactElement {
    return (
        <>
            <Head>
                <title>codeKin</title>
            </Head>
            <Container>
                {/* <div className="mb-8">
                    <h2 className=" text-4xl dark:text-white pb-1 font-display">
                        Welcome to codeKin
                    </h2>
                    <p className=" text-xl text-primary dark:text-white font-body">
                        The programming blog for Software enthusiasts
                    </p>
                </div> */}
                <div>
                    <h2 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight dark:text-white mb-5">
                        Recent posts
                    </h2>

                    <div className="py-4">
                        {posts.map((post, index) => (
                            <div key={`${post.slug}-${index}`}>
                                <h2>{post.title}</h2>
                                <p>{post.summary}</p>
                                <Link href={`/${post.slug}`}>
                                    <a>Read more</a>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </>
    )
}

Home.defaultProps = {
    posts: []
}

export async function getStaticProps() {
    const posts = getAllPosts()
    return {
        props: {
            posts
        }
    }
}
