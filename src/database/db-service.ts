/* eslint-disable no-console */
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
      // await db.disconnect()

      console.log('Disconnected')
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

  async getExpertises(): Promise<types.Expertise[]> {
    return this.fetchData<types.Expertise>(models.ExpertiseModel)
  }

  async getProjects(): Promise<types.Project[]> {
    return this.fetchData<types.Project>(models.ProjectModel)
  }

  async getPageData(): Promise<types.MainPageProps> {
    await this.process('CONNECT')
    const [socialMedias, mainSkills, descriptions, expertises, projects] = await Promise.all([
      this.getSocialMedias(),
      this.getMainSkills(),
      this.getDescriptions(),
      this.getExpertises(),
      this.getProjects()
    ])
    await this.process('DISCONNECT')
    return { socialMedias, mainSkills, descriptions, expertises, projects }
  }
}

const mongoDbService = new MongoDbService()
export { mongoDbService }
