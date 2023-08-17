import { SocialMedia } from '@/types'
import mongoose, { Model, Schema } from 'mongoose'

export interface ISocialMedia extends SocialMedia { }

const socialMediaSchema = new Schema({
  name: { type: String, requried: true },
  backgroundColor: { type: String, requried: true },
  iconClass: { type: String, requried: true },
  url: { type: String, requried: true }
})

const SocialMediaModel: Model<ISocialMedia> = mongoose.models.SocialMedia || mongoose.model('SocialMedia', socialMediaSchema)

export default SocialMediaModel
