import { MainSkill } from '@/types'
import mongoose, { Model, Schema } from 'mongoose'

export interface IMainSkill extends MainSkill { }

const mainSkillSchema = new Schema({
  name: { type: String, requried: true },
  qualification: { type: String, requried: true },
})

const MainSkillModel: Model<IMainSkill> = mongoose.models.MainSkill || mongoose.model('MainSkill', mainSkillSchema, 'mainSkills')

export default MainSkillModel
