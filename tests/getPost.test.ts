import { getPostBySlug } from '../lib/posts'

const slug = 'esm-nodejs'

describe('Check if top-10-wiki-apps is returned', () => {
    test('should  return top-10-wiki-apps post', async () => {
        const post = await getPostBySlug('esm-nodejs')
        expect(post.frontMatter.slug === slug).toBeTruthy()
    })

    test('should fail if slug is not found', async () => {
        const post = await getPostBySlug('nothing')
        expect(post.frontMatter === null)
    })
})
