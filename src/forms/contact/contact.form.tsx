/* eslint-disable no-unused-vars */
import React from 'react'
import { Formik, Form } from 'formik'
import { useTranslation } from 'next-i18next'

import { CustomTextArea, CustomTextInput } from '@/components'
import { ContactFormPayload } from '@/types'
import { initialValues, validationSchema } from './contact.schema'

interface ContactFormProps {
  handleSubmit: (values: ContactFormPayload) => void
}

export const ContactForm: React.FC<ContactFormProps> = ({ handleSubmit }) => {
  const { t } = useTranslation()

  const onSubmit = (values: ContactFormPayload) => {
    handleSubmit(values)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema(t)}
      onSubmit={onSubmit}
    >
      <Form>
        <CustomTextInput
          name='name'
          placeholder={t('Contact.Name')}
          className='mb-4'
        />
        <CustomTextInput
          name='email'
          placeholder={t('Contact.Email')}
          className='mb-4'
        />
        <CustomTextArea
          name='message'
          placeholder={t('Contact.Message')}
          className='mb-4'
        />

        <div className='flex justify-end'>
          <button
            type='submit'
            className='btn btn-primary w-full lg:w-28'
          >
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  )
}
