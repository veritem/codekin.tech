import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllSlugs, getPostBySlug } from '@/lib/posts'
import BlogLayout from '@/layouts/BlogLayout'
import { PostHeading } from 'types/PostHeading'
import hydrate from 'next-mdx-remote/hydrate'
import MdxComponent from '@/components/MdxComponent'

interface SlugProps {
    source: string
    frontMatter: PostHeading
}

export const Slug: React.FC<SlugProps> = ({ frontMatter, source }) => {
    const content = hydrate(source as any, {
        components: MdxComponent
    })
    return <BlogLayout frontMatter={frontMatter}>{content}</BlogLayout>
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
        props: { source: mdxSource, frontMatter },
        revalidate: 30
    }
}

export default Slug
