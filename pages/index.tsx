/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import Container from '@/layouts/index'
import Head from 'next/head'
import { getAllPosts } from '@/lib/posts'
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
                    {posts.length > 1 && (
                        <h2 className="text-3xl leading-9 font-display font-extrabold text-gray-900 tracking-tight dark:text-white mb-8">
                            Recent posts
                        </h2>
                    )}

                    <div>
                        {posts.map((post, index) => (
                            <div key={`${post.slug}-${index}`} className=" py-4">
                                <h2 className=" font-display  text-xl dark:text-white">
                                    {post.title}
                                </h2>
                                <p className="mt-6 mb-4 font-helper dark:text-white">
                                    {post.summary}
                                </p>
                                <Link href={`/${post.slug}`}>
                                    <a className="dark:text-white font-body">Read more</a>
                                </Link>
                            </div>
                        ))}
                    </div>

                    {posts.length == 0 && (
                        <div>
                            <div className="font-black text-white text-center text-9xl">
                                <span className="bg-gradient-to-r text-transparent bg-clip-text from-purple-400 to-pink-500">
                                    Welcome to my Blog
                                </span>
                            </div>
                            <p className=" text-center text-3xl dark:text-white font-body mt-10">
                                New content comming out every Week
                            </p>
                        </div>
                    )}
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
