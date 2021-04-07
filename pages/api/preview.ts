import { NextApiResponse } from 'next'

export default function handler(req, res: NextApiResponse) {
    res.setPreviewData({
        maxAge: 60 * 60 // The preview mode cookies expire in 1 hour
    })
    res.redirect(req.query.route)
}
