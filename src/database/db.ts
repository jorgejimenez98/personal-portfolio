/* eslint-disable no-console */
import { isLocal } from '@/lib/utils'
import mongoose from 'mongoose'

/*
 * 0 = Disconnected
 * 1 = Connected
 * 2 = Connecting
 * 3 = Disconnecting
 */
const mongoConnection = {
  isConnected: 0
}

const connect = async () => {
  if (mongoConnection.isConnected === 1) {
    console.debug('DB Connected')
    return
  }

  if (mongoose.connections.length > 0) {
    mongoConnection.isConnected = mongoose.connections[0].readyState
    if (mongoConnection.isConnected === 1) {
      console.log('Using previous connection')
      return
    }
    await mongoose.disconnect()
  }

  await mongoose.connect(process.env.MONGO_DB_CONNECTION || '')
  mongoConnection.isConnected = 1
  console.log('Connected to Mongo DB')
}

const disconnect = async () => {
  if (isLocal) return
  if (mongoConnection.isConnected === 0) return
  await mongoose.disconnect()
  console.log('Disconected from Mongo DB')
}

export const db = {
  connect,
  disconnect
}
