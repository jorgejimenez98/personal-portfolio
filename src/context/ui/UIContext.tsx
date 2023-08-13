/* eslint-disable no-unused-vars */
import { AppLanguage, AppTheme } from '@/types'
import { createContext } from 'react'

interface ContextProps {
    // State
     selectedTheme: AppTheme;
     selectedLanguage: AppLanguage;

     // Methods
     setAppTheme: (value: AppTheme) => void
     setAppLanguage: (value: AppLanguage) => void
}

export const UiContext = createContext({} as ContextProps)
