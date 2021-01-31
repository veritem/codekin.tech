import BlogSeo from '@/components/BlogSeo'
import { PostHeading } from 'types/PostHeading'
import IndexLayout from './index'
import Image from 'next/image'

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
            <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                    {frontMatter.title}
                </h1>
                <Image src={frontMatter.image} height={200} width="full" />
                <div className="prose dark:prose-dark max-w-none w-full">{children}</div>
            </article>
        </IndexLayout>
    )
}
export default BlogLayout
