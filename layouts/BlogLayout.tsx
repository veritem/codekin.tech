import BlogSeo from '@/components/BlogSeo'
import { PostHeading } from 'types/PostHeading'
import IndexLayout from './index'
import Image from 'next/image'
import Link from 'next/link'
import formatDate from '../lib/formatDate'
import Footer from '@/components/Footer'

interface BlogLayoutProps {
    frontMatter: PostHeading
}

export const BlogLayout: React.FC<BlogLayoutProps> = ({
    frontMatter,
    children
}): React.ReactElement => {
    return (
        <IndexLayout>
            <BlogSeo url={`https://codekin.tech/${frontMatter.slug}`} {...frontMatter} />
            <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-28 w-full">
                <h1 className="font-bold text-2xl  tracking-tight mt-0 mb-5 text-black dark:text-white">
                    {frontMatter.title}
                </h1>

                <p className=" text-gray-400 pb-4 text-sm">
                    updated {formatDate((frontMatter.publishedOn as unknown) as Date)} •{' '}
                    {frontMatter.readTime.text}
                </p>

                <div className="w-full h-1/4 mb-12">
                    <Image src={frontMatter.image} width={900} height={500} />
                </div>

                <div className="prose dark:prose-dark max-w-none w-full">{children}</div>
                <div className="mt-8 text-right text-blue-500">
                    <Link
                        href={`https://github.com/makuzaverite/codekin.tech/blob/main/posts/${frontMatter.slug}.mdx`}>
                        <a>Edit this page</a>
                    </Link>
                </div>
            </article>
            <Footer />
        </IndexLayout>
    )
}
export default BlogLayout
