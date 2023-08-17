import { SocialMedia } from '@/types'
import { db } from './db'
import { SocialMediaModel } from './models'

class MongoDbService {
  async getSocialMedias(): Promise<SocialMedia[]> {
    await db.connect()
    const socialMedias = await SocialMediaModel.find({}, { __v: 0, _id: 0 }).lean()
    await db.disconnect()
    return JSON.parse(JSON.stringify(socialMedias)) as SocialMedia[]
  }
}

const mongoDbService = new MongoDbService()
export { mongoDbService }
