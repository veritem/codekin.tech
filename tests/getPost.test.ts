import { getPostBySlug } from '../lib/posts'

const slug = 'esm-nodejs'

describe('Check if post is returned', () => {
    test('should  return post', async () => {
        const post = await getPostBySlug('esm-nodejs')
        expect(post.frontMatter.slug === slug).toBeTruthy()
    })

    test('should fail if slug is not found', async () => {
        const post = await getPostBySlug('nothing')
        expect(post.frontMatter === null)
    })
})
