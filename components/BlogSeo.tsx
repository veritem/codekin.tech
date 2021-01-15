import { NextSeo, ArticleJsonLd } from 'next-seo'
import { PostHeading } from 'types/PostHeading'

export const BlogSeo: React.FC<PostHeading> = ({
    title,
    summary,
    publishedOn,
    url,
    image,
    author
}): React.ReactElement => {
    const date = new Date(publishedOn).toISOString()

    const SeoImages = {
        url: `http://codekin.tech/${image}`,
        alt: title
    }

    return (
        <>
            <NextSeo
                title={`${title}`}
                description={`${summary}`}
                canonical={url}
                openGraph={{
                    type: 'article',
                    article: { publishedTime: date },
                    url,
                    title,
                    description: summary,
                    images: [SeoImages]
                }}
            />
            <ArticleJsonLd
                authorName={author}
                dateModified={date}
                datePublished={date}
                description={summary}
                images={[SeoImages.url]}
                publisherLogo={'/android-chrome-192x192.png'}
                publisherName="Makuza Mugabo Verite"
                title={title}
                url={url}
            />
        </>
    )
}
export default BlogSeo
