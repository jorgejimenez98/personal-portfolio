import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import { EmailPayload } from '@/types'


const sendEmail = async (payload: EmailPayload): Promise<void> => {
  await axios.post('/api/send-email', payload, { headers: {
    'Content-Type': 'application/json'
  } })
}

export const useSendEmail = () => {
  return useMutation(sendEmail)
}
