import React, { useEffect, useState } from 'react'
import { Formik, Form, FormikHelpers } from 'formik'
import { useTranslation } from 'next-i18next'

import { Alert, CustomTextArea, CustomTextInput, Modal } from '@/components'
import { ContactFormPayload } from '@/types'
import { initialValues, validationSchema } from './contact.schema'
import { TwoColumnLayout } from '@/layouts'
import { useSendEmail } from '@/hooks'

export const ContactForm: React.FC = () => {
  const { t } = useTranslation()
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const { mutateAsync, isLoading, isError, isSuccess } = useSendEmail()

  const onSubmit = (
    { email, message, name }: ContactFormPayload,
    { resetForm }: FormikHelpers<ContactFormPayload>
  ) => {
    mutateAsync({
      to: process.env.NODEMAILER_EMAIL as string,
      subject: `Nuevo email de ${email}`,
      text: `Cliente ${name} - ${email}. ${message}`
    })
    resetForm()
  }

  useEffect(() => {
    if (isError || isSuccess) {
      setIsModalVisible(true)
    }
  }, [isError, isSuccess])

  return <>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema(t)}
      onSubmit={onSubmit}
    >
      <Form>
        <TwoColumnLayout>
          <CustomTextInput
            name='name'
            placeholder={t('Contact.Name')}
            className='mb-4 lg:mr-2'
          />
          <CustomTextInput
            name='email'
            placeholder={t('Contact.Email')}
            className='mb-4 lg:ml-2'
          />
        </TwoColumnLayout>

        <CustomTextArea
          name='message'
          placeholder={t('Contact.Message')}
          className='mb-4'
        />

        <div className='flex justify-end'>
          <button
            type='submit'
            className={`
            btn btn-primary w-full
            lg:w-40 ${isLoading ? 'loading-bars' : ''}
            `}
          >
            {t('Contact.SendEmail')}
          </button>
        </div>
      </Form>
    </Formik>

    {/* Modal */}
    <Modal
      isVisible={isModalVisible}
      handleClose={() => setIsModalVisible(false)}
    >
      <Alert
        type='DEFAULT'
        text={t('Contact.Thanks')}
      />
    </Modal>
  </>
}
