import React, { Fragment } from 'react'
import Container from '@/layouts/index'
import Head from 'next/head'
import { getAllPosts } from '@/lib/posts'
import Link from 'next/link'
import { NextPage } from 'next'
import { getLastUpdateDate } from '@/lib/getLastUpdateDate'
import orderby from 'lodash.orderby'

type Post = {
    title: string
    publishedOn: Date
    author: string
    summary: string
    slug: string
    url: string
}

interface Props {
    posts: Post[]
}

export const Home: NextPage<Props> = ({ posts }) => {
    return (
        <Fragment>
            <Head>
                <title>codeKin</title>
            </Head>
            <Container>
                <div className="mt-20">
                    {posts.length >= 1 && (
                        <h2 className="text-2xl leading-9 font-display font-extrabold text-gray-900 tracking-tight dark:text-white mb-8">
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
                                <p className="mt-3 text-base text-gray-800 mb-2  font-helper dark:text-white">
                                    {post.summary}
                                </p>
                                <p className="text-gray-400 text-sm">
                                    last updated {getLastUpdateDate(post.publishedOn)}
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

export const getStaticProps = async () => {
    const postsArray = getAllPosts()

    const posts = orderby(
        [...getAllPosts()].map((content) => content),
        ['publishedOn'],
        ['desc']
    )

    return {
        props: {
            posts
        }
    }
}

export default Home
