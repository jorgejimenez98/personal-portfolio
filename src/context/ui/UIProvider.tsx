import React, { FC, ReactNode, useEffect, useReducer } from 'react'

import { UiContext } from './UIContext'
import { uiReducer } from './uiReducer'
import { AppLanguage, AppTheme } from '@/types'

export interface UiState {
  selectedTheme: AppTheme,
  selectedLanguage: AppLanguage
}

const UI_INITIAL_STATE: UiState = {
  selectedTheme: 'ligth',
  selectedLanguage: 'en'
}

export const UiProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') as AppLanguage
    const storedTheme = localStorage.getItem('theme') as AppTheme

    if (storedLanguage) {
      dispatch({ type: 'Ui - Change Language', payload: storedLanguage })
    }
    if (storedTheme) {
      dispatch({ type: 'Ui - Change Theme', payload: storedTheme })
    }
  }, [])

  const setAppTheme = (value: AppTheme) => {
    dispatch({ type: 'Ui - Change Theme', payload: value })
  }

  const setAppLanguage = (value: AppLanguage) => {
    dispatch({ type: 'Ui - Change Language', payload: value })
  }

  return (
    <UiContext.Provider value={{
      ...state,
      setAppTheme,
      setAppLanguage
    }}>
      {children}
    </UiContext.Provider>
  )
}
