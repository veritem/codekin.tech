import { NextApiRequest, NextApiResponse } from 'next'
import { getAllPosts } from '@/lib/posts'

export default (_req: NextApiRequest, res: NextApiResponse) => {
    const posts = getAllPosts()

    let response = posts.filter((post) => (post as any).isPublished)

    res.status(200).json(response)
}
