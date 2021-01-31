import { getAllPosts } from '../lib/posts'

describe('Check if we get all posts', () => {
    test('should give all posts if any', async () => {
        const posts = await getAllPosts()
        expect(posts.length > 0).toBeTruthy()
    })
})
