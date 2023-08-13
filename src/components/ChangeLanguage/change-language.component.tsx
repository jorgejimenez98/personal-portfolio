import React, { useContext } from 'react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import Image from 'next/image'

import { UiContext } from '@/context/ui'
import { AppLanguage } from '@/types'
import { CLASSES } from './change-language.classes'
import { useLocalStorage } from '@/hooks'

const ChangeLanguage: React.FC = () => {
  const { i18n } = useTranslation()
  const router = useRouter()
  const { selectedLanguage, setAppLanguage } = useContext(UiContext)
  const { setValue: setLanguageValue } = useLocalStorage('language')

  const getFlagUrl = (countryCode: string): string => {
    return `https://flagsapi.com/${countryCode}/flat/64.png`
  }

  const languages = [
    { flagUrl: getFlagUrl('US'), label: 'English', code: 'en' },
    { flagUrl: getFlagUrl('ES'), label: 'Español', code: 'es' }
  ]

  const handleChangeLanguage = async (languageCode: AppLanguage) => {
    if (selectedLanguage === languageCode) return
    setLanguageValue(languageCode)
    setAppLanguage(languageCode)
    await i18n.changeLanguage(languageCode)
    router.push(router.asPath, undefined, { locale: languageCode })
  }

  return (
    <div className={CLASSES.DROPDOWN}>
      <label
        tabIndex={0}
        className={CLASSES.DROPDOWN_BTN}
      >
        {selectedLanguage.toUpperCase()}
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
