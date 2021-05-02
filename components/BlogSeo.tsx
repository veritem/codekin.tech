import { NextSeo } from 'next-seo'
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
        <NextSeo
            title={`codekin | ${title}`}
            description={`${summary}`}
            canonical={url}
            openGraph={{
                type: 'article',
                article: { publishedTime: date },
                url,
                title,
                description: summary,
                images: [
                    {
                        url: `http://codekin.tech/${image}`,
                        width: 800,
                        height: 800,
                        alt: 'Image'
                    }
                ],
                site_name: 'codekin'
            }}
            twitter={{
                handle: '@makuza_mugabo_verite',
                site: 'veritem.me',
                cardType: 'summary_large_image'
            }}
        />
    )
}
export default BlogSeo
