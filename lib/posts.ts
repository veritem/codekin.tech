/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import renderToString from 'next-mdx-remote/render-to-string'
import mdxPrism from 'mdx-prism'
import readingTime from 'reading-time'
import MDXComponents from '../components/MdxComponent'

const root = path.join(process.cwd())

export const getAllPosts = () => {
    const postsPath = path.join(process.cwd(), 'posts')
    const filenames = fs.readdirSync(postsPath)
    const filePosts = filenames.map((name) => {
        const fullPath = path.join(process.cwd(), 'posts', name)
        const file = fs.readFileSync(fullPath, 'utf-8')
        const { data, content } = matter(file)
        return { ...data, readTime: readingTime(content).text }
    })

    return filePosts
}

export const getPostBySlug = async (slug) => {
    let source

    try {
        source = fs.readFileSync(path.join(root, 'posts', `${slug}.mdx`), 'utf8')
    } catch (error) {
        return {}
    }

    const { data, content } = matter(source)

    const mdxSource = await renderToString(content, {
        components: MDXComponents,
        mdxOptions: {
            remarkPlugins: [
                require('remark-autolink-headings'),
                require('remark-slug'),
                require('remark-code-titles')
            ],
            rehypePlugins: [mdxPrism]
        }
    })

    return {
        mdxSource,
        frontMatter: {
            wordCount: content.split(/\s+/gu).length,
            readTime: readingTime(content),
            slug: slug || null,
            ...data
        }
    }
}

export const getAllSlugs = () => {
    const postsPath = path.join(process.cwd(), 'posts')
    const filenames = fs.readdirSync(postsPath)

    const slugs = filenames.map((name) => {
        const filePath = path.join(postsPath, name)
        const file = fs.readFileSync(filePath, 'utf-8')
        const { data } = matter(file)
        return data
    })

    return slugs
}
