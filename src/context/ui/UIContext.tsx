/* eslint-disable no-unused-vars */
import { AppTheme } from '@/types'
import { createContext } from 'react'

interface ContextProps {
    // State
     selectedTheme: AppTheme;

     // Methods
     setAppTheme: (value: AppTheme) => void
}

export const UiContext = createContext({} as ContextProps)
