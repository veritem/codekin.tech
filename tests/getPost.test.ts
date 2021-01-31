import { getPostBySlug } from '../lib/posts'

const slug = 'top-10-wiki-apps'

describe('Check if top-10-wiki-apps is returned', () => {
    test('should  return top-10-wiki-apps post', async () => {
        const post = await getPostBySlug(slug)
        expect(post.frontMatter.slug === slug).toBeTruthy()
    })
})
