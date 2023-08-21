import * as Yup from 'yup'
import { TFunction } from 'next-i18next'
import { ContactFormPayload } from '@/types'

export const initialValues: ContactFormPayload = {
  name: '',
  email: '',
  message: '',
}

export const validationSchema = (t: TFunction) => Yup.object({
  name: Yup.string().required(t('Validations.Required')),
  email: Yup.string().email(t('Validations.InvalidEmail')).required(t('Validations.Required')),
  message: Yup.string().required(t('Validations.Required')),
})
