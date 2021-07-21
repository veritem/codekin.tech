import { NextApiRequest, NextApiResponse } from 'next'
import { getAllPosts } from '@/lib/posts'

export default function Handler(_req: NextApiRequest, res: NextApiResponse) {
    const posts = getAllPosts().filter((item) => (item as any).isPublished)
    res.status(200).json(posts)
}
