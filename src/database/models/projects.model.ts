import { Project } from '@/types'
import mongoose, { Model, Schema } from 'mongoose'

export interface IProject extends Project { }

const projectsSchema = new Schema({
  logoUrl: { type: String, required: true, },
  name_es: { type: String, required: true },
  name_en: { type: String, required: true },
  description_en: { type: String, required: true },
  description_es: { type: String, required: true },
  isRepoUrl: { type: Boolean, required: true },
  websiteUrl: { type: String, required: true },
  images: { type: [String], 'default': [] }
})

const DescriptionModel: Model<IProject> = mongoose.models.Project || mongoose.model('Project', projectsSchema, 'projects')

export default DescriptionModel
