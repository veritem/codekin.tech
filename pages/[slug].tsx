import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllSlugs, getPostBySlug } from '@/lib/posts'

// interface SlugProps {
//     source: Post
// }

export const Slug: React.FC = (props): React.ReactElement => {
    console.log(props)
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const slugs = getAllSlugs()

    return {
        paths: slugs.map((s) => ({ params: { slug: s.slug } })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { mdxSource, frontMatter } = await getPostBySlug(params.slug)

    return {
        props: { source: mdxSource.renderedOutput, frontMatter },
        revalidate: 30
    }
}

export default Slug
