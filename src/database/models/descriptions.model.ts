import { Description } from '@/types'
import mongoose, { Model, Schema } from 'mongoose'

export interface IDescription extends Description { }

const descriptionsSchema = new Schema({
  name_en: { type: String, requried: true },
  name_es: { type: String, requried: true },
})

const DescriptionModel: Model<IDescription> = mongoose.models.Description || mongoose.model('Description', descriptionsSchema, 'descriptions')

export default DescriptionModel
