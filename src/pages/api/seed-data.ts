import type { NextApiRequest, NextApiResponse } from 'next'
import { db, seedData } from '@/database'
import { SocialMediaModel } from '@/database/models'

export default async function handler(
  req: NextApiRequest, res: NextApiResponse<{ message: string }>
) {
  if (process.env.NODE_ENV === 'production') {
    return res.status(401).json({ message: 'Access denied' })
  }
  await db.connect()
  await SocialMediaModel.insertMany(seedData.socialMedias)
  await db.disconnect()

  res.status(200).json({ message: 'Seed data inserted' })
}
