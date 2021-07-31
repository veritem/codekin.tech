import Container from '@/layouts/index'
import { getLastUpdateDate } from '@/lib/getLastUpdateDate'
import { getAllPosts } from '@/lib/posts'
import orderby from 'lodash.orderby'
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React, { Fragment } from 'react'

type Post = {
    title: string
    publishedOn: Date
    author: string
    summary: string
    slug: string
    url: string
    isPublished: boolean
}

interface Props {
    posts: Post[]
}

export const Home: NextPage<Props> = ({ posts }) => {
    return (
        <Fragment>
            <Head>
                <title>codekin</title>
            </Head>
            <Container>
                <div className="mt-20">
                    {posts.length >= 1 && (
                        <h2 className="text-2xl leading-9 font-display font-extrabold text-gray-900 tracking-tight dark:text-white mb-8">
                            Recent posts
                        </h2>
                    )}

                    <div>
                        {posts.map((post, index) => {
                            if (post.isPublished) {
                                return (
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
                                )
                            }
                        })}
                    </div>
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
