import React, { FC, ReactNode, useReducer } from 'react'

import { UiContext } from './UIContext'
import { uiReducer } from './uiReducer'
import { AppTheme } from '@/types'

export interface UiState {
  selectedTheme: AppTheme
}

const UI_INITIAL_STATE: UiState = {
  selectedTheme: 'ligth',
}

export const UiProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

  const setAppTheme = (value: AppTheme) => {
    dispatch({ type: 'Ui - Change Theme', payload: value })
  }

  return (
    <UiContext.Provider value={{
      ...state,
      setAppTheme
    }}>
      {children}
    </UiContext.Provider>
  )
}
