import { NextSeo, ArticleJsonLd } from 'next-seo'
import { PostHeading } from 'types/PostHeading'

interface BlogSeoProps {
    post: PostHeading
}

export const BlogSeo: React.FC<BlogSeoProps> = ({ post }): React.ReactElement => {
    const date = new Date(post.publishedOn).toISOString()

    const SeoImages = {
        url: `http://codekin.tech/${post.image}`,
        alt: post.title
    }

    return (
        <>
            <NextSeo
                title={`${post.title}`}
                description={`${post.summary}`}
                canonical={post.url}
                openGraph={{
                    type: 'article',
                    article: { publishedTime: date },
                    url: post.url,
                    title: post.title,
                    description: post.summary,
                    images: [SeoImages]
                }}
            />
            <ArticleJsonLd
                title={post.title}
                url={post.url}
                publisherName="Makuza Mugabo Verite"
                authorName={post.author}
                dateModified={date}
                datePublished={date}
                description={post.summary}
                images={[SeoImages.url]}
                publisherLogo={'/android-chrome-192x192.png'}
            />
        </>
    )
}
export default BlogSeo
