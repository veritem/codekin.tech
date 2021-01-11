import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllSlugs, getPostBySlug } from '@/lib/posts'
import BlogLayout from '@/layouts/BlogLayout'
import { PostHeading } from 'types/PostHeading'

interface SlugProps {
    source: string
    frontMatter: PostHeading
}

export const Slug: React.FC<SlugProps> = ({ frontMatter, source }): React.ReactElement => {
    return <BlogLayout frontMatter={frontMatter}>{source}</BlogLayout>
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
