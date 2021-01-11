import React from 'react'
import { Post } from 'types/Post'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllSlugs, getPostBySlug } from '@/lib/posts'

interface SlugProps {
    post: Post
}

export const Slug: React.FC<SlugProps> = ({ post }): React.ReactElement => {
    console.log(post)
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}
export default Slug

export const getStaticPaths: GetStaticPaths = async () => {
    const slugs = getAllSlugs()

    console.log(slugs)
    return {
        paths: slugs.map((s) => ({ params: { slug: s.slug } })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const data = getPostBySlug(params.slug)
    return {
        props: { post: data }
    }
}
