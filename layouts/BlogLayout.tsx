import BlogSeo from '@/components/BlogSeo'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { PostHeading } from 'types/PostHeading'
import formatDate from '../lib/formatDate'
import IndexLayout from './index'

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
                <h1 className="mt-0 mb-5 text-2xl font-bold tracking-tight text-black dark:text-white">
                    {frontMatter.title}
                </h1>

                <div className="flex justify-between w-full">
                    <p className="pb-4 text-sm text-gray-400 ">
                        updated {formatDate(frontMatter.publishedOn as unknown as Date)}{' '}
                    </p>
                    <p className="pb-4 text-sm text-gray-400 ">{frontMatter.readTime.text}</p>
                </div>

                <div className="w-full mb-12 h-1/4">
                    <Image
                        src={frontMatter.image}
                        alt={frontMatter.image}
                        width={900}
                        height={500}
                    />
                </div>

                <div className="w-full prose dark:prose-dark max-w-none">{children}</div>
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
