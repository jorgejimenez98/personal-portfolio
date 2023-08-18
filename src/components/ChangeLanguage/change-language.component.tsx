/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import { AppLanguage } from '@/types'
import { CLASSES } from './change-language.classes'
import { useCookie } from '@/hooks'
import { useTranslation } from 'next-i18next'

const ChangeLanguage: React.FC = () => {
  const router = useRouter()
  const { i18n } = useTranslation()
  const { language: i18nLanguage } = i18n
  const { value: selectedLanguage, setValue: setLanguageValue } = useCookie('language')

  const getFlagUrl = (countryCode: string): string => {
    return `https://flagsapi.com/${countryCode}/flat/64.png`
  }

  const languages = [
    { flagUrl: getFlagUrl('US'), label: 'English', code: 'en' },
    { flagUrl: getFlagUrl('ES'), label: 'Español', code: 'es' }
  ]

  const handleChangeLanguage = async (languageCode: AppLanguage) => {
    if (selectedLanguage === languageCode) return
    document.documentElement.setAttribute('lang', languageCode)
    setLanguageValue(languageCode)
    await i18n.changeLanguage(selectedLanguage)
    router.push(router.asPath, undefined, { locale: languageCode })
  }

  return (
    <div className={CLASSES.DROPDOWN}>
      <label
        tabIndex={0}
        className={CLASSES.DROPDOWN_BTN}
      >
        {i18nLanguage}
      </label>
      <ul
        tabIndex={0}
        className={CLASSES.UL_LIST}
      >
        {languages.map(language => (
          <li key={language.code}>
            <button
              disabled={selectedLanguage === language.code}
              className={selectedLanguage === language.code ? 'active mt-1': 'mt-1'}
              onClick={() => handleChangeLanguage(language.code as AppLanguage)}
            >
              <Image
                src={language.flagUrl}
                alt={language.code}
                width={20}
                height={20}
              />
              {language.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ChangeLanguage
