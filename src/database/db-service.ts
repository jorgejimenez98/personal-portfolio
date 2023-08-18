import { db } from './db'
import { MainSkill, SocialMedia } from '@/types'
import { SocialMediaModel, MainSkillModel } from './models'
import mongoose from 'mongoose'

class MongoDbService {

  async fetchData<T>(
    model: mongoose.Model<T>,
  ): Promise<T[]> {
    await db.connect()
    const data = await model.find({}, { _id: 0, __v: 0 }).lean()
    await db.disconnect()
    return JSON.parse(JSON.stringify(data)) as T[] || []
  }

  async getSocialMedias(): Promise<SocialMedia[]> {
    return this.fetchData<SocialMedia>(SocialMediaModel)
  }

  async getMainSkills(): Promise<MainSkill[]> {
    return this.fetchData<MainSkill>(MainSkillModel)
  }
}

const mongoDbService = new MongoDbService()
export { mongoDbService }
