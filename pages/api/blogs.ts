import { NextApiRequest, NextApiResponse } from 'next'
// import { getAllPosts } from '@/lib/posts'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

export default (_req: NextApiRequest, res: NextApiResponse) => {
    const dir = path.resolve('./posts')

    const filenames = fs.readdirSync(dir)

    const posts = filenames.map((name) => {
        const fullname = path.join(process.cwd(), 'posts', name)
        const fileContent = fs.readFileSync(fullname)
        const { data } = matter(fileContent)
        return data
    })

    let response = posts.filter((post) => post.isPublished)

    res.status(200).json(response)
}
