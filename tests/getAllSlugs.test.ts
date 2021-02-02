import { getAllSlugs } from '../lib/posts'

describe('Get all slugs', () => {
    test('should return all slugs', async () => {
        const slugs = await getAllSlugs()
        expect(slugs.length > 0).toBeTruthy()
    })
})
