import { NextApiRequest, NextApiResponse } from 'next'

export default function Handler(_req: NextApiRequest, res: NextApiResponse) {
    res.status(200).send('You are here')
}
