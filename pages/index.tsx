import React, { Fragment } from 'react'
import Container from '@/layouts/index'
import Head from 'next/head'
import { getAllPosts } from '@/lib/posts'
import Link from 'next/link'

//TODO: Fix the Navbar

export default function Home({ posts }): React.ReactElement {
    const getLastUpdateDate = (date: Date): string => {
        const d = new Date(date)
        const day = d.getDate() + 1
        const month = d.getMonth()
        const year = d.getFullYear()
        return `${day}/${month}/${year}`
    }

    console.log(getLastUpdateDate(new Date()))

    return (
        <Fragment>
            <Head>
                <title>codeKin</title>
            </Head>
            <Container>
                <div className="mt-12">
                    {posts.length >= 1 && (
                        <h2 className="text-3xl leading-9 font-display font-extrabold text-gray-900 tracking-tight dark:text-white mb-16">
                            Recent posts
                        </h2>
                    )}

                    <div>
                        {posts.map((post, index) => (
                            <div key={`${post.slug}-${index}`} className="py-2 mb-6">
                                <Link href={`/${post.slug}`}>
                                    <a className=" font-display text-blue-600  text-xl dark:text-blue-500">
                                        {post.title}
                                    </a>
                                </Link>
                                <p className="mt-3 text-sm text-gray-800  font-helper dark:text-white">
                                    {post.summary}
                                </p>
                                <p className="text-gray-400">
                                    Last updated {getLastUpdateDate(post.publishedOn as Date)}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* {posts.length == 0 && (
                        <div>
                            <div className="font-black text-white text-center md:text-9xl sm:text-6xl">
                                <span className="bg-gradient-to-r text-transparent font-display bg-clip-text from-purple-400 to-pink-500">
                                    Welcome to my Blog
                                </span>
                            </div>
                            <p className=" text-center md:text-2xl sm:text-xl dark:text-white font-helper mt-10">
                                Comming soon
                            </p>
                            <p className="text-center md:text-base sm:text-sm dark:text-white font-helper mt-36">
                                Made with{' '}
                                <span role="img" aria-labelledby="love">
                                    ❤️
                                </span>{' '}
                                by{'  '}
                                <Link href="https://twitter.com/makuza_mugabo_v">
                                    <a className=" text-blue-500">Makuza Mugabo Verite</a>
                                </Link>
                            </p>
                        </div>
                    )} */}
                </div>
            </Container>
        </Fragment>
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
