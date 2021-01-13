import { PostHeading } from './PostHeading'

export interface Post extends PostHeading {
    body: string
    publishedOn: string
    author: string
}
