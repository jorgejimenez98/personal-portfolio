import { db } from './db'
import * as types from '@/types'
import * as models from './models'
import mongoose from 'mongoose'

class MongoDbService {

  async fetchData<T>(
    model: mongoose.Model<T>,
  ): Promise<T[]> {
    const data = await model.find({}, { _id: 0, __v: 0 }).lean()
    return JSON.parse(JSON.stringify(data)) as T[] || []
  }

  async process(type: 'CONNECT' | 'DISCONNECT'): Promise<void> {
    if (type === 'CONNECT') {
      await db.connect()
    } else if (type === 'DISCONNECT') {
      await db.disconnect()
    }
  }

  async getSocialMedias(): Promise<types.SocialMedia[]> {
    return this.fetchData<types.SocialMedia>(models.SocialMediaModel)
  }

  async getMainSkills(): Promise<types.MainSkill[]> {
    return this.fetchData<types.MainSkill>(models.MainSkillModel)
  }

  async getDescriptions(): Promise<types.Description[]> {
    return this.fetchData<types.Description>(models.DescriptionModel)
  }
}

const mongoDbService = new MongoDbService()
export { mongoDbService }
