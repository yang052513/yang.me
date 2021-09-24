import { connectToDatabase } from 'libs/config/mongodb'
import { NextApiRequest, NextApiResponse } from 'next'

/**
 * Get all API yaml documents
 * @route /api/profile
 */
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, headers } = req
  const { db } = await connectToDatabase()

  try {
    switch (method) {
      case 'GET':
        if (headers.authorization !== process.env.AUTHORIZATION_TOKEN) {
          return res.status(401).json({
            message: 'Unauthorized'
          })
        }
        const profile = await db.collection('profiles').findOne({})
        return res.status(200).json(profile)
      default:
        throw new Error('Invalid HTTP Request Method')
    }
  } catch (err) {
    return res.status(500).json({
      message: '500 Internal Server Error',
      error: err
    })
  }
}