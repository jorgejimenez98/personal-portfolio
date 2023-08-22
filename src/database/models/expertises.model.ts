import { Expertise } from '@/types'
import mongoose, { Model, Schema } from 'mongoose'

export interface IExpertise extends Expertise { }

const expertisesSchema = new Schema({
  backgroundColor: { type: String, required: true },
  logoUrl: { type: String, required: true },
  name_en: { type: String, required: true },
  name_es: { type: String, required: true },
  dateStart: { type: String, required: true },
  dateEnd: { type: String, required: true },
  location_en: { type: String, required: true },
  location_es: { type: String, required: true },
  description_en: { type: String, required: true },
  description_es: { type: String, required: true },
  backendSkills: [{ type: String, required: true }],
  frontendSkills: [{ type: String, required: true }],
  desktopSkills: [{ type: String, required: true }],
  mobileSkills: [{ type: String, required: true }],
  keyExperiences: [{ type: String, required: true }],
})

const ExpertiseModel: Model<Expertise> = mongoose.models.Expertise || mongoose.model('Expertise', expertisesSchema, 'expertises')

export default ExpertiseModel
